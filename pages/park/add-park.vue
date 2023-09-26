<template>
	<view class="container">
		<view class="choose_park">
			<view style="padding: 20upx;padding-left: 35upx;">
				<text>选择车位</text>
			</view>
			<u-cell title="小区" is-link :value="value1" rightIconStyle="color: black; font-size:30upx;" @click="show1 = true"></u-cell>
			<u-cell title="区域" is-link :value="value2" rightIconStyle="color: black; font-size:30upx;" @click="show2 = true"></u-cell>
			<u-cell title="车位编号" is-link :value="value3" rightIconStyle="color: black; font-size:30upx;" @click="show3 = true"></u-cell>
			<u-cell title="车位类型" >
				<template #right-icon>
					<view class="type" @click="type = true" :class="type == true ? 'type_checked' : ''">
						私有
					</view>
					<view class="type"  @click="type = false" :class="type == false ? 'type_checked' : ''">
						租凭
					</view>
				</template>
			</u-cell>
		</view>
		<view class="user_info">
			<view style="padding: 20upx;padding-left: 35upx; background-color: #f5f5f5;">
				<text>住户信息</text>
			</view>
			<u-cell title="您的姓名" >
				<template #right-icon>
					<u-input border="none" placeholder="请输入姓名" placeholderStyle="text-align:right;">
						
					</u-input>
				</template>
			</u-cell>
			<u-cell title="手机号" >
				<template #right-icon>
					<u-input border="none" placeholder="请输入手机号" placeholderStyle="text-align:right;">
						
					</u-input>
				</template>
			</u-cell>
			
			<view class="submit" style="width: 60%;margin: 100upx auto;">
				<u-button type="primary" shape="circle" @click="submit">
					<text style="color:#ffffff;">提交审核</text>
				</u-button>
			</view>
		</view>
		<u-picker :show="show1" :columns="columns1" @cancel="show1 = false" @confirm="confirm1" keyName="name"></u-picker>
		<u-picker :show="show2" :columns="columns2" @cancel="show2 = false" @confirm="confirm2"></u-picker>
		<u-picker :show="show3" :columns="columns3" @cancel="show3 = false" @confirm="confirm3" keyName="parkNo"></u-picker>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {getCommunityList} from '@/api/index.js'
	import {getParkByCommunity,addPark } from '@/api/park.js'
	export default {
		data() {
			return {
				type:true,
				//type为true为私有,false为租聘
				show1:false,
				show2:false,
				show3:false,
				value1:'请选择小区',
				value2:'请选择区域',
				value3:'请选择车位号',
				columns1:[[]],
				columns2:[["A区域","B区域"]],
				columns3:[[]],
				community_id:'',
				garage_area:'',
				park_id:''
			}
		},
		methods: {
			confirm1(e){
				this.value2 = '请选择区域'
				this.value3 = '请选择车位号'
				console.log(e);
				this.value1 = e.value[0].name
				this.community_id = e.value[0].id
				this.show1 = false
			},
			confirm2(e){
				this.value3 = '请选择车位号'
				this.value2 = e.value[0]
				this.garage_area = e.value[0]
				getParkByCommunity(this.community_id).then((res)=>{
					console.log(res);
					this.columns3[0] = res.data.data
				})
				this.show2 = false
			},
			confirm3(e){
				this.value3 = e.value[0].parkNo
				this.park_id = e.value[0].id
				this.show3 = false
			},
			submit(){
				const owner_id = uni.getStorageSync('owner').id
				addPark(owner_id,this.park_id).then((res)=>{
					if(res.data.code == 0){
						this.$refs.uToast.show({
							message:'添加成功',
							position:'top',
							type:'success',
							duration:'1000'
						})
					}else{
						this.$refs.uToast.show({
							message:'添加失败:'+res.data.msg,
							position:'top',
							type:'error',
							duration:'1000'
						})
					}
				}).catch((err)=>{
					console.log(err);
					this.$refs.uToast.show({
						message:'服务器错误',
						position:'top',
						type:'error',
						duration:'1000'
					})
				})
			}
		},
		onShow() {
			const owner_id = uni.getStorageSync('owner').id
			getCommunityList(owner_id).then((res)=>{
				this.columns1[0] = res.data.data.community_list
			})
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
}
.u-cell{
	background-color: #ffffff;
	padding-left: 10upx;
	padding-right: 10upx;
}
.type{
	height: fit-content;
	width: fit-content;
	padding: 20upx;
	padding-top: 10upx;
	padding-bottom: 10upx;
	font-size: 30upx;
	margin: 3upx;
	border-radius: 10upx;
	border: 1px solid #A1A1A1;
}
.type_checked{
	height: fit-content;
	width: fit-content;
	padding: 20upx;
	padding-top: 10upx;
	padding-bottom: 10upx;
	font-size: 30upx;
	margin: 3upx;
	border-radius: 10upx;
	border: 1px solid #14acff;
	color: #14acff;
}
.user_info{
	width: 100%;
	 background-color: #ffffff;
	 padding-bottom: 50upx;
}
</style>

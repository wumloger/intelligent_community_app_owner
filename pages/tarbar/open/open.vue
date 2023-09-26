<template>
	<view class="container">
		<view class="title">
			{{community_name}} <u-icon name="arrow-right"></u-icon>
		</view>
		<view class="equip_list" v-if="equip_list.length > 0">
			<view v-for="(item,index) in equip_list" :key="index" :class="item.selected == true ? 'selected_equip' : 'equip'" @click="item.selected = !item.selected">
				<image :src="item.img" mode=""></image>
				<view>{{item.equipName}}</view>
			</view>
		</view>
		
		<view class="operate">
			<view class="open" @click="open">
				<image src="@/static/img/open/open.png" mode=""></image>
				<view>
					立即开门
				</view>
			</view>
			<view class="line">
				
			</view>
			<view class="invite" @click="toInvitor">
				<image src="../../../static/img/open/lock.png" mode=""></image>
				<view>
					访客邀请
				</view>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup :show="show" :round="20" mode="center" @close="close">
		<view class="card">
		    <view class="pop_title">
		    	{{community_name}}
		    </view>
			<view class="content">
				<u-icon name="checkmark-circle-fill" color="#409eff" size="100"></u-icon>
				<view style="color: #3c9cff;">开门成功</view>
				<view class="btn" style="width: 200upx;">
					<u-button type="primary" shape="circle" style="color: #ffffff;" @click="openDoor">确定</u-button>
				</view>
				
			</view>
		</view>
		</u-popup>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
import {getDoors,openDoor,getDoorsById} from '@/api/open.js'
export default{
	data(){
		return{
			community_name:'您尚未登录',
			equip_list:[],
			show:false,
			selected_list:[],
			
			
			
		}
	},
	methods:{
		open(){
			this.selected_list = this.equip_list.filter((item)=>{
				return item.selected == true
			})
			if(this.selected_list.length > 0){
				this.show = true
				
				//发送请求记录日志
				//获取当前业主id
				const owner_id = uni.getStorageSync('owner').id
				const doors = []
				this.selected_list.forEach(item=>doors.push(item.id))
				console.log(owner_id);
				openDoor(owner_id,doors).then((res)=>{
					if(res.data.code === 0){
						console.log('记录成功');
					}else{
						console.log('记录失败' + res.data.msg);
					}
				})
			}else{
				this.$refs.uToast.show({
					message:'您尚未选则设备',
					type:'warning',
					position:'top'
				})
			}
		},
		openDoor(){
			this.show = false
		},
		toInvitor(){
			uni.navigateTo({
				url:'/pages/invitor/invitor'
					})
			},
	},
	onShow(){
		//获取小区信息
		 this.community_name = uni.getStorageSync('community').name
		//获取设备列表
		const owner_id = uni.getStorageSync('owner').id
		this.equip_list = []
		if(owner_id){
			getDoorsById(owner_id).then((res)=>{
				console.log(res);
				if(res.data.code === 0){
					if(res.data.data.length > 0){
						this.equip_list = res.data.data
					}
				}else{
					this.$refs.uToast.show({
						message:res.data.msg,
						type:'error',
						position:'top'
					})
				}
			}).catch((err)=>{
			console.log('获取设备列表失败' + err);
		 })
		}
		
	},
	mounted() {
	
	}
}

</script>

<style scoped lang="scss">
.container{
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
}
.title{
	display: flex;
	justify-content: left;
	padding: 20upx;
	padding-left: 50upx;
	background-color: #ffffff;
}
.equip_list{
	width: 100%;
	display: flex;
	justify-content: left;
	flex-wrap: wrap;
}
.equip{
	margin: 25upx;
	margin-right: 0upx;
	background-color: #ffffff;
	width: 45%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border-radius: 10upx;
	border: 1upx solid transparent;
	image{
		height: 150upx;
		width: 230upx;
		padding-left: 10upx;
		padding-right: 10upx;
	}
	view{
		padding-bottom: 20upx;
	}
	
}

.selected_equip{
	margin: 25upx;
	margin-right: 0upx;
	background-color: #ffffff;
	width: 45%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border-radius: 10upx;
	border:1upx solid rgb(64, 158, 255);
	box-shadow: rgba(0,0,0,0.35) 0upx 0upx 10upx;
	image{
		height: 150upx;
		width: 230upx;
		padding-left: 10upx;
		padding-right: 10upx;
	}
	view{
		padding-bottom: 20upx;
	}
}

.operate{
	
	.line{
		width: 5upx;
		background-color: #d7d7d7;
		height: 60%;
		margin: 20upx;
	}
	width: 94%;
	background-color: #ffffff;
	position: fixed;
	bottom: 180upx;
	left: 20upx;
	display: flex;
	justify-content: space-around;
	height: 200upx;
	align-items: center;
	box-shadow: rgba(0,0,0,0.35) 0upx 0upx 10upx;
	border-radius: 10upx;
	.open{
		text-align:center;
		padding: 20upx;
		
	}
	.invite{
		text-align: center;
		padding: 20upx;
	}
	.open image,
	.invite image{
		height:60upx;
		width: 60upx;
	}
}
.u-popup{
	.card{
		height: 400upx;
		width: 500upx;
			
		.pop_title{
			height: 100upx;
			background-color: #1283ff;
			color: #ffffff;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 40upx;
			border-radius: 20upx 20upx 0upx 0upx;
		}
		.content{
			display: flex;
			flex-wrap: wrap;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
		.content .u-iocn,
		.content view{
			padding-top: 20upx;
		}
	}
}

</style>

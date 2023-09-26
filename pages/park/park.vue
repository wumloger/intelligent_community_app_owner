<script>
	import {getPark,unBind} from '@/api/park.js'
	export default {
		data() {
			return {
				park_list:[
				],
				i:0
			}
		},
		methods: {
			left(){
				this.i++;
				if(this.i = this.park_list.length){
					this.i = this.park_list.length - 1
				}
			},
			right(){
				this.i--;
				if(this.i < -1){
					this.i = 0;
				}
			},
			toAddPark(){
				uni.navigateTo({
					url:'/pages/park/add-park'
				})
			},
			toBindCar(id){
				uni.navigateTo({
					url:'/pages/park/bind-car?id=' + id
				})
			},
			unBind(id){
				// const owner_id = uni.getStorageSync('owner_id').id
				unBind(id).then((res)=>{
					console.log(res);
					if(res.data.code==0){
						this.$refs.uToast.show({
							message:'解绑成功',
							type:'success',
							position:'top'
						})
						this.getPark()
					}else{
						this.$refs.uToast.show({
							message:'解绑失败:' + res.data.msg,
							type:'error',
							position:'top'
						})
						this.getPark()
					}
				})
			},
			getPark() {
				const owner_id = uni.getStorageSync('owner').id
				getPark(owner_id).then((res)=>{
					console.log(res);
					this.park_list = res.data.data
					
				})
			}
		},
		onShow() {
			this.getPark()
		}
	}
</script>

<template>
	<view class="container">
		<u-toast ref="uToast"></u-toast>
		<view ref="park" v-if="i >= 0&&i < park_list.length" class="card">
			<view class="top">
				<view class="between" @click="left">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						
					</view>
					<view class="card_body">
						
					</view>
				</view>
				<view class="main">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						{{park_list[i].parkNo}}
					</view>
					<view class="card_body" style="display: flex;align-items: center;flex-wrap: wrap; flex-direction: column;">
						<image v-if="park_list[i].hasCar == 1" style="height: 320upx; width: 90%; margin: 20upx;" src="../../static/img/park/park.png" mode=""></image>
						<image v-else style="height: 320upx; width: 90%; margin: 20upx;" src="../../static/img/park/parknocar.png" mode=""></image>
						
						<view v-if="park_list[i].hasCar == 1" style="height: 80upx;width: fit-content;background-color: #1c89ff;pading:1upx;padding-top: 20upx;padding-bottom: 20upx;color: #ffffff;border: 1px solid black;">
							{{park_list[i].car.number}}
						</view>
						<view v-else>
							<u-button type="primary" parkingArea="small" shape="circle" @click="toBindCar(park_list[i].parkId)">
								<text style="color: #ffffff;padding: 10upx;">+绑定车辆</text>
							</u-button>
						</view>
					</view>
				</view>
				<view class="between" @click="right">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						
					</view>
					<view class="card_body">
						
					</view>
				</view>
			</view>
			<view class="info">
				<view style="display: flex; justify-content: space-between; padding: 20upx;padding-bottom: 0;">
					<text>车位信息</text>
					<view class="btn">
						<u-button v-if="park_list[i].hasCar" type="primary" shape="circle" parkingArea="small" plain="true" @click="unBind(park_list[i].parkId)">
							<text  style="color: #1c89ff;">解除绑定</text>
						</u-button>
						<u-button v-else type="primary" shape="circle" parkingArea="small" plain="true">
							<text style="color: #1c89ff;">审核中</text>
						</u-button>
					</view>
				</view>
				<image src="../../static/line.png" style="height: 10upx;width: 100%;" mode=""></image>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位位置</text>
					{{park_list[i].garageArea}}
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位号</text>
					{{park_list[i].parkNo}}
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位类型</text>
					{{park_list[i].parkType}}
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位尺寸</text>
					{{park_list[i].parkSize}}
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>绑定车辆</text>
					<span v-if="park_list[i].hasCar">{{park_list[i].car.number}}</span>
					<span v-else>-</span>
				</view>
			</view>
			
		</view>
		<view ref="addPark" v-if="i == -1" class="card">
			<view class="top">
				<view class="between" @click="left">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						
					</view>
					<view class="card_body">
						
					</view>
				</view>
				<view class="main">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						车位编号
					</view>
					<view class="card_body" style="display: flex;align-items: center;flex-wrap: wrap; flex-direction: column;">
						<image style="height: 320upx; width: 90%; margin: 20upx;" src="../../static/img/park/addpark.png" mode=""></image>
						<view style="">
							<u-button type="primary" parkingArea="small" shape="circle" @click="toAddPark"><text style="color: #ffffff; padding: 10upx;">+添加车位</text></u-button>
						</view>
					</view>
				</view>
				<view class="between" @click="right">
					<view class="title" style="height: 100upx; background-color: #1c89ff; color: #ffffff; font-parkingArea: 40upx;">
						
					</view>
					<view class="card_body">
						
					</view>
				</view>
			</view>
			<view class="info">
				<view style="display: flex; justify-content: space-between; padding: 20upx;padding-bottom: 0;">
					<text>车位信息</text>
					
				</view>
				<image src="../../static/line.png" style="height: 10upx;width: 100%;" mode=""></image>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位位置</text>
					-
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位号</text>
					-
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位类型</text>
					-
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>车位尺寸</text>
					-
				</view>
				<view style="display: flex;justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text>绑定车辆</text>
					-
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<style lang="scss" scoped>

.container{
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	position: relative;
}
.card .top{
	display: flex;
	width: 200%;
	justify-content: center;
	position: absolute;
	left:-50%;
	top: 50upx;
}
.main{
	box-shadow: rgba(67, 67, 67, 0.537) 0px 0px 10px;
	width: 70%;
	height: fit-content;
	margin-top: 0upx;
	.card_body{
		height: 480upx;
		background-color: #ffffff;
		width: 100%;
		border-radius: 10upx;
	}
}
.between{
	box-shadow: rgba(67, 67, 67, 0.537) 0px 0px 10px;
	width: 60%;
	margin: 40upx;
	height: fit-content;
}
.title{
	font-weight: 600;
	text-align: center;
	line-height: 100upx;
	width: 100%;
	border-radius: 10upx;
}
.card_body{
	height: 400upx;
	background-color: #ffffff;
	width: 100%;
	border-radius: 10upx;
}
.info{
	position: absolute;
	left: 0;
	top: 700upx;
	width: 94%;
	background-color: #ffffff;
	margin: 20upx;
	
	
}
</style>

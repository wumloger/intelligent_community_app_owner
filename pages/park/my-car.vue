<template>
	<view class="container">
		<view class="top" style="display: flex;justify-content: center;align-items: center;">

			<view class="btn" style="width: 40%; margin-bottom: 150upx;">
				<u-button color="#8cc5ff" shape="circle" @click="toAddCar">
					<text style="color: #ffffff;">+添加车辆</text>
				</u-button>
			</view>
		</view>
		<view class="car_list">
			<view class="car" v-for="(item,index) in car_list">
				<view class="delete_btn" style="display: flex;justify-content: right; padding: 10upx;" @click="deleteCar(item.id)">
					<u-icon name="close" color="#666666" size="35" bold></u-icon>
				</view>
				
				<view class="title" style="display: flex;">
					<image :src="item.icon" mode=""></image>
					<text>{{item.number}}</text>
				</view>
				<view class="tag">
					<view class="brand">
						{{item.brand}}
					</view>
					<view class="type">
						{{item.type}}
					</view>
					<view class="color">
						{{item.color}}
					</view>
				</view>
				<view class="date">
					<view class="save" style="display: flex;justify-content: space-between;padding: 20upx;">
						<text style="padding-left: 100upx;padding-right: 100upx;">汽车保险</text>
						{{item.deadline}}
					</view>
					<view class="year" style="display: flex;justify-content: space-between;padding: 20upx;">
						<text style="padding-left: 100upx;padding-right: 100upx;">年审保险</text>
						{{item.examineTime}}
					</view>
				</view>
			</view>
			
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {getCarList,deleteCar} from '@/api/park.js'
	export default {
		data() {
			return {
				car_list:[
				
				]
			}
		},
		methods: {
			toAddCar(){
				uni.navigateTo({
					url:'/pages/park/add-car'
				})
			},
			deleteCar(id){
				const owner_id = uni.getStorageSync('owner').id
				
				deleteCar(owner_id,id).then((res)=>{
					console.log(res);
					if(res.data.code === 0){
						this.$refs.uToast.show({
							message:'删除成功',
							position:'top',
							type:'success'
						})
						const owner_id = uni.getStorageSync('owner').id
						getCarList(owner_id).then((res)=>{
							console.log(res);
							this.car_list = res.data.data
						})
					}else{
						this.$refs.uToast.show({
							message:'删除失败:' + res.data.error,
							position:'top',
							type:'error'
						})
					}
				}).catch((err)=>{
					this.$refs.uToast.show({
						message:'服务器错误',
						position:'top',
						type:'error'
					})
				})
			}
		},
		onShow() {
			const owner_id = uni.getStorageSync('owner').id
			getCarList(owner_id).then((res)=>{
				console.log(res);
				this.car_list = res.data.data
			})
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	position: relative;
}
.top{
	height: 400upx;
	background-color: #409eff;
	border-radius: 0 0 30upx 30upx;
}
.car_list{
	position: absolute;
	width: 94%;
	margin: 20upx;
	top: 250upx;
}
.car{
	background-color: #ffffff;
	border-radius: 10upx;
	margin-bottom: 20upx;
	.title{
		align-items: center;
		justify-content: left;
		padding: 20upx;
		padding-top: 0;
		image{
			height: 100upx;
			width: 100upx;
			margin-right: 20upx;
		}
		text{
			font-size: 50upx;
			font-weight: 700;
			color: #000000;
		}
	}
	.tag{
		display: flex;
		justify-content: center;
		view{
			margin: 10upx;
			min-width: 20%;
			min-height: 50upx;
			border: 1px solid #409eff;
			text-align: center;
			line-height: 50upx;
			border-radius: 30upx;
			color: #409eff;
			font-size: 30upx;
		}
	
	}
}
</style>

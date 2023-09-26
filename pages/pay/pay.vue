<template>
	<view class="container">
		<view :style="{height:statusBarHeight}"></view>
		<view class="u-navbar" style="background-color: #ffffff;">
			<u-icon name="arrow-left" @click="back" size="40" color="#000000"></u-icon>
			<view>
				生活缴费
			</view>
			<navigator url="/pages/pay/pay-history">缴费记录</navigator>
		</view>
		<view class="top" style="height: 20upx; background-color: #f5f5f5;">
			
		</view>
		<template v-if="payList.length > 0">
		<view class="payment" v-for="(item,index) in payList">
			<view class="type">
				<image :src="item.icon" mode=""></image>
				{{item.projectName}}账单
			</view>
			<image src="../../static/line.png" class="line" mode=""></image>
			<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;">
				<text>小区房屋</text>{{item.house}}
			</view>
			<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;">
				<text>账单日期</text>{{item.startTime + ' - ' + item.endTime}}
			</view>
			<view class="money" style="color: #409eff; padding: 20upx;padding-bottom: 0; display: flex; align-items: center; justify-content: center;">
				<text style="color: #409eff; font-size: 50upx; font-weight: 700;padding: 20upx;">{{item.total}}</text>元
			</view>
			<view class="pad_btn" style="width: 45%;margin: 0 auto;border-radius: 10upx; padding: 20upx; padding-top: 0;">
				<u-button type="primary" size="small" @click="payBill(item.billId)"><text style="color: #ffffff;">去付款</text></u-button>
			</view>
		</view>
		</template>
	</view>
</template>

<script>
	import {getBills} from '@/api/bill.js'
	export default {
		data() {
			return {
				payList:[
				],
				statusBarHeight:'',
			}
		},
		methods:{
			back(){
				console.log(getCurrentPages());
				 if(getCurrentPages().length == 1){
					 uni.switchTab({
					 	url:'/pages/tarbar/me/me'
					 })
				 }else{
					 uni.navigateBack({
					 	delta: 1
					 });
				 }
			
			},
			payBill(id){
				uni.navigateTo({
					url:'/pages/pay/bill-detail?id=' + id
				})
			},
			addZero: function (number) {
				const arr = number.toString().split('.');
				if (arr.length === 1) {
					return `${number}.00`;
				} else if (arr.length === 2 && arr[1].length === 1) {
					return `${number}0`;
				} else {
					return number;
				}
		},


		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			const owner_id = uni.getStorageSync('owner').id
			this.payList = []
			getBills(owner_id).then((res)=>{
				console.log(res);
				if(res.data.code === 0){
					this.payList = res.data.data
					this.payList = this.payList.filter((item)=>{
					 return 'undefined' == typeof item.paidTime 
					})
					this.payList.forEach((item)=>{
						item.total = this.addZero(item.total)
					})
					
				}
			})
		}

	}
</script>

<style scoped lang="scss">
	.u-navbar{
		height: 70upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20upx;
		padding-right: 20upx;
		font-size: 30upx;
	}
	.container{
		width: 100%;
		min-height: 100vh;
		background-color: #f5f5f5;
	}
	.payment{
		background-color: #ffffff;
		.type{
			display: flex;
			image{
				height: 70upx;
				width: 60upx;
				margin: 20upx;
			}
			justify-content: left;
			align-items: center;
			
		}
		margin: 20upx;
		margin-top: 0;
	
	}
	
	.line{
		height: 12upx;
		width: 100%;
	}
</style>
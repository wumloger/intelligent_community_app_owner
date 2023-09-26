<template>
	<view class="container">
		<view class="year" v-for="(item,index) in listByYear">
			<view style="padding: 20upx;text-align: center;color: #A1A1A1;">
				{{item.year}}年缴费纪录
			</view>
			<view class="payment" v-for="(i,index) in item.payList">
				<view class="type">
					<image :src="i.icon" mode=""></image>
					{{i.projectName}}账单
				</view>
				<image src="../../static/line.png" class="line" mode=""></image>
				<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;">
					<text>小区房屋</text>{{i.house}}
				</view>
				<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;">
					<text>账单日期</text>{{i.startTime + ' - ' + i.endTime}}
				</view>
				<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;">
					<text>账单金额</text>{{i.total}}
				</view>
				<view class="room_no" style="display: flex;justify-content: space-between; padding: 20upx;padding-bottom: 0;">
					<text>缴费时间</text>{{i.paidTime}}
				</view>
				<image src="../../static/line.png" mode="" class="line"></image>
				<view style="color: #409eff; text-align: right; padding: 15upx; padding-top: 0;" @click="toDetail(i.billId)">
					查看详情
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import {getRecord} from '@/api/bill.js'
	export default {
		data() {
			return {
				listByYear:[
				]
			}
		},
		methods: {
			toDetail(id){
				uni.navigateTo({
					url:'/pages/pay/pay-detail?id=' + id
				})
			}
		},
		onShow() {
			const owner_id = uni.getStorageSync('owner').id
			getRecord(owner_id).then((res)=>{
				console.log(res);
				this.listByYear = res.data.data
			})
		}
	}
</script>

<style lang="scss" scoped>
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
				margin-right: 20upx;
			}
			padding: 20upx;
			padding-bottom: 0;
			justify-content: left;
			align-items: center;
			
		}
		margin: 20upx;
		margin-top: 0;
		margin-bottom: 0;
	
	}
	
	.line{
		height: 12upx;
		width: 100%;
	}
</style>

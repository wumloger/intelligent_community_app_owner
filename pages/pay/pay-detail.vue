<script>
	import {getBill,updateBill} from '@/api/bill.js'
	
	export default {
		data() {
			return {
				bill:{},
				bill_id:''
			}
		},
		methods: {
			getBill() {
				const owner_id = uni.getStorageSync('owner').id
				getBill(owner_id,this.bill_id).then((res)=>{
					console.log(res);
					this.bill = res.data.data
					this.bill.date = this.bill.endTime.toString().substr(0,8)
					this.bill.total = this.addZero(this.bill.total)
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
		onLoad(option) {
			this.bill_id = option.id
		},
		onShow() {
			this.getBill()
		}
	}
</script>

<template>
	<view class="container">
		<view class="bar" style="height: 3upx;">
			
		</view>
		<view class="top" style="height: 200upx;background-color: #409eff;margin: 3upx; margin-top: 0;">
			
		</view>
		<view class="bill_card">
			<view class="bill_title">
				<view style="display: flex; justify-content: space-between; padding: 20upx; align-items: center;">
					<text style="font-size: 50upx; color: black;">{{bill.projectName}}账单</text>
					{{bill.date}}
				</view>
				<view style="display: flex; color: #409eff; align-items: center; justify-content: center;">
					<text style="color: #409eff; font-size: 50upx; font-weight: 700;padding: 20upx;padding-bottom: 40upx;">{{bill.total}}</text>元
				</view>
			</view>
			<view class="bill_info">
				<view style="padding: 20upx; padding-bottom: 0; display: flex;align-items: center;">账单详情</view>
				<image src="../../static/虚线.png" mode="" style="height: 10upx; width: 100%;"></image>
				<view style="padding: 20upx; padding-top: 0; display: flex; justify-content: space-between;align-items: center;">
					<text>小区房屋</text>
					{{bill.house}}
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>房屋面积</text>
					{{bill.houseArea}}
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>单位金额</text>
					{{bill.price}}
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>账单日期</text>
					{{bill.startTime + ' - ' + bill.endTime}}
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>账单金额</text>
					￥{{bill.total}}元
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>减免金额</text>
					￥0.00元
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>营收金额</text>
					￥0.00元
				</view>
			</view>
			<view class="payment">
				<view style="padding: 20upx; padding-bottom: 0; display: flex;align-items: center;">支付信息</view>
				<image src="../../static/虚线.png" mode="" style="height: 10upx; width: 100%;"></image>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>支付单号</text>
					256565493246523556
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>支付方式</text>
					手机支付
				</view>
				<view style="padding: 20upx; display: flex; justify-content: space-between;align-items: center;">
					<text>支付时间</text>
					{{bill.endTime}}
				</view>
			</view>
		</view>
		
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<style lang="scss" scoped>
.container{
	width: 100%;
	min-height: 120vh;
	background-color: #f5f5f5;
	position: relative;
}
.bill_card{
	position: absolute;
	width: 94.5%;
	margin: 20upx;
	top: 80upx;
}
.bill_title{
	background-color: #ffffff;
	border-radius: 10upx;
}
.bill_info{
	background-color: #ffffff;
	margin-top: 20upx;
	border-radius: 10upx;
}
.foot{
	height: 150upx;
	background-color: #ffffff;
	width: 100%;
	position: fixed;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.payment{
	background-color: #ffffff;
	margin-top: 20upx;
	
}
</style>

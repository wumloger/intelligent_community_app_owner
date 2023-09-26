<template>
	<view class="container">
		<view class="top">
			<view class="top_title" style="display: flex; justify-content: space-between; align-items: center; height: 90%;">
				<text style="color: #ffffff; font-size: 40upx; padding: 30upx;">访客开门记录</text>
				</view>
			</view>
			<view class="history_list">
				<view class="history" v-for="(item,index) in history_list">
					<view class="name">
						{{item.device}}
					</view>
					<view class="time">
						{{item.open_time}}
					</view>
				</view>
				<view class="tips" style="font-size: 30upx; text-align: center; background-color: #f5f5f5;padding-top: 50upx;color:#A1A1A1;">
					没有更多数据了~
				</view>
			</view>
			
	</view>
</template>

<script>
	import {getRecord } from '@/api/open.js'
	export default {
		data() {
			return {
				history_list:[]
			}
		},
		methods: {
			
		},
		onShow() {
			const owner_id = uni.getStorageSync('owner').id
			getRecord(owner_id).then((res)=>{
				console.log(res);
				this.history_list = res.data.data
				
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		height: 100vh;
		background-color: #f5f5f5;
		position: relative;
		position: relative;
	}
	.top{
		height: 300upx;
		background-color: #409eff;
		border-radius: 0upx 0upx 20upx 20upx;
		
	}
	.history_list{
		background-color: #ffffff;
		width: 94%;
		position: absolute;
		top:200upx;
		left: 20upx;
		border-radius: 10upx;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;;
		.history{
			display: flex;
			justify-content: space-between;
			margin: 10upx;
			height: 80upx;
			align-items: center;
			border-bottom: .5px solid #A1A1A1;
			.time{
				color: #A1A1A1;
			}
		}
	}
</style>

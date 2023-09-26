<template>
	<view class="container">
		<view class="notice">
			<view class="title"> <h3>{{notice.title}}</h3></view>
			<view class="date">
				<u-icon name="clock"></u-icon>&nbsp; {{notice.releaseTime}} &nbsp;&nbsp;&nbsp;<u-icon name="eye"></u-icon>&nbsp;1524
			</view>
			<hr>
			<view class="content">
				&nbsp;&nbsp;&nbsp;&nbsp;{{notice.content}}
			</view>
			<view class="info">
				<view>{{notice.publisher}}</view>	
				<view>{{notice.releaseTime}}</view> 
				<view>物业电话: 010-25358887</view>
			</view>
		</view>
	
	</view>
</template>

	
<script>
	import {getNoticeById} from '@/api/message.js'
	export default {
		data() {
			return {
				notice:{
					
				}
			}
		},
		methods: {
			
		},
		onLoad(option) {
			getNoticeById(option.id).then((res)=>{
				console.log(res);
				this.notice = res.data.data
				this.notice.releaseTime
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
.notice{
	background-color: #ffffff;
	.info{
		text-align: right;
		padding: 30upx;
		padding-bottom: 100upx;
		view{
			padding-bottom: 10upx;
		}
	}
	.date{
		display: flex;
		justify-content: center;
		padding: 10upx;
		color:#A1A1A1;
	}
	.title{
		text-align: center;
		padding: 20upx;
	}
	hr{
		border:0.5px solid #A1A1A1 ;
		margin-left: 20upx;
		margin-right: 20upx;
	}
	.content{
		padding: 20upx;
	}
}
</style>

<template>
	<view class="container">
		<view class="title">
			<h3>{{activity.infoDescription}}</h3>
		</view>
		<view class="date">
			<u-icon name="clock"></u-icon>{{activity.startTime}} &nbsp;&nbsp;&nbsp; <u-icon name="eye"> </u-icon> 1524
		</view>
		<hr>
		<view class="content">
			{{activity.infoContent}}
		</view>
		<view class="info">
			<b>
			主办单位: 幸福苑物业管理公司<br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 聚力房地产有限公司<br>
			活动时间: {{activity.startTime}} ~ {{activity.endTime}}<br>
			联系电话: 010-252656988
			</b>
		</view>
	</view>
</template>

<script>
	import {getActivityById} from '@/api/index.js'
	export default {
		data() {
			return {
				activity:{
					
				}
			}
		},
		methods: {
			
		},
		onLoad(option) {
			console.log(option.id);
			getActivityById(option.id).then((res)=>{
				console.log(res);
				if(res.data.data){
					this.activity = res.data.data
					console.log(this.activity);
				}
			})
			
		}
	}
</script>

<style scoped lang="scss">
.container{
	width: 100%;
	height: 82vh;
	background-color: #f5f5f5;
}
.title{
	margin-top: 10upx;
}
.title,.date,.content,.info{
	background-color: #ffffff;
	padding: 20upx;
}
.content{
	height: 60vh;
}
.date{
	display: flex;
	justify-content: left;
	color: #a1a1a1;
}
hr{
	margin-left: 20upx;
	margin-right: 20upx;
	border:0.5px solid #a1a1a1;
	
}

</style>

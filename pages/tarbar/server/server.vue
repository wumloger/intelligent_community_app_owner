<template>
	<view class=".container">
		<view class="activity_title">
			<text class="title" style="font-size: 30upx;">物业服务</text>
		</view>
	</view>
	<u-row justify="around">
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/notice.png" mode="" @click="toNotice"></image>
			<text>社区公告</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/question.png" mode="" @click="unFinished"></image>
			<text>问卷调查</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/fix.png" mode="" @click="unFinished"></image>
			<text>在线报修</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/advice.png" mode="" @click="unFinished"></image>
			<text>投诉建议</text>
		</u-col>
	</u-row>
	<u-row justify="around">
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/connect.png" mode="" @click="toPhones"></image>
			<text>联系物业</text>
		</u-col>
		<u-col span="2"></u-col>
		<u-col span="2"></u-col>
		<u-col span="2"></u-col>
	</u-row>
	<view class=".container">
		<view class="activity_title" style="padding-top: 50upx;">
			<text class="title" style="font-size: 30upx;">社区服务</text>
		</view>
	</view>
	<u-row justify="around">
		<u-col span="2" align="center">
			<image src="@/static/img/server/pay.png" mode="" @click="toPay"></image>
			<text>生活缴费</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/park.png" mode="" @click="toPark"></image>
			<text>我的车位</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/pay.png" mode="" @click="unFinished"></image>
			<text>停车缴费</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/server/home.png" mode="" @click="toHome"></image>
			<text>我的房屋</text>
		</u-col>
	</u-row>
	<u-row justify="around">
		<u-col span="2" align="center">
			<image src="@/static/img/server/open.png" mode="" @click="toOpen"></image>
			<text>手机开门</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/server/invite.png" mode="" @click="toInvitor"></image>
			<text>访客邀请</text>
		</u-col>
		<u-col span="2" align="center">
			<image src="@/static/img/f-card/invite.png" mode="" @click="toFamily"></image>
			<text>家属邀请</text>
		</u-col>
		<u-col span="2" align="center">
		</u-col>
	</u-row>
	<u-toast ref="uToast"></u-toast>
</template>

<script>
	export default {
		methods:{
			//界面跳转方法
			//我的房屋
			toHome(){
				uni.navigateTo({
					url:'/pages/home/home'
					})
				},
			//邀请访客
			toInvitor(){
				uni.navigateTo({
					url:'/pages/invitor/invitor'
						})
				},
			//手机开门
			toOpen(){
				uni.switchTab({
					url:'/pages/tarbar/open/open'
					})
				},
			//手机缴费
			toPay(){
				uni.navigateTo({
					url:'/pages/pay/pay'
					})
				},
			//我的车位
			toPark(){
				uni.navigateTo({
					url:'/pages/park/park'
					})
				},
			//在线报修
			toFix(){
				uni.navigateTo({
					url:'/pages/fix/fix'
					})
				},
			//投诉建议
			toAdvice(){
				uni.navigateTo({
					url:'/pages/advice/advice'
					})
				},
			//社区公告
			toNotice(){
				uni.switchTab({
					url:'/pages/tarbar/message/message'
				})
				},
			//联系物业
			toPhones(){
				uni.navigateTo({
					url:'/pages/phones/phones'
				})
			},
			//更多
			toServer(){
				uni.switchTab({
					url:'/pages/tarbar/server/server'
				})
			},
			toFamily(){
				uni.navigateTo({
					url:'/pages/family/family'
				})
			},
			
			//未完成功能
			unFinished(){
				this.$refs.uToast.show({
					message:'该功能尚未开放,敬请期待!',
					position:'top',
					type:'warning'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	background-color: #ffffff;
	width: 100%;
	
}
.activity_title{
	padding: 20upx;
	padding-bottom: 0upx;
	.title::before{
			content: "";
			display: block;
			position: absolute;
			height: 40upx;
			width: 8upx;
			border-radius: 25%;
			margin: 5upx;
			background-color: #3f97ff;
		}
		.title{
			margin: 30upx;
			margin-top: 50upx;
			line-height: 50upx;
			font-size: 20upx;
		}
}
image{
	width: 100upx;
	height: 100upx;
}
	
.u-col{
	text{
		font-size: 20upx;
		padding-top: 10upx;
	}
}
.u-row{
	padding-top: 50upx;
}
</style>
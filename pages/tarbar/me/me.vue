<template>
	<view class="top" :style="{ height: statusBarHeight }">
		
	</view>
	<view class="container">
			<view class="blue_circle">
				
			</view>
			<view class="info_card">
				<u-avatar :src="owner.avatar" size="120" ></u-avatar>
				
				<view v-if="type == 0" class="name" @click="login">
					登录/注册
				</view>
				<view v-else-if="type == 1" class="name">
					游客
				</view>
				<view v-else class="name">
					{{owner.name}}
				</view>
		
			
				<u-row justify="around">
					<u-col span="2" align="center"  @click="toHome">
						<image src="@/static/img/me/house.png" mode=""></image>
						<view >
							我的房屋
						</view>
					</u-col>
					<u-col span="2" align="center" @click="toPark">
						<image src="@/static/img/me/park.png" mode=""></image>
						<view >
							我的车位
						</view>
					</u-col>
					<u-col span="2" align="center" @click="toMyCar">
						<image src="@/static/img/me/car.png" mode=""></image>
						<view >
							我的车辆
						</view>
					</u-col>
					<u-col span="2" align="center" @click="toPayHistory">
						<image src="@/static/img/me/bill.png" mode=""></image>
						<view >
							我的账单
						</view>
					</u-col>
				</u-row>
				
		
			</view>
			<u-cell-group>
				<text class="title">服务工具</text>
				<u-cell icon="" title="家庭成员" :isLink="true" url="/pages/family/family"></u-cell>
				<u-cell icon="" title="我的访客" :isLink="true" url="/pages/invitor/myInvitor"></u-cell>
				<u-cell icon="" title="我的报修" :isLink="true" url="/pages/fix/fix"></u-cell>
				<u-cell icon="" title="我的投诉" :isLink="true" @click="noServer"></u-cell>
				<u-cell icon="" title="设置" :isLink="true" url="/pages/setting/setting"></u-cell>
			</u-cell-group>
			<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight: '',
				owner:{
					name:'',
					avatar:'',
					
				},
				type:0 ,
				//0未登录 1游客 2 业主
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
			},
			toHome(){
				uni.navigateTo({
					url:'/pages/home/home'
				})
			},
			toPayHistory(){
				uni.navigateTo({
					url:'/pages/pay/pay'
				})
			},
			toMyCar(){
				uni.navigateTo({
					url:'/pages/park/my-car'
				})
			},
			toPark(){
				uni.navigateTo({
					url:'/pages/park/park'
				})
			},
			noServer(){
				this.$refs.uToast.show({
					message:'该功能尚未开放',
					type:'warning',
					position:'top',
					duration:'500'
				})
			}
				
			
		},
		onPullDownRefresh() {
		
			uni.stopPullDownRefresh()
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			this.type = 0
			const token = uni.getStorageSync('token')
			if(token){
				this.type = 1;
				const owner = uni.getStorageSync('owner')
				console.log(owner);
				if(owner){
					this.type = 2
					this.owner.name = owner.username
					this.owner.type = owner.avatar
				}
			}
		},
		mounted() {
		
		}
	
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	height: 92.5vh;
	background-color: #f5f5f5;
}
.blue_circle{
	height:1000upx;
	width: 1000upx;
	background-color: #409eff;
	border-radius: 50%;
	position: fixed;
	top:-40%;
	left:-126upx;
}
.info_card{
	position: relative;
	top: 200upx;
	margin-left: 20upx;
	width: 94%;
	height: 300upx;
	border-radius: 20upx;
	box-shadow: rgba(0, 0, 0, 0.35) 0upx 0upx 10upx;
	background-color: #ffffff;
	image{
		height: 100upx;
		width: 100upx;
	}
	view{
		font-size: 25upx;
		padding-top: 20upx;
	}
	.u-avatar{
		position: absolute;
		left: 290upx;
		top: -25%;
		box-shadow: rgba(0, 0, 0, 0.35) 0upx 0upx 1px;
	}
	.u-row{
		margin-top: 10upx;
		padding-bottom: 20upx;
	}
	.name{
		text-align: center;
		padding-top: 55upx;
		font-size: 30upx;
	}
	
}
.u-cell-group{
	margin-top: 300upx;
	background-color: #ffffff;
	padding-bottom: 20upx;
	width: 100%;
	.title::before{
		content: "";
		display: block;
		position: absolute;
		height: 40upx;
		width: 8upx;
		border-radius: 25%;
		margin: 5upx;
		left: 3upx;
		background-color: #3f97ff;
		
	}
	.title{
		margin: 30upx;
		margin-top: 50upx;
		margin-left: 20upx;
		line-height: 50upx;
	}
}

</style>

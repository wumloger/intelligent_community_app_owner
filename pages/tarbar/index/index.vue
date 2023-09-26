<template>
	
	<view class="container" :style="{ marginTop: statusBarHeight }">
		
		    <u-swiper
		        :list="swiper_list"
		        @change="change"
		        :autoplay="true"
				 indicator
				 indicatorMode="dot"
				 circular="true"
				 height="400"
		    >
			</u-swiper>
		<view class="community_card" @click="show = true">
			{{community_name}} <u-icon name="arrow-right" color="black"></u-icon>
		</view>
		<u-picker :show="show" :columns="columns" @cancel="cancel" @confirm="confirm" keyName="name"></u-picker>
		<view class="notice">
			<image src="@/static/img/index/show.png"></image>
			<text>{{notice}}</text>
		</view>
		
		<view class="server_list">
			<text class="title">常用服务</text>
			<u-row justify="around">
				<u-col span="5" style="background-color:#fdece4;" @click="toHome()">
					<view class="contain">
						<text>我的房屋</text>
						<image src="@/static/img/index/home.png"></image>
					</view>
				</u-col>
				<u-col span="5" style="background-color: #ebeafc;" @click="toInvitor">
					<view class="contain">
						<text>访客邀请</text>
						<image style="width: 80upx;" src="@/static/img/index/invite.png"></image>
					</view>	
				</u-col>
			</u-row>
			<u-row justify="around" style="margin-top: 20upx;">
				<u-col span="5" style="background-color:#e9fbe3;" @click="toOpen">
					<view class="contain">
						<text>手机开门</text>
						<image style="width: 80upx;" src="@/static/img/index/open.png"></image>
					</view>	
				</u-col>
				<u-col span="5" style="background-color: #e2f4ff;" @click="toPay">
					<view class="contain">
						<text>生活缴费</text>
						<image style="width: 80upx;" src="@/static/img/index/pay.png"></image>
					</view>	
				</u-col>
			</u-row>
		</view>
		<u-row justify="center" style="background-color: #ffffff; margin-top: 20upx; margin-bottom: 20upx;">
			<u-col span="10">
				<image style="height: 200upx;" src="@/static/img/index/pic.png" mode=""></image>
			</u-col>
		</u-row>
		<view class="function_card">
			<text class="title" style="font-size: 30upx;">智慧社区</text>
			<u-row justify="around">
				<u-col span="2" align="center" @click="toPark">
					<image src="@/static/img/f-card/park.png" mode=""></image>
					<text>我的车位</text>
				</u-col>
				<u-col span="2" align="center" @click="noServer">
					<image src="@/static/img/f-card/pay.png" mode=""></image>
					<text>停车缴费</text>
				</u-col>
				<u-col span="2" align="center" @click="toFix">
					<image src="@/static/img/f-card/fix.png" mode=""></image>
					<text>在线报修</text>
				</u-col>
				<u-col span="2" align="center" @click="noServer">
					<image src="@/static/img/f-card/advice.png" mode=""></image>
					<text>投诉建议</text>
				</u-col>
			</u-row>
			<u-row justify="around">
				<u-col span="2" align="center" @click="noServer">
					<image src="@/static/img/f-card/question.png" mode=""></image>
					<text>问卷调查</text>
				</u-col>
				<u-col span="2" align="center" @click="toNotice">
					<image src="@/static/img/f-card/notice.png" mode=""></image>
					<text>社区公告</text>
				</u-col>
				<u-col span="2" align="center" @click="toPhones">
					<image src="@/static/img/f-card/connect.png" mode=""></image>
					<text>联系物业</text>
				</u-col>
				<u-col span="2" align="center" @click="toServer">
					<image src="@/static/img/f-card/more.png" mode=""></image>
					<text>更多</text>
				</u-col>
			</u-row>
		</view>
		
		<view class="activity_title">
			<text class="title" style="font-size: 30upx;">社区活动</text>
		</view>
		
			<view v-for="(item,index) in activityList" class="activity_item" @click="activity_detail(item.id)">
				<image :src="item.pictures"></image>
				<view>{{item.infoName}}</view>
				<view style="font-size: 12upx;color: #73caff;">活动时间: {{item.startTime}} - {{item.endTime}}</view>
			</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {getCommunityList,getActivity} from '@/api/index.js'

export default {
		data() {
			return {
				swiper_list:['https://pic1.imgdb.cn/item/646f4f00f024cca173bfce69.png',
				'https://pic1.imgdb.cn/item/646f4f00f024cca173bfce48.png',
				'https://pic1.imgdb.cn/item/646f4f00f024cca173bfce26.png',
				'https://pic1.imgdb.cn/item/646f4f00f024cca173bfce13.png'
				],
				swiper_list_local:['http://192.168.31.6:5173/static/img/swiper/u7.png',
				'http://192.168.31.6:5173/static/img/swiper/u8.png',
				'http://192.168.31.6:5173/static/img/swiper/u9.png',
				'http://192.168.31.6:5173/static/img/swiper/u10.png'
				],
				show:false,
				community_name:'请选择小区',
				columns: [
                    [{id:0,name:'智慧小区'}, {id:1,name:'翻斗花园'}, {id:2,name:'广益佳苑'}]
                ],
				notice:'智慧物业体验版上线了,快来尝鲜呀~~',
				noticeList:['智慧物业体验版上线了,快来尝鲜呀~~',
				'2023年09月28日,局部有大暴雨,风力10.....'],
				activityList:[],
				statusBarHeight: 0,
				owner_id:''
			}
		},
		methods:{
			confirm(e){
				// console.log(e);
				this.community_name = e.value[0].name
				uni.setStorage({
					key:'community',
					data:e.value[0]
				})
				// selectCommunity(e.value[0].id)
				getActivity().then((res)=>{
					this.activityList = res.data.data
				}).catch((err)=>{
					console.log('活动请求失败'+err);
				})
				this.show = false
			},
			cancel(){
				this.show = false
			},
			change(index){
				let idx = index.current % 2;
				this.notice = this.noticeList[idx]
			},
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
			activity_detail(id){
				uni.navigateTo({
					url:'/pages/tarbar/index/activity?id=' + id,
					
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
		onShow() {
		this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
		this.owner_id = uni.getStorageSync('owner').id;
		this.activityList = []
		this.columns[0] = []
		//获取小区列表
		getCommunityList(this.owner_id).then((res)=>{
			console.log(res);
			this.columns[0] = res.data.data.community_list
			if(res.data.data.default_community){
				this.community_name = res.data.data.default_community.name
				uni.setStorageSync("community",res.data.data.default_community)
			}
			this.community_name = res.data.data.community_list[0].name
			uni.setStorageSync("community",res.data.data.community_list[0])
			
			getActivity().then((res)=>{
				this.activityList = res.data.data
			}).catch((err)=>{
				console.log('活动请求失败'+err);
			})
			
		}).catch((err)=>{
			console.log('小区请求失败'+err);
		})
		//获取社区活动列表
		getActivity().then((res)=>{
			console.log(res);
			this.activityList = res.data.data
		}).catch((err)=>{
			console.log('活动请求失败'+err);
		})
		},
		mounted() {
					
		}

}
</script>

<style lang="scss">
.container{
	width:100%;
	background-color: #f5f5f5;
	position: relative;
}


	.community_card{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 250upx;
		height: 50upx;
		background-color: #d0efff;
		position: absolute;
		top: 20upx;
		left: 20upx;
		border-radius: 10upx;
	}
	.notice{
		width:100%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		image{
			width: 120upx;
			height: 80upx;
		}
	}
	.server_list{
		padding: 10upx;
		width: 100%;
		background-color: #ffffff;
		margin-top: 10upx;
		margin-bottom: 10upx;
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
		}
		
		.u-col{
			height: 120upx;
			.contain{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-left: 20upx;
				padding-right: 20upx;
			}
		}
		image{
			height:80upx;
			width: 90upx;
		}
	}
.function_card{
	width: 100%;
	background-color: #ffffff;
	padding: 10upx;
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
	image{
		height: 100upx;
		width: 100upx;
		margin-top: 5upx;
	}
	text{
		font-size: 25upx;
		padding-top: 5upx;
		// text-align: center;
	}
	.u-col{
		padding: 5upx;
	}
}

.activity_title{
	width: 100%;
	background-color: #ffffff; 
	padding: 10upx;
	margin-top: 20upx;
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
.activity_item{
	margin: 20upx;
	background-color: #ffffff;
	image{
		height: 300upx;
		width:100%;
	}
	view{
		padding: 10upx;
	}
}
</style>

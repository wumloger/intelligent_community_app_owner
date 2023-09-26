<template>
	<view class="container">
		<view class="top">
		
		</view>
		<view class="main">
			<view class="info_card">
					<view class="title">
						{{fix.title}}
						<view class="btn">
							<u-button v-if="fix.fixed == true" color="#409eff" size="mini" shape="circle">
								<text style="color: #ffffff;">已完成</text>
							</u-button>
							<u-button v-else color="red" size="mini" shape="circle">
								<text style="color: #ffffff;">未完成</text>
							</u-button>
						</view>
						
					</view>
					<image src="../../static/虚线.png" style="height: 10upx;width: 100%;" mode=""></image>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">报修分类</text>
						{{fix.type}}
					</view>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">报修类型</text>
						{{fix.item}}
					</view>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">报修小区</text>
						{{fix.room_no}}
					</view>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">报修时间</text>
						{{fix.date}}
					</view>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">报修人</text>
						{{fix.property}}
					</view>
					<view style="display: flex; justify-content: space-between; padding: 20upx; font-size: 30upx;">
						<text style="font-size: 30upx;">手机号</text>
						{{fix.phone}}
					</view>
					<view style="padding: 20upx;padding-bottom: 0;">
						报修内容
					</view>
					<image src="../../static/line.png" style="height: 10upx; width: 100%;" mode=""></image>
					<view style="padding: 20upx; padding-top: 0; ">
						&nbsp;&nbsp;&nbsp;&nbsp;<text>{{fix.dec}}</text>
					</view>
					<view class="imgs" >
						<image :src="pic" mode="" v-for="pic in fix.imgs"></image>
					</view>
				</view>
				<view class="process">
					<view style="padding: 20upx;">
						报修处理
					</view>
					<view style="width: 100%; background-color: #ffffff;padding: 20upx;border-radius: 10upx; ">
							<u-steps 
							
							current="0" 
							direction="column" 
							inactiveIcon="checkmark-circle"
							inactiveColor="#3c9cff"
							active-color="#3c9cff"
							activeIcon="close-circle"
							>
								<u-steps-item iconSize="40" title="2021/05/31 10:01:45" desc="报修人:李想">
								</u-steps-item>
								<u-steps-item iconSize="40" title="2021/05/31 16:01:45" desc="处理人:李明轩">
								</u-steps-item>
								<u-steps-item iconSize="40" title="2021/05/31 16:01:45" desc="处理人:李明轩"></u-steps-item>
							</u-steps>
					</view>
				</view>
			</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				fix:{
					title:'幸福苑小区道路路灯不亮了',
					fixed:false,
					tag:['公共报修','路灯'],
					dec:'幸福苑小区道路路灯不亮了,并且亮度不够,请物业公司及时更换,防止发生意外事故。',
					imgs:['https://pic.imgdb.cn/item/647c397bf024cca1738af4b5.png',
					'https://pic.imgdb.cn/item/647c397bf024cca1738af475.png',
					'https://pic.imgdb.cn/item/647c397bf024cca1738af4e0.png'],
					date:'2021/05/31 10:01:45',
					type:'公共报修',
					item:'路灯',
					room_no:'幸福苑小区1号楼1单元2032',
					property:'李想',
					phone:'13013001300'
				},
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	min-height: 120vh;
	background-color: #f5f5f5;
	position: relative;
}
.top{
	height: 1200upx;
	width: 1200upx;
	background-color: #409eff;
	border-radius: 50%;
	position: absolute;
	top: -50%;
	left: -30.5%;
	
}
.main{
	width: 94%;
	margin: 20upx;
	position: absolute;
	.info_card{
		background-color: #ffffff;
		width: 100%;
		padding-bottom: 40upx;
		border-radius: 10upx;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;
		margin-top: 20upx;
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 10upx;
			padding-bottom: 0;
		}
		.btn{
			width: 20%;
			text{
				font-size: 20upx;
			}
		}
		.imgs{
			display: flex;
			justify-content: space-between;
			image{
				height: 150upx;
				width: 30%;
				margin-left: 20upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}
	
	.process{
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;
	}
}
</style>

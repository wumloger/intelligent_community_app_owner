<template>
	<view class="container">
		<view class="top">

		</view>
		
		<view class="main">
			<view class="fix_type">
				<view class="public" @click="toPublicFix">
					<image src="@/static/img/fix/person.png" mode=""></image>
					公共报修
				</view>
				<view class="person" @click="toPersonalFix">
					<image src="@/static/img/fix/public.png" mode=""></image>
					个人报修
				</view>
			</view>
			<view class="fix_card" v-for="item in fix_list">
				<view class="title" style="display: flex;justify-content: space-between; align-items: center; padding: 10upx;padding-left: 30upx;padding-right: 30upx;border-bottom: 1px solid #ddd;">
					{{item.title}}
					<view class="btn_group" style="width: 25%;">
						<u-button v-if="item.fixed == false" color="#ff3b31" size="small" shape="circle">
							<text style="color: #ffffff;">未处理</text>
						</u-button>
						<u-button v-else color="#409eff" size="small" shape="circle">
							<text style="color: #ffffff;">已完成</text>
						</u-button>
					</view>
				</view>
				<view class="tags" style="display: flex;justify-content: left;">
					<view v-for="i in item.tag" style="padding: 20upx;  min-width: 200upx; border: 1px solid #409eff;border-radius: 10upx;color: #409eff;text-align: center;line-height:20upx ;margin: 20upx;margin-right: 0;">
						{{i}}
					</view>
				</view>
				<view class="dec" style="margin: 20upx; margin-top:0; background-color:#f2f6fb; padding: 20upx; border-radius: 10upx;">
					&nbsp;&nbsp;&nbsp;&nbsp;{{item.dec}}
				</view>
				<view class="pics">
					<image v-for="img in item.imgs" :src="img"></image>
				</view>
				<view class="date" style="display: flex; justify-content: space-between;padding: 20upx; padding-top: 0;">
					<text style="color: #A1A1A1;">{{item.date}}</text> 
					<navigator url="/pages/fix/fix-detail" style="color: #409eff;">报修详情</navigator>
				</view>
			</view>
			<view class="end" style="text-align: center;background-color: #f5f5f5; padding-top: 20upx;">
				<text>没有更多数据了~</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fix_list:[{
					title:'幸福苑小区道路路灯不亮了',
					fixed:false,
					tag:['公共报修','路灯'],
					dec:'幸福苑小区道路路灯不亮了,并且亮度不够,请物业公司及时更换,防止发生意外事故。',
					imgs:['https://pic.imgdb.cn/item/647c397bf024cca1738af4b5.png',
					'https://pic.imgdb.cn/item/647c397bf024cca1738af475.png',
					'https://pic.imgdb.cn/item/647c397bf024cca1738af4e0.png'],
					date:'2021/05/31 10:01:45'
				},
				{
					title:'我门家室内漏水了,赶快来吧',
					fixed:true,
					tag:['个人报修','路灯'],
					dec:'我门家室内漏水了,赶快来吧,并且亮度不够,请物业公司及时更换,防止发生意外事故。',
					imgs:['https://pic.imgdb.cn/item/647c4118f024cca1739fa676.png',
					'https://pic.imgdb.cn/item/647c4118f024cca1739fa667.png',
					'https://pic.imgdb.cn/item/647c4118f024cca1739fa612.png'],
					date:'2021/05/31 10:01:45'
				}]
			}
		},
		methods: {
			toPublicFix(){
				uni.navigateTo({
					url:'/pages/fix/fix-form?type=1'
				})
			},
			toPersonalFix(){
				uni.navigateTo({
					url:'/pages/fix/fix-form?type=2'
				})
			}
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
	top: -55%;
	left: -30.5%;
	
}
.main{
	width: 94%;
	margin: 20upx;
	position: absolute;
	
	padding: 20upx;
	.fix_type{
		display: flex;
		justify-content: space-between;
		height: 100upx;
		.public,.person{
			background-color: #ffffff;
			width: 45%;
			display: flex;
			align-items: center;
			
			font-size: 40upx;
			color: #409eff;
			image{
				height: 80upx;
				width: 80upx;
				margin-top: 10upx;
				margin-bottom: 10upx;
				margin-right: 30upx;
			}
			border-radius: 10upx;
			margin-left: 10upx;
			margin-right: 10upx;
		}
		
	}
	.fix_card{
		background-color: #ffffff;
		margin-top: 20upx;
		border-radius: 10upx;
	}
	.pics{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-around;
		margin: 20upx;
		margin-top: 0;
		border-bottom: 1px solid #ddd;
		padding-bottom: 30upx;
		image{
			height: 150upx;
			width: 35%;
			margin-right: 10upx;
			border-radius: 20upx;
		}
		
	}
}
</style>

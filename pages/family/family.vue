<template>
	<view :style="{height:statusBarHeight}"></view>
	<view class="u-navbar">
		<u-icon name="arrow-left" @click="back" size="40" color="#000000"></u-icon>
		<view style="padding-left:100upx ;">
			家庭成员
		</view>
		<navigator url="/pages/family/add-family" style="color: #189eff;">+添加家庭成员</navigator>
	</view>
	<view class="container">
		<view class="top">
			
		</view>
		<view class="family_list">
			<view class="room" style="background-color: #ffffff; display: flex; color: #189eff; padding: 20upx; width: fit-content;border-radius: 5upx; margin-bottom: 80upx;">
				幸福苑小区1号楼1单元1305室<u-icon name="arrow-down-fill" color="#189eff"></u-icon>
			</view>
			<view class="family_card" v-for="item in family_list">
				<view class="title" style="display: flex; padding: 20upx; width:100%; justify-content: space-between; align-items: center;">
					<view style="display: flex;">
						<text style="font-size: 40upx; color: #000000;">{{item.name}}</text>
						<view class="btn" style="padding-left: 20upx;">
							<u-button v-if="item.isRegister == true" type="primary" plain="true" shape="circle" size="small">
								<text style="color: #189eff;">已注册</text>
							</u-button>
							<u-button v-else type="primary" plain="true" shape="circle" size="small">
								<text style="color: #189eff;">未注册</text>
							</u-button>
						</view>
					</view>
					<view class="delete_btn">
						<u-button type="primary" plain="true" color="#A1A1A1" shape="circle" size="small">
							<text style="color: #A1A1A1;">×删除</text>
						</u-button>
					</view>
				</view>
				<view style="padding: 20upx; padding-top: 0;">
					<text>{{item.phone}}</text>
				</view>
				<view style="display: flex; justify-content: space-between; padding: 20upx;">
					<text>住户类型</text>
					{{item.user_type}}
				</view>
				<view style="display: flex; justify-content: space-between; padding: 20upx; padding-top: 0;padding-bottom: 30upx;">
					<text>有效期</text>
					{{item.time}}
				</view>
			</view>
			
		</view>
		
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {getCodeList,updateCode} from '@/api/open.js'
import code from '../../uni_modules/uview-plus/libs/config/props/code';
	export default {
		data() {
			return {
				family_list:[{
					name:'李晓旭',
					isRegister:true,
					phone:'1300****1300',
					user_type:'家属',
					time:'长期有效'
				},
				{
					name:'吴用',
					isRegister:false,
					phone:'1300****1300',
					user_type:'租户',
					time:'长期有效'
				},
				{
					name:'范闲',
					isRegister:false,
					phone:'1300****1300',
					user_type:'租户',
					time:'长期有效'
				},
				{
					name:'李晓虹',
					isRegister:false,
					phone:'1300****1300',
					user_type:'家属',
					time:'长期有效'
				},
				],
				statusBarHeight:'',
			}
		},
		methods: {
			back(){
				console.log(getCurrentPages());
				 if(getCurrentPages().length == 1){
					 uni.switchTab({
					 	url:'/pages/tarbar/me/me'
					 })
				 }else{
					 uni.navigateBack({
					 	delta: 1
					 });
				 }
			
			},
		
			
				
			
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			this.share_list = []

		}
	}
</script>

<style lang="scss" scoped>
	.u-navbar{
		height: 70upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 20upx;
		padding-right: 20upx;
		font-size: 30upx;
	
	}
	.container{
		width: 100%;
		height: 100vh;
		background-color: #f5f5f5;
		position: relative;
	}
	.top{
		height: 300upx;
		background-color: #409eff;
		border-radius: 0upx 0upx 20upx 20upx;
		
	}
	.family_list{
		position: absolute;
		width: 94%;
		margin: 20upx;
		top: 0;
	}
	.family_card{
		background-color: #fff;
		width: 100%;
		border-radius: 10upx;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 1px;
		margin-bottom: 20upx;
	}
	
</style>

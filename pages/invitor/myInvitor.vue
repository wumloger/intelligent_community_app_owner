<template>
	<view :style="{height:statusBarHeight}"></view>
	<view class="u-navbar">
		<u-icon name="arrow-left" @click="back" size="40" color="#000000"></u-icon>
		<view>
			我的访客
		</view>
		<navigator url="/pages/invitor/openHistory" style="color: #189eff;">开门记录</navigator>
	</view>
	<view class="container">
		<view class="top">
			<view class="top_title" style="display: flex; justify-content: space-between; align-items: center; height: 90%;">
				<text style="color: #ffffff; font-size: 40upx; padding: 30upx;">访客邀请记录</text>
				<view class="btn" style="width: 250upx; margin-right: 30upx;">
					<u-button type="primary" color="#ffffff" shape="circle" text="" @click="toVister"><text style="color: #409eff;">+访客邀请</text></u-button>
				</view>
				
			</view>
		</view>
		
		<view class="share_cards">
			<view v-for="(item,index) in share_list" :key="item.uuid" class="share_card">
				<view class="name">
					<view>{{item.codeName}}</view>
					<view class="failure" v-if="item.failure == 1" style="color: #409eff; border-color: #409eff;" @click="unuse(item.uuid)">使失效</view>
					<view class="failure" v-else style="color: #A1A1A1; border-color: #A1A1A1;">已失效</view>
				</view>
				<hr>
				<view class="equips_card">
					<view class="equip_title">
						开门授权:
					</view>
					<view class="equips">
						<view class="equip" v-for="(i,idx) in item.devices">
							{{i}}
						</view>
					</view>
				</view>
				<view class="effective_time">
					<view>
						有效期时长: &nbsp;&nbsp;{{item.effectiveTime + '小时' }}
					</view>
					<view v-if="item.failure == 1">
						<u-icon name="share-square" label="分享" color="#409eff" label-color="#409eff" label-size="20upx" size="40"></u-icon>
					</view>
					<view v-else>
						<u-icon name="share-square" label="分享" label-size="20upx" size="40"></u-icon>
					</view>
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
				share_list:[
					{
						id:0,
						code_name:'幸福苑小区',
						devices:['西入口闸机','东入口闸机','1号楼1单元门','1号楼2单元门'],
						effective_time:'12小时',
						failure:1
						
					},
					{
						id:0,
						code_name:'幸福苑小区',
						devices:['西入口闸机','东入口闸机','1号楼1单元门','1号楼2单元门'],
						effective_time:'12小时',
						failure:1
						
					}
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
			toVister(){
				uni.navigateTo({
					url:'/pages/invitor/invitor'
				})
			},
			unuse(code_id){
				const owner_id = uni.getStorageSync('owner').id
				updateCode(code_id).then((res)=>{
					if(res.data.code === 0){
						this.$refs.uToast.show({
							message:'已失效',
							type:'success',
							position:'top',
							duration:'1000'
						})
						getCodeList(owner_id).then((res)=>{
							console.log(res);
							this.share_list = res.data.data
						})
					}else{
						this.$refs.uToast.show({
							message:'操作失败',
							type:'error',
							position:'top',
							duration:'1000'
						})
					}
				}).catch((err)=>{
					this.$refs.uToast.show({
						message:'服务器错误',
						type:'error',
						position:'top',
						duration:'1000'
					})
				})
			}
		},
		onShow() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';
			this.share_list = []
			const owner_id = uni.getStorageSync('owner').id
			getCodeList(owner_id).then((res)=>{
				console.log(res);
				this.share_list = res.data.data
				this.share_list = this.share_list.reverse()
			})
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
	.share_cards{
		width: 94%;
		position: absolute;
		top: 150upx;
		margin: 20upx;
	}
	.share_card{
		box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.349019607843137);
		width: 100%;
		margin-top: 50upx;
		.name{
			font-size: 40upx;
			font-weight: 500;
			display: flex;
			justify-content: space-between;
			height: 100upx;
			padding: 20upx;
			align-items: center;
			.failure{
				height: 50upx;
				width: 150upx;
				font-size: 30upx;
				border-radius: 50upx;
				border:1px solid;
				text-align: center;
				
			}
		}
		background-color:#ffffff;
		border-radius: 15upx;
		z-index: 999;
		hr{
			margin-left: 5upx;
			margin-right: 5upx;
			border:0.5px solid #A1A1A1;
		}
		.equips_card{
			padding: 20upx;
			color: #666666;
			.equips{
				color:#A1A1A1;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				.equip{
					height: 50upx;
					border:1px solid #A1A1A1;
					width: 40%;
					margin: 20upx;
					margin-left: 20upx;
					margin-right: 20upx;
					text-align: center;
					border-radius: 10upx;
				}
				
			}
		}
		.effective_time{
			display: flex;
			justify-content: space-between;
			padding: 20upx;
			padding-top: 0;
		}
	}
</style>

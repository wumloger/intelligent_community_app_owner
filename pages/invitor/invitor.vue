<template>
	<view class="container">
		<view class="top">
			
		</view>
		<view class="card">
			<view class="info">
				<view style="font-size: 40upx; padding: 20upx; padding-bottom: 0upx; padding-top: 40upx;">访客通行</view>
				<view style="display: flex; justify-content: space-between; align-items: center;">
					<text style="padding: 10upx; font-size: 30upx; color: #A1A1A1;">在这里你可以把您所在小区下单元的开<br>门权限分享给好友,好友即可一键开<br>门,方便快捷!</text>
					<image src="@/static/img/open/msg_card.png" style="width: 200upx; height: 200upx; margin-bottom: 20upx;" mode=""></image>
				</view>
			</view>
			<view class="equip" style="padding-top: 20upx;">
				<view class="title" style="padding: 10upx;">
					开门授权
				</view>
				<view class="equip_list" v-if="equip_list.length > 0">
					<view v-for="(item,index) in equip_list" :key="index" :class="item.selected == true ? 'selected_card' : 'equip_card'" @click="item.selected = !item.selected">
						<image :src="item.img" mode=""></image>
						<view>{{item.equipName}}</view>
					</view>
				</view>
			</view>
			<view class="time">
				<view class="title" style="padding: 10upx;">
					钥匙分享时长
				</view>
				<view class="btns">
					<view class="btn" :class="item.selected == true ? 'btn_selected' : 'btn'" v-for="(item,index) in btn_group" @click="selected(index)">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="share_btn">
			<u-button type="primary" shape="circle" @click="share">分享给访客开门</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
		<u-popup :show="show" @close="close" @open="open" mode="center" round="20" >
		    <view class="center_popup">
		        <view class="title">
		        	{{community_name}}
		        </view>
				<view class="code">
					<image src="@/static/img/open/2d.png" mode=""></image>
					<view class="text">
						请把二维码放置门禁摄像头前扫描
					</view>
				</view>
				<view class="equip_card">
					<view class="equip_title">
						开门授权:
					</view>
					<view class="equips">
						<view class="equip" style="width: fit-content;" v-for="(item,index) in selected_equip">
							{{item.equipName}}
						</view>
					</view>
				</view>
				<view class="tips">
					此钥匙二维码有效时长&nbsp;&nbsp;<b>{{time[0].name}}</b>
				</view>
		    </view>
		</u-popup>
		<u-popup :show="show" @close="close" @open="open" mode="bottom" >
		    <view class="bottom_popup"> 
		        <view class="icons">
		        	<view class="icon">
		        		<image src="@/static/img/open/wechat.png" mode=""></image>
		        		<view class="text">微信好友</view>
		        	</view>
					<view class="icon" @click="copy">
						<image src="@/static/img/open/copy.png" mode=""></image>
						<view class="text">复制链接</view>
					</view>
		        </view>
				<view class="cancel" @click="show = false">
					取消
				</view>
		    </view>
		</u-popup>
	</view>
</template>

<script>
	import {getDoorsById,vister} from '@/api/open.js'
	export default {
		data() {
			return {
				equip_list:[],
				btn_group:[{
					name:'1小时',
					time:3600000
				},
				{
					name:'3小时',
					time:10800000
				},
				{
					name:'6小时',
					time:21600000
				},
				{
					name:'12小时',
					time:43200000
				},
				{
					name:'1天',
					time:86400000
				},
				{
					name:'2天',
					time:172800000
				},
				{
					name:'3天',
					time:259200000
				},
				{
					name:'4天',
					time:345600000
				},
				],
				show:false,
				selected_equip:[],
				time:[],
				community_name:'西楚庄园'
			}
		},
		methods: {
			selected(idx){
				this.btn_group.forEach(item=>item.selected = false)
				this.btn_group[idx].selected = true
			},
			share(){
				this.show = false
				this.selected_equip = this.equip_list.filter(item=>item.selected == true)
				this.time = this.btn_group.filter(item=>item.selected==true)
				if(this.selected_equip.length < 1){
					this.$refs.uToast.show({
						message:'请选择设备',
						position:'top',
						type:'warning',
						duration:'1000'
					})
				
				}
				if(this.time.length < 1){
					this.$refs.uToast.show({
						message:'请选择时间',
						position:'top',
						type:'warning',
						duration:'1000'
					})
				
				}
				if(this.selected_equip.length > 0 && this.time.length > 0){
					this.show = true
					const owner_id = uni.getStorageSync('owner').id
					vister(owner_id,this.selected_equip,this.time[0].time).then((res)=>{
						if(res.data.code === 0){
							console.log('记录成功');
						}else{
							console.log('记录失败');
						}
					})
				}
				
			},
			copy(){
				this.show = false
				this.$refs.uToast.show({
					message:'复制成功',
					position:'top',
					type:'success'
				})
			}
		},
		onShow() {
		//获取设备列表
		const owner_id = uni.getStorageSync('owner').id
		this.equip_list = []
		if(owner_id){
			getDoorsById(owner_id).then((res)=>{
				console.log(res);
				if(res.data.code === 0){
					if(res.data.data.length > 0){
						this.equip_list = res.data.data
					}
				}else{
					this.$refs.uToast.show({
						message:res.data.msg,
						type:'error',
						position:'top'
					})
				}
			}).catch((err)=>{
			console.log('获取设备列表失败' + err);
		 })
		}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		
		background-color: #f5f5f5;
	}
	.card{
		background-color: #ffffff;
		margin: 20upx;
		margin-top: 0upx;
	}
	.top{
		height: 20upx;
		background-color: #f5f5f5;
	}
	.equip_list{
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
		.equip_card{
			margin: 20upx;
			display: flex;
			align-items: center;
			flex-direction: column;
			width:44%;
			font-size: 30upx;
			view{
				width: 100%;
				text-align: center;
			}
			border-radius: 10upx;
			border: 1upx solid transparent;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
		}
		image{
			height: 150upx;
			width: 230upx;
			padding-left: 10upx;
			padding-right: 10upx;
			margin-left: 10upx;
		}
		.selected_card{
			margin: 20upx;
			display: flex;
			align-items: center;
			flex-direction: column;
			width:44%;
			font-size: 30upx;
			view{
				width: 100%;
				text-align: center;
			}
			border-radius: 10upx;
			border: 1upx solid transparent;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.349019607843137);
			border: 1px solid rgba(64, 158, 255, 1);
		}
	}
.time{
	.btns{
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
	}
	.btn{
		width:19%;
		height:100upx;
		background-color:#ffffff;
		margin: 20upx;
		border-radius: 10upx;
		color: #666666;
		text-align: center;
		line-height: 100upx;
		border:1px solid rgb(188,188,188)
	}
	.btn_selected{
		width:19%;
		height:100upx;
		background-color:#409eff;
		margin: 20upx;
		border-radius: 10upx;
		color: #ffffff;
		text-align: center;
		line-height: 100upx;
		border:1px solid rgb(188,188,188)
	}
	
}

.share_btn{
	padding: 50upx;
	padding-left: 150upx;
	padding-right: 150upx;
	
}

.bottom_popup{
	background-color: #f5f5f5;
	image{
		height: 100upx;
		width: 100upx;
	}
	.text{
		width: 120upx;
		padding-left: 10upx;
		padding-top: 10upx;
		font-size: 20upx;
		color:#A1A1A1;
	}
	.icons{
		display: flex;
		justify-content: space-around;
		.icon{
			padding: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	.cancel{
		height: 100upx;
		background-color: #ffffff;
		text-align: center;
		line-height: 100upx;
		color: #A1A1A1;
	}
}
.center_popup{
	.title{
		height: 100upx;
		background-color: #1585fe;
		border-radius: 20upx 20upx 0upx 0upx;
		color: #ffffff;
		font-size: 40upx;
		text-align: center;
		line-height: 100upx;
		
		}
		.code{
			text-align: center;
			padding: 40upx;
			padding-bottom: 10upx;
			padding-left: 80upx;
			padding-right: 80upx;
			image{
				height: 300upx;
				width: 300upx;
			}
			.text{
				font-size: 20upx;
				color: #A1a1a1;
			}
		}
		.equip_card{
			padding: 40upx;
			padding-bottom: 10upx;
			color: #666666;
			.equips{
				width: 100%;
				display: flex;
				justify-content: left;
				flex-wrap: wrap;
				
				.equip{
					border: 0.5px solid #A1A1A1;
					height: 50upx;
					width: 45%;
					font-size: 30upx;
					color: #A1A1A1;
					margin: 10upx;
					border-radius: 10upx;
					text-align: center;
					line-height: 50upx;
				}
			}
			
		}
		.tips{
			background-color: #f2f2f2;
			height: 100upx;
			margin: 40upx;
			border-radius: 10upx;
			text-align: center;
			height: 70upx;
			line-height: 70upx;
			font-size: 20upx;
			b{
				color: #ff6600;
				font-size: 50upx;
			}
		}
		
}
</style>

<template>
	<view class="container">
		<view class="top">
			
		</view>
		<template v-if="houseList.length > 0">
			<view v-for="(item,index) in houseList" :key="item.id" class="house">
				<view class="community">
					{{item.community_name}}
				</view>
				<view class="house_info">
					<u-row style="padding-bottom: 0;">
						<u-col span="6">楼栋房号</u-col>
						<u-col span="6" style="text-align: right;">{{item.room_no}}</u-col>
					</u-row>
					<u-row style="padding-bottom: 40upx;">
						<u-col span="6">住户类型</u-col>
						<u-col span="6" style="text-align: right;">{{item.user_type}}</u-col>
					</u-row>
				</view>
				<view class="delete_btn">
					<u-row>
						<u-col span="9"></u-col>
						<u-col span="3"><u-button type="primary" shape="circle" plain @click="remove(item.id)"><text style="color: #4fa6ff;">删除</text></u-button></u-col>
					</u-row>
				</view>
			</view>
		</template>
		<view class="btn_group">
			<u-row justify="between">
				<u-col span="5.5">
					<u-button type="primary" shape="circle" @click="add_owner"><text style="color: #ffffff;">我是业主,添加房屋</text></u-button>
				</u-col>
				<u-col span="5.5">
					<u-button type="primary" shape="circle" color="#A1A1A1" plain="true" @click="add_user"><text>我是住户,入住房屋</text></u-button>
				</u-col>
			</u-row>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {removeHouse,HouseList} from '@/api/home.js'
	export default {
		data() {
			return {
				houseList:[
				
				],
				isOwner:-1
			}
		},
		methods: {
			remove(house_id){
			 	const owner_id = uni.getStorageSync('owner').id
				removeHouse(house_id,owner_id).then((res)=>{
					if(res.data.code === 0){
						this.$refs.uToast.show({
							message:'删除成功',
							position:'top',
							type:'success'
						})
						this.getList()
					}else{
						this.$refs.uToast.show({
							message:'删除失败',
							position:'top',
							type:'error'
						})
					}
				})
			},
			add_owner(){
				if(this.isOwner == 0){
					this.$refs.uToast.show({
						message:'住户无法添加房屋',
						position:'top',
						type:'warning'
					})
				}else{
					uni.navigateTo({
						url:'/pages/home/owner-add-house'
					})
				}
				
			},
			add_user(){
				if(this.isOwner == 1){
					this.$refs.uToast.show({
						message:'业主无法加入房屋',
						position:'top',
						type:'warning'
					})
				}else{
					uni.navigateTo({
						url:'/pages/home/user-add-house'
					})
				}
				
			},
			getList(){
				const owner_id = uni.getStorageSync('owner').id
				const isOwner = uni.getStorageSync('owner').isOwner
				const rooms_no = []
				const rooms_id = []
				this.houseList = []
				HouseList(owner_id,2).then((res)=>{
					console.log(res);
					const buildings = res.data.data.buildings
					for (let i = 0; i < buildings.length; i++) {
						let rooms = buildings[i].rooms
						for (let j = 0; j < rooms.length; j++) {
							let room_no = buildings[i].buildingName + rooms[j].roomName
							rooms_no.push(room_no)
							rooms_id.push(rooms[j].roomId)
						}
					}
					
					for (let i = 0; i < rooms_no.length; i++) {
						this.houseList.push({
							room_no:rooms_no[i],
							community_name:res.data.data.communityName,
							id:rooms_id[i],
							user_type:isOwner == 1 ? '业主':'住户'
						})
						
					}
					console.log(this.houseList);
				})
			}
		},
		onShow() {
			this.isOwner = -1
			this.getList()
			this.isOwner = uni.getStorageSync('owner').isOwner
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 100%;
		min-height: 100vh;
		background-color: #f5f5f5;
	}
	.top{
		height: 10upx;
	}
	.house{
		background-color: #ffffff;
		margin: 20upx;
		margin-bottom: 0upx;
		border-radius: 10upx;
		.community{
			color: #1890ff;
			font-weight: 500;
			font-size: 40upx;
			padding: 20upx;
			border-bottom: 1px solid #ddd;
		}
		.house_info{
			.u-row{
				padding: 20upx;
				
			}
			border-bottom: 1px solid #ddd;
		}
		.delete_btn{
			padding: 20upx;
		}	
	}
	.btn_group{
		padding-top: 50upx;
		padding-left: 30upx;
		padding-right: 30upx;
		.u-button{
			margin: 10upx;
			text{
				font-size: 30upx;
			}
		}
	}
</style>

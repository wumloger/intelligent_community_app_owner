<template>
	<view class="container">
		<view class="top">
			
		</view>
		<template v-if="msg_list.length > 0">
		<view class="message_card" v-for="(item,index) in msg_list" @click="msg_detail(item.id)">
			<b style="padding: 10upx;">{{item.title}}</b>
			<u--text
			lines="3"
			class="content"
			:text="item.content"
			color="#A1A1A1"
			>
			</u--text>
			<view class="date" style="padding: 10upx;">
				<u-icon name="clock"></u-icon>&nbsp;{{item.releaseTime}}&nbsp;&nbsp;&nbsp;&nbsp; <u-icon name="eye"></u-icon>&nbsp; 1524
			</view>
		</view>
		</template>
	</view>
</template>

<script >
import {getNotice} from '@/api/message.js'
export default{
	data(){
		return{
			msg_list:[]
		}
	},
	onShow(){
		this.msg_list = []
		getNotice().then((res)=>{
			console.log(res);
			if(res.data.code === 0 && res.data.data.length > 0){
				this.msg_list = res.data.data
			}
		})
	},
	methods:{
		msg_detail(id){
			uni.navigateTo({
				url:'/pages/tarbar/message/msg-detail?id=' + id
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.container{
	width: 100%;
	height: 100vh;
	background-color: #f5f5f5;
}
.top{
	background-color: #f5f5f5;
	height: 10upx;
}
.message_card{
	background-color: #ffffff;
	margin: 10upx;
	margin-bottom: 0upx;
	height: 230upx;
	position: relative;
	.date{
		display: flex;
		justify-content: left;
		padding-top: 10upx;
		color: #A1A1A1;
		font-size: 20upx;
		position: absolute;
		bottom:10upx;
	}
	.content{
		color: #A1A1A1;
		font-size: 30upx;
		padding: 20upx;
	}
}

</style>

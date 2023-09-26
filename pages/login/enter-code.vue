<template>
	<view class="container">
		<view class="card">
			<h3>输入验证码</h3>
			<text style="padding-left: 50upx;color: black;">请输入{{phone}}收到的验证码</text>
			<view class="code_input" style="padding-left: 50upx; padding-top: 100upx;">
				<u-form>
					<u-form-item>
						  <u-input
							placeholder="验证码"
							border="bottom"
							v-model="code"
							type="number"
						  >
						  <template #suffix>
						  	<u-button type="primary" color="#666666" :plain="true" :hairline="true" :disabled="flag" @click="resend">{{text}}</u-button>
						  </template>
						  </u-input>
					
					  </u-form-item>
					
				  </u-form>
			</view>
	
			 <view class="btn">
			 	<u-button type="primary" size="large" shape="circle" color="#14acff" @click="login">登录</u-button>
			 </view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>

</template>

<script>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	import {getCodeByPhone,loginByCode} from '@/api/login.js'
	import {toast} from '@/util/common.js'
	export default{
		data() {
			return {
				code:''
			}
		},
		setup(){
			const phone = ref()
			const text = ref("重新发送")
			let time = 60
			const flag = ref(false)
			onLoad((option)=>{
				phone.value = option.phone
				flag.value = true
				const clock = setInterval(()=>{
					time--;
					text.value = "重新发送(" + time + "s)"
					if(time < 1){
						flag.value = false
						time = 60
						text.value = "重新发送"
						clearInterval(clock)
					}
				},1000)
			})
			const resend = ()=>{
				getCodeByPhone(phone.value)
				flag.value = true
				const clock = setInterval(()=>{
					time--;
					text.value = "重新发送(" + time + "s)"
					if(time < 1){
						flag.value = false
						time = 60
						text.value = "重新发送"
						clearInterval(clock)
					}
				},1000)
			}
			
			return{
				phone,
				text,
				time,
				flag,
				onLoad,
				resend
			}
		},
		
		methods:{
			login(){
				loginByCode(this.phone,this.code).then((res)=>{
					if(res.data.code === 0){
						//登录成功后缓存保存token,业主/物业信息
						if(res.data.data.token){
							uni.setStorage({
								key: 'token',
								data: res.data.data.token,
								success: function () {
									console.log('token set success');
								}
							});
						}
						if(res.data.data.owner){
							uni.setStorage({
								key: 'owner',
								data: res.data.data.owner,
								success: function () {
									console.log('owner set success');
								}
							});
						}
						if(res.data.data.property){
							uni.setStorage({
								key: 'property',
								data: res.data.data.property,
								success: function () {
									console.log('property set success');
								}
							});
						}
						uni.switchTab({
							url: '/pages/tarbar/index/index'
						});
						this.$refs.uToast.show({
							loading:false,
							message:'登录成功',
							position:'top',
							type:'success'
						})
					}else{
						this.$refs.uToast.show({
							loading:false,
							message:'登录失败:' + res.data.msg,
							position:'top',
							type:'error'
						})
					}
				}).catch((err)=>{
					console.log(err);
					this.$refs.uToast.show({
						loading:false,
						message:'登录失败:服务器错误',
						position:'top',
						type:'error'
					})
				})
			}
		}
	}
</script>
	

<style>
.container{
	width: 100%;
	height: 100vh;	
	padding-top: 15upx;
	padding-left: 10upx;
	padding-right: 10upx;
	background-color: #f1f1f1;	
}
.card{
	width: 97%;
	height: 97%;
	
	background-color: #ffffff;
}
h3{
	
	font-weight: 500;
	padding: 50upx;
	padding-top: 70upx;
	
}
.btn{
	padding: 50upx;
	padding-top: 70upx;
}

</style>

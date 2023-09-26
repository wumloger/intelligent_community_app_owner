<template>
	<view class="header">
			<image src="../../static/img/login.png" mode=""></image>
	</view>
	
	<view class="text">
		<text style="margin-left: 50upx;">请验证登录,未注册的手机号会自动为您注册</text>
	</view>
	<view class="input">
		<u-form>
			<u-form-item>
				  <u-input
					placeholder="请输入电话号码"
					border="bottom"
					v-model="phone"
					type="number"
				  >
				  <template #prefix>
				  	<u--text
				  	text="+86>"
				  	margin="0 3px 0 0"
					size="25"
					color="black"
				  	></u--text>
				  </template>
				  </u-input>
			  </u-form-item>
		  </u-form>
		
	</view>
	<view class="btn">
		<u-button type="primary" shape="circle" @click="getCode"><text style="color: white;">获取验证码</text></u-button>
	</view>
	
	<view class="a_text text-center pt-20">
		<navigator url="/pages/login/loginByPassword"><text>账号密码登录</text></navigator>
	</view>
	
	<view class="footer text-center" style="padding-top: 35%;font-size: 14upx;color: #666666;">
			登录代表同意平台的<span style="color: #34389B;" @click="gotoContract">{{contract}}</span> 及 <span style="color: #34389B;" @click="gotoPrivacy">{{privacy}}</span>
	</view>
	<u-toast ref="uToast"></u-toast>
</template>

<script>
	import {getCodeByPhone} from '@/api/login.js'
	import {validatePhone} from '@/util/common.js'
	
	import {ref,getCurrentInstance} from 'vue'
	
	import axios from '@/request.js'
	export default {
		data() {
			return {
			
			}
		},
		setup(){
			const phone = ref()
			const contract = ref("<<用户服务协议>>")
			const privacy = ref("<<隐私政策>>")
			const gotoContract = ()=>{
				uni.navigateTo({
					url:'/pages/contract/contract'
				})
			}
			const gotoPrivacy = () =>{
				uni.navigateTo({
					url:'/pages/contract/privacy'
				})
			}
			return{
				phone,contract,privacy,gotoContract,gotoPrivacy
			}
		},
		methods: {
			getCode(){
				if(validatePhone(this.phone)){
					getCodeByPhone(this.phone).then((res)=>{
						uni.navigateTo({
							url:'/pages/login/enter-code?phone=' + this.phone
						})
					}).catch((err)=>{
						console.log(err);
					})
				}else{
					
					this.$refs.uToast.show({
						message:'电话号码的格式不正确',
						position:'top',
						type:'error'
					})
				}
			}
		}
	}
	
	


</script>

<style>
image{
	width: 200upx;
	height: 200upx;
}
.header{
	text-align: center;
	padding-top: 100upx;
	padding-bottom: 200upx;
}
.input{
	padding-top: 50upx;
	padding-bottom: 50upx;
	padding-left: 50upx;
	padding-right: 50upx;
}
.btn{
	padding-left: 50upx;
	padding-right: 50upx;
	
}
</style>

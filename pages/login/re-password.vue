<template>
	<u-form :model="form">
		<u-form-item>
			<u-input
			  placeholder="请输入手机号"
			  border="bottom"
			  v-model="form.phone"
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
		<u-form-item>
			<u-input
				placeholder="验证码"
				border="bottom"
				v-model="form.code"
				type="number"
			>
			<template #suffix>
				<u-button type="primary" color="#666666" size="small" shape="circle" :plain="true" :hairline="true" :disabled="codeFlag" @click="send">{{text}}</u-button>
			</template>
			</u-input>
		</u-form-item>
		
		<u-form-item>
			<u-input
			  placeholder="请输入密码"
			  border="bottom"
			  v-model="form.password"
			  type="text"
			>
			</u-input>
		</u-form-item>
		<u-form-item>
			<u-input
			  placeholder="请确认密码"
			  border="bottom"
			  v-model="form.rePassword"
			  type="password"
			>
			</u-input>
		</u-form-item>
		
		<u-form-item>
			<u-button
			type="primary"
			text="完成"
			:disabled="flag"
			:color="color"
			shape="circle"
			@click="changePassword"></u-button>
			
		</u-form-item>
			<u-toast ref="uToast"></u-toast>
	</u-form>
</template>

<script>
	import {getCodeByPhone,rePassword} from '@/api/login.js'
	import {validatePhone} from '@/util/common.js'
	export default {
		data() {
			return {
				form:{
					phone:'',
					code:'',
					password:'',
					rePassword:''
				},
				flag:true,
				color:'#f2f2f2',
				text:'获取验证码',
				codeFlag:false
			}
		},
		methods: {
			send(){
				if(validatePhone(this.form.phone)){
					let time = 61
					getCodeByPhone(this.form.phone)
					this.codeFlag = true
					const clock = setInterval(()=>{
						time--;
						this.text = "重新发送(" + time + ")"
						if(time < 1){
							this.codeFlag = false
							time = 60
							this.text = "获取验证码"
							clearInterval(clock)
						}
					},1000)
				}else{
					this.$refs.uToast.show({
						message:'手机号格式不正确',
						position:'top',
						type:'error'
					})
				}
			
			},
			changePassword(){
				if(this.form.password == this.form.rePassword){
					rePassword(this.form).then((res)=>{
						if(res.data.code === 0){
							this.$refs.uToast.show({
								message:'修改成功',
								position:'top',
								type:'success'
							})
							uni.navigateTo({
								url:'/pages/login/loginByPassword'
							})
						}else{
							this.$refs.uToast.show({
								message:res.data.msg,
								position:'top',
								type:'error'
							})
						}
					}).catch((err)=>{
						this.$refs.uToast.show({
							message:'服务器错误',
							position:'top',
							type:'error'
						})
					})
					
				}else{
					this.$refs.uToast.show({
						message:'两次输入的验证码必须相同',
						position:'top',
						type:'error'
					})
				}
			}
		},
		watch:{
			form:{
				handler(newVal){
					if(this.form.phone != '' && this.form.password != '' && this.form.code != '' && this.form.rePassword != ''){
						this.flag = false
						this.color = ''
					}else{
						this.flag = true
						this.color = '#f2f2f2'
					}
				},
				deep:true
			}
		}
	}
</script>

<style>
.u-form-item{
	margin-left: 50upx;
	margin-right: 50upx;
	margin-top: 20upx;
}
</style>

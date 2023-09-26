<template>
	<h3>账号密码登录</h3>
	<u-form>
		<u-form-item>
			  <u-input
			    placeholder="请输入手机号"
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
		
		<u-form-item>
			<u-input
			placeholder="请输入密码"
			border="bottom"
			v-model="password"
			type="password"
			>
			</u-input>
		</u-form-item>
		
		<u-form-item>
			<u-button 
			type="primary"
			text="登录"
			:disabled="flag"
			:color="color"
			shape="circle"
			@click="login"></u-button>
		</u-form-item>
		<u-form-item>
			<navigator url="/pages/login/re-password" ><text style="font-size: 14upx;margin-left: 500upx;">忘记密码?</text></navigator>
		</u-form-item>
	</u-form>
	<u-toast ref="uToast"></u-toast>
</template>

<script>
	import {loginByPassword} from '@/api/login.js'
	import {validatePhone} from '@/util/common.js'
	export default {
		data() {
			return {
				phone:'',
				password:'',
				flag:true,
				color:'#f2f2f2'
			}
		},
		watch:{
			phone(newNum,oldNum){
				if(this.phone != '' && this.password != ''){
					this.flag = false
					this.color = ''
				}else{
					this.flag = true
					this.color = '#f2f2f2'
				}
			},
			password(newNum,oldNum){
				if(this.phone != '' && this.password != ''){
					this.flag = false
					this.color = ''
				}else{
					this.flag = true
					this.color = '#f2f2f2'
				}
			}
		},
		methods:{
			login(){
				if(validatePhone(this.phone)){
					loginByPassword(this.phone,this.password).then((res)=>{
						//code为0为登录成功
						if(res.data.code === 0){
							this.$refs.uToast.show({
								message:'登录成功',
								position:'top',
								type:'success'
							})
							//缓存保存token信息
							if(res.data.data.token){
								uni.setStorage({
									key: 'token',
									data: res.data.data.token,
									success: function () {
										console.log('token set success');
									}
								});
							}
							//缓存保存业主信息
							if(res.data.data.owner){
								uni.setStorage({
									key: 'owner',
									data: res.data.data.owner,
									success: function () {
										console.log('owner set success');
									}
								});
							}
							//缓存保存物业信息
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
						}else{
							this.$refs.uToast.show({
								message:res.data.msg,
								position:'top',
								type:'error'
							})
						}
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
	
h3{
	font-weight: 500;
	padding: 60upx;
	padding-bottom: 120upx;
}
.u-form-item{
	margin-left: 50upx;
	margin-right: 50upx;
	margin-top: 20upx;
}
</style>

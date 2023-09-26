<template>
	<view>
		<u-cell-group>
		
			<u-cell icon="" title="修改密码" :isLink="true" url="/pages/login/re-password"></u-cell>
			<u-cell icon="" title="退出登录"  url="/pages/setting/setting" @click="logout"></u-cell>
			<u-toast ref="uToast"></u-toast>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			logout(){
				uni.clearStorage();
				this.$refs.uToast.show({
					message:'退出成功',
					position:'top',
					type:'success'
				})
			
			},
		}
	}
</script>

<style>

</style>

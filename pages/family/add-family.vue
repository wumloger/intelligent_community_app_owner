<template>
	<view class="container">
		<view class="title">
			<text>选择房屋</text>
		</view>
		<u-cell is-link="" :border="false" title="幸福苑小区1号楼1单元1204室" titleStyle="color:#A1A1A1;"></u-cell>
		<view class="title">
			<text>住户信息</text>
		</view>
		<u-input
		border="bottom"
		disabled
		disabledColor="#ffffff"
		>
		<template #prefix>
			<text>住户类型</text>
		</template>	
		<template #suffix>
			<view class="my_radio">
				<view class="radio" @click="radio_data = true" :class="radio_data == true ? 'checked' : '' ">
					家属
				</view>
				<view class="radio" @click="radio_data = false " :class="radio_data == false ? 'checked' : ''">
					租户
				</view>
			</view>
		</template>
		
		</u-input>
		<u-input
			placeholder="请输入您的姓名"
			border="bottom"
			placeholderStyle="color:black; text-align:right;"
			input-align="right"
			>
			<template #prefix>
				<text>您的姓名</text>
			</template>
		</u-input>
		<u-input
		border="bottom"
		disabled
		disabledColor="#ffffff"
		>
		<template #prefix>
			<text>性别</text>
		</template>	
		<template #suffix>
			<view class="my_radio">
				<view class="radio" @click="sex = true" :class="sex == true ? 'checked' : '' ">
					男
				</view>
				<view class="radio" @click="sex = false " :class="sex == false ? 'checked' : ''">
					女
				</view>
			</view>
		</template>
		
		</u-input>
		
		<u-input
			placeholder="请输入手机号"
			border="bottom"
			placeholderStyle="color:black; text-align:right;"
			input-align="right"
			>
			<template #prefix>
				<text>手机号</text>
			</template>
		</u-input>
		<u-input
			placeholder="请输入身份证号"
			border="bottom"
			placeholderStyle="color:black; text-align:right;"
			input-align="right"
			>
			<template #prefix>
				<text>身份证证件号(选填)</text>
			</template>
		</u-input>
		<view style="color: #14acff; text-align: right; padding: 20upx;">
			+住户信息
		</view>
		<view class="btn" style="width: 60%; margin: 0 auto;">
			<u-button type="primary" shape="circle" color="#14acff"> <text style="color: #ffffff;">邀请住户加入</text></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio_data:true,
				sex:true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	background-color: #f5f5f5;
	width: 100%;
	height: 100vh;
}
.title{
	padding: 20upx;
}
.u-cell{
	background-color: #ffffff;
	padding: 20upx;
}
.my_radio{
	display:flex;
	justify-content: space-between;
	width:200upx;
	height:70upx;
	.radio{
		width:48%;
		border: 1px solid #ddd;
		text-align: center;
		line-height: 70upx;
		border-radius: 10upx;
	}
	.checked{
		color:#51abff;
		border-color: #51abff;
	}
}
.u-input{
	background-color: #ffffff;
	height: 100upx;
}
</style>

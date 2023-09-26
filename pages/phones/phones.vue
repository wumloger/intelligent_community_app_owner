<template>
	<view class="container">
		<view class="top">
			
		</view>
		<view class="main">
			<view class="property_phones">
				<view style="padding: 20upx;color: #ffffff;">
					社区物业电话
				</view>
				<view class="phone" v-for="item in property_phones">
					<text>{{item.name}}</text>
					<text style="margin-left: 100upx;">
					{{item.phone}}
					</text>
					<image src="../../static/phone.png" mode=""></image>
				</view>
			</view>
			<view class="property_phones">
				<view style="padding: 20upx;">
					快递电话
				</view>
				<view class="phone" v-for="item in express_phone">
					<text>{{item.name}}</text>
					<text style="margin-left: 170upx;">
					{{item.phone}}
					</text>
					<image src="../../static/phone.png" mode=""></image>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				property_phones:[{
					name:'幸福苑小区物业',
					phone:'010-26584523'
				},
				{
					name:'1号楼管家电话',
					phone:'010-26584523'
				},
				{
					name:'2号楼管家电话',
					phone:'010-26584523'
				},
				{
					name:'3号楼管家电话',
					phone:'010-26584523'
				},
				{
					name:'4号楼管家电话',
					phone:'010-26584523'
				},
				],
				express_phone:[{
					name:'顺丰快递',
					phone:'400-8111111'
				},
				{
					name:'园通快递',
					phone:'021-69777888'
				},
				{
					name:'中通快递',
					phone:'400-8895543'
				},
				{
					name:'韵达快递',
					phone:'021-39207888'
				},
				{
					name:'EMS快递',
					phone:'10000'
				},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	position: relative;
}
.top{
	width: 100%;
	height: 250upx;
	border-radius:0 0 50% 50%;
	background-color: #409eff;
}
.phone{
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	padding: 20upx;
}
image{
	height: 50upx;
	width: 50upx;
}
.main{
	position: absolute;
	top:20upx;
	width: 94%;
	margin: 20upx;
}
</style>

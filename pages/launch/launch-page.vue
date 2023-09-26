<template>
	<view class="top" :style="{height:height}">
		
	</view>
	<view class="container">
		<u-popup :show="show" mode="center" @close="close" @open="open" :round="15" bgColor="#f0f8fa" :closeOnClickOverlay="flag">
		    <view class="t4">
		      <view class="t1"><text class="w1">温馨提示</text></view>
			  <hr>
			  <view class="t2">
				  <text class="w2">
					为了帮助您安全使用产品和服务，在您同意并授权基础上，我们可能会收集你的交易信息，位置信息，设备信息等。
					请你认证阅读<text class="w2" style="color: dodgerblue;" @click="toContract">《用户服务协议》</text>及<text class="w2" style="color: dodgerblue;" @click="toPrivacy">《隐私政策》</text>的全部条款。
					您同意并接受全部条款后，再开始使用我们的服务。
				  </text>
			  </view>
			  <hr>
			  <view class="t3">
				<text @click="toBack" style="font-size: 14px; font-weight: bold;">不同意</text>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				
				<text @click="toIndex" style="font-size: 14px; font-weight: bold;color: dodgerblue;">同意并继续</text>
			  </view>
				
			</view>
		</u-popup>
	</view>

</template>
<script>
  export default {
    data() {
      return {
        show: true,
		flag:false,
		height:''
		
      }
    },
	onShow() {
		this.height = uni.getSystemInfoSync().statusBarHeight + 'px'
	},
    methods: {
      open() {
        // console.log('open');
      },
      close() {
        this.show = false
        // console.log('close');
      },
	  toIndex(){
		  uni.switchTab({
		  	url:'/pages/tarbar/index/index'
		  })
	  },
	  toBack(){
		plus.runtime.quit();
	  },
	  toContract(){
		  uni.navigateTo({
		  	url:'/pages/contract/contract'
		  })
	  },
	  toPrivacy(){
		  uni.navigateTo({
		  	url: '/pages/contract/privacy'
		  })
	  }
    }
  }
</script>
<style>
	.container{
		width: 100%;
		height: 100vh;
		background-image: url('../../static/img/launch/openpage.png');
		background-repeat: no-repeat;
		background-size: 100% 100vh;
		background-position: center;
	}
	.t1{
		padding: 2px 0;
		margin-top: 35upx;
	}
	.t2{
		font-family: "宋体";
		padding: 0 25px;
		margin-top: 10px;
		margin-bottom: 40rpx;
	}
	.t4{
		width: 600upx;
	}
	.w1{
		font-weight: bold;
		position: relative;
		left: 35%;
		font-size: 18px;
		
	}
	.w2{
		font-size: 30upx;
		font-weight: bold;
		line-height: 28px;
	}
	.t3{
		margin: 15px 50px;
	}
</style>
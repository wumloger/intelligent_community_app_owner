<template>
  <view>
    <!-- 内容区域 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      height: '50px', // 初始化状态栏高度为空字符串
    };
  },
  mounted() {
    // 在组件加载完成后获取状态栏高度并保存到 data 中
    // this.height = uni.getSystemInfoSync().statusBarHeight + 'px';
	console.log(this.height);
  },
};
</script>

<style>
view {
	height: 50px;
}
</style>

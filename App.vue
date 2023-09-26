<script>
// import {getMac} from '@/util/mac.js'
export default {
	onLaunch: function() {
		// console.log('App Launch');
		// uni.setStorageSync("mac",getMac())
	
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import "@/uni_modules/uview-plus/index.scss";
/*每个页面公共css */ 
*{
	box-sizing: border-box;
}
/* tarbar的样式*/

.uni-tarbar{
	position: relative;
}

.uni-tabbar__item:nth-child(4){
	border-radius: 50%;
	background-size: 60upx;
	background-repeat: no-repeat;
	background-position: 46% 46%;
	box-shadow:0upx 0upx 10upx 1upx #8a8a8a;
	background-color: #dedede;
	flex:0.65;
	width: 100upx;
	position: absolute;
	left: 50%;
	transform: translate(-50%);
	bottom: 40%;
}
.uni-tabbar__item:nth-child(3){
	margin-right: 50upx;
}
.uni-tabbar__item:nth-child(5){
	margin-left: 50upx;
}

/* 公共文本样式的样式*/
text{
	font-family: '微软雅黑';
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	color: #666666;
}

/* 常用样式封装*/
.text-center{
	text-align: center;
}

.pt-10{
	padding-top: 10upx;
}
.pt-20{
	padding-top: 20upx;
}


.pb-10{
	padding-bottom: 10upx;
}






.text-primary{
	color:#14acff;
}

</style>

<template>
	<view class="container">
		<view class="top" style="height: 20upx;background-color: #f5f5f5;">
		</view>
		<view class="number">
			<view class="title" style="color: #ffffff; font-size: 40upx; font-weight: 700;text-align: center;padding: 20upx;">
				请输入真实有效的车牌号
			</view>
			<view class="no_input" style="display: flex;justify-content: center;" @click="keyboard_show = true">
				<view>{{number_array[0]}}</view>
				<view>{{number_array[1]}}</view>
				<view>{{number_array[2]}}</view>
				<view>{{number_array[3]}}</view>
				<view>{{number_array[4]}}</view>
				<view>{{number_array[5]}}</view>
				<view>{{number_array[6]}}</view>
				<view>{{number_array[7]}}</view>
			</view>
			<u-keyboard 
			ref="uKeyboard" 
			mode="car" 
			:show="keyboard_show" 
			overlay=false 
			@cancel="keyboard_show = false" 
			@change="keyboard_change"
			@confirm="keyboard_confirm"
			@backspace="backspace"
			></u-keyboard>
		</view>
		<view class="car_info" style="padding: 20upx;">
			
			<u-form :model="formData">
				<u-form-item>
					<u-input
						placeholder="车辆品牌"
						border="bottom"
						placeholderStyle="color:black; text-align:right;"
						v-model="formData.brand">
						<template #prefix>
							<text>车辆品牌</text>
						</template>
					</u-input>  
				</u-form-item>
				<u-form-item>
					<u-input
						placeholder="请输入车辆型号"
						border="bottom"
						placeholderStyle="color:black; text-align:right;"
						v-model="formData.type">
						<template #prefix>
							<text>车辆型号</text>
						</template>
					</u-input>  
				</u-form-item>
				<u-form-item>
					<u-input
						placeholder="请输入车辆颜色"
						border="bottom"
						placeholderStyle="color:black; text-align:right;"
						v-model="formData.color">
						<template #prefix>
							<text>车辆颜色</text>
						</template>
					</u-input>  
				</u-form-item>
				<u-form-item>
					<u-input
						:placeholder="formData.deadline"
						border="bottom"
						placeholderStyle="color:black; text-align:right;"
						disabledColor="#ffffff"
						disabled
						@click="show1 = true">
						<template #prefix>
							<text>车辆保险截止日期</text>
						</template>
					</u-input>
					 
				</u-form-item>
				<u-form-item>
					<u-input
						:placeholder="formData.examineTime"
						border="bottom"
						placeholderStyle="color:black; text-align:right;"
						disabledColor="#ffffff"
						disabled
						@click="show2 = true">
						<template #prefix>
							<text>年审日期</text>
						</template>
					</u-input>  
				</u-form-item>
			</u-form>
		</view>
		<view  style="display: flex;justify-content: center; background-color: #f5f5f5; margin-top: 50upx;">
			<view class="submit" style="width: 50%;">
				<u-button type="primary" shape="circle" color="#14acff" @click="submit"><text style="color:#ffffff;">提交审核</text></u-button>
			</view>
		</view>
		 <u-datetime-picker
		                :show="show1"
		                @confirm="confirm1"
		                mode="date"
						@cancel="show1 = false"
		        ></u-datetime-picker>
		 <u-datetime-picker
		                :show="show2"
		                @confirm="confirm2"
		                mode="date"
						@cancel="show2 = false"
		        ></u-datetime-picker>				
	</view>
	<u-toast ref="uToast"></u-toast>
</template>

<script>
	import {addCar } from '@/api/park.js'
	import {formatDate} from '@/util/common.js'
import datetimePicker from '../../uni_modules/uview-plus/libs/config/props/datetimePicker'
	export default {
		data() {
			return {
				keyboard_show:false,
				number:'',
				number_array:[],
				i:-1,
				show1:false,
				show2:false,
				formData:{
					owner_id:'',
					number:'',
					brand:'',
					type:'',
					color:'',
					deadline:'0000 年 00 月 00 日',
					examineTime:'0000 年 00 月 00 日'
				},
				
			}
		},
		methods: {
			
			//车牌键盘相关方法
			keyboard_change(val){
				this.i++
				this.number_array[this.i] = val
				
				if(this.i > 7){
					this.i = 7
				}
			},
			keyboard_confirm(){
				for (let i = 0; i < this.number_array.length; i++) {
					this.formData.number +=this.number_array[i]
				}
				this.keyboard_show = false
				console.log(this.number);
			},
			backspace() {
				// 删除value的最后一个字符
				
				this.number_array[this.i] = ''
				this.i--;
				for (let i = 0; i < this.number_array.length; i++) {
					this.formData.number +=this.number_array[i]
				}
				if(this.i<-1){
					this.i=-1
				}
			},
			
			//日期选择方法
			confirm1(e){
				const data = new Date(e.value)
				this.formData.deadline = formatDate(data,'yyyy年MM月dd日')
				this.show1 = false
			},
			confirm2(e){
				const data = new Date(e.value)
				this.formData.examineTime = formatDate(data,'yyyy年MM月dd日')
				this.show2 = false
			},
			
			//提交信息
			submit(){
				const owner_id = uni.getStorageSync('owner').id
				this.formData.ownerId = owner_id
				if(this.formData.number != ''){
					addCar(this.formData).then((res)=>{
						console.log(res);
						if(res.data.code === 0){
							this.$refs.uToast.show({
								message:'添加成功',
								position:'top',
								type:'success',
							})
						}else{
							this.$refs.uToast.show({
								message:'添加失败:' + res.msg, 
								position:'top',
								type:'error'
							})
						}
					})
				}else{
					this.$refs.uToast.show({
						message:'车牌号不能为空', 
						position:'top',
						type:'warning'
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100%;
	min-height: 100vh;
	background-color: #f5f5f5;
}
.number{
	height: 230upx;
	width: 99%;
	background-color: #409eff;
	margin: 3upx;
	.no_input{
		view{
			width: 60upx;
			height: 60upx;
			background-color: white;
			margin-right: 10upx;
			text-align: center;
			line-height: 60upx;
		}
	}
	
}
.car_info{
	margin-top: 20upx;
	background-color: #ffffff;
	width: 100%;
	.u-form{
		width: 100%;
	}
	
}
</style>

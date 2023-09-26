<template>
	<view class="container">
		<view style="padding: 20upx;">
			报修信息
		</view>
		<u-cell v-if="type == 1" is-link="" title="报修类别" value="公共报修" rightIconStyle="color:#000; font-size:30upx;">
		</u-cell>
		<u-cell v-else is-link="" title="报修类别" value="个人报修" rightIconStyle="color:#000; font-size:30upx;">
		</u-cell>
		
		<u-cell is-link="" title="报修类型" value="路灯" rightIconStyle="color:#000; font-size:30upx;">
		</u-cell>
		<u-cell is-link="" title="报修小区" value="幸福苑小区1号楼1单元2032" rightIconStyle="color:#000; font-size:30upx;">
		</u-cell>
		<view style="padding: 20upx;">
			报修内容
		</view>
		<view style="background-color: #ffffff; padding: 20upx; padding-bottom: 60upx;">
			<u-textarea v-model="content" placeholder="请写下详细报修内容,有助于工作人员快速帮您解决问题" height="300"></u-textarea>
			<view style="display: flex; width: 100%; justify-content: space-around; margin-top: 20upx;">
				<u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="1"	
				>
				<image src="@/static/img/upload.png" 
				mode="widthFix" style="width: 200upx; height: 200upx; border-radius: 10upx;"></image>
				</u-upload>
				<u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="1"	
				>
				<image src="@/static/img/upload.png" 
				mode="widthFix" style="width: 200upx; height: 200upx; border-radius: 10upx;"></image>
				</u-upload>
				<u-upload
					:fileList="fileList1"
					@afterRead="afterRead"
					@delete="deletePic"
					name="1"
					multiple
					:maxCount="1"	
				>
				<image src="@/static/img/upload.png" 
				mode="widthFix" style="width: 200upx; height: 200upx; border-radius: 10upx;"></image>
				</u-upload>
			</view>
		
		</view>
		<view style="width: 60%; margin: 40upx auto;">
			<u-button type="primary" shape="circle" @click="submit">
				<text style="color: #ffffff;">提交审核</text>
			</u-button>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				content:'',
				fileList1:[],
				fileList2:[],
				fileList3:[],
			}
		},
		methods: {
			submit(){
				this.$refs.uToast.show({
					message:'提交成功',
					position:'top',
					type:'success'
				})
			}
		},
		onLoad(option) {
			this.type = option.type
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width:100%;
	min-height: 100vh;
	background-color: #f5f5f5;
	
}
.u-cell{
	background-color: #ffffff;
	
}
</style>

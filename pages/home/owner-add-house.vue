<template>
	<view class="container">
		<view class="house_choose">
			选择房屋
		</view>
		<u-cell-group border=false>
			<u-cell  title="小区" right-icon-style="font-size:40upx;" :value="community_name" is-link @click="community_show = true"></u-cell>
			<u-cell  title="楼栋" right-icon-style="font-size:40upx;" :value="building_name" is-link @click="building_show = true"></u-cell>
			<u-cell  title="单元" right-icon-style="font-size:40upx;" :value="unit_name" is-link @click="unit_show = true"></u-cell>
			<u-cell  title="房间号" right-icon-style="font-size:40upx;" :value="room_name" is-link @click="room_show = true"></u-cell>
		</u-cell-group>
		<view class="house_info">
			住户信息
		</view>
		<u-form :mode="formData">
			<u-form-item>
				<u-input 
				placeholder="请输入您的姓名"
				border="bottom"
				placeholderStyle="color:black; text-align:right;"
				v-model="formData.name">
				<template #prefix>
					<text>您的姓名</text>
				</template>
			</u-input>
			</u-form-item>
			<u-from-item>
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
						<view class="male" @click="radio_data = true" :class="radio_data == true ? 'checked' : '' ">
							男
						</view>
						<view class="female" @click="radio_data = false " :class="radio_data == false ? 'checked' : ''">
							女
						</view>
					</view>
				</template>
				
				</u-input>
			</u-from-item>
			<u-form-item>
				<u-input 
				placeholder="请输入手机号"
				border="bottom"
				placeholderStyle="color:black; text-align:right;"
				v-model="formData.phone">
				<template #prefix>
					<text>手机号</text>
				</template>
			</u-input>
			</u-form-item>
			<u-form-item>
				<u-input 
				placeholder="请输入身份证号"
				border="bottom"
				placeholderStyle="color:black; text-align:right;"
				v-model="formData.idCard">
				<template #prefix>
					<text>身份证证件号</text>
				</template>
			</u-input>
			</u-form-item>
				<u-row>
					<u-col span="12">
							<text class="u-demo-block__title">上传证件照片</text>
					</u-col>
				</u-row>
				<u-row justify="between">
					<u-col span="5.5">
						<u-upload
						:fileList="fileList1"
						@afterRead="afterRead"
						@delete="deletePic"
						name="1"
						multiple
						:maxCount="1"
						deletable = true
						imageMode
						width="300rpx"
						height="200rpx"
						:previewFullImage="true"
						>
							<image src="@/static/img/home/back.png" 
							mode="widthFix" style="width: 300rpx;height: 200rpx;"></image>
						</u-upload>
					</u-col>
					<u-col span="5.5">
						<u-upload
							:fileList="fileList2"
							@afterRead="afterRead"
							@delete="deletePic"
							name="2"
							multiple
							:maxCount="1"
							deletable = true
							imageMode
							width="300rpx"
							height="200rpx"
							:previewFullImage="true"
						>
							<image src="@/static/img/home/main.png" 
							mode="widthFix" style="width: 300rpx;height: 200rpx;"></image>
						</u-upload>
					</u-col>
				</u-row>
				<u-row justify="center" style="margin-top: 50upx;">
					<u-col span="8">
						<u-button type="primary" shape="circle" @click="submit"><text style="color: #ffffff;" >提交审核</text></u-button>
					</u-col>
				</u-row>
				
		</u-form>
		<u-picker :show="community_show" :columns="community_columns" @cancel="cancel1"  @confirm="changeHandler1" keyName="communityName"></u-picker>
		<u-picker :show="building_show" :columns="building_columns" @cancel="cancel2"  @confirm="changeHandler2" keyName="buildingName"></u-picker>
		<u-picker :show="unit_show" :columns="unit_columns" @cancel="cancel3" @confirm="changeHandler3"></u-picker>
		<u-picker :show="room_show" :columns="room_columns" @cancel="cancel4"  @confirm="changeHandler4" keyName="roomName"></u-picker>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import {HouseList,AddHouse} from '@/api/home.js'
	
	export default {
		data() {
			return {
				formData:{
					name:'',
					phone:'',
					idCard:'',
				
				},
				radio_data:true,
				//true 为男,false为女
				fileList1:[],
				fileList2:[],
				//picker控制
				community_show:false,
				building_show:false,
				unit_show:false,
				room_show:false,
				//picker数据
				community_columns:[[]],
				building_columns:[[]],
				unit_columns:[["1单元","2单元"]],
				room_columns:[[]],
				community_name:'请选择小区',
				building_name:'请选择楼栋',
				unit_name:'请选择单元',
				room_name:'请选择房间号',
				selected_building:{},
				//请求的对象数据
				require:{}
			}
		},
		methods: {
			getOwnerId(){
				return uni.getStorageSync('owner').id
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					console.log(result);
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '上传成功',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'https://api.superbed.cn/upload?token=&categories=idCard&filename=' + new Date().getMilliseconds(), // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
						
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			changeHandler1(e){
				this.building_name = '请选择楼栋'
				this.unit_name = '请选择单元'
				this.room_name = '请选择房间号'
				this.community_name = e.value[0].communityName
				this.require.communityId = e.value[0].communityId
				this.building_columns[0] = e.value[0].buildings
				this.community_show = false
			},
			cancel1(){
				this.community_show = false
			},
			changeHandler2(e){
				this.unit_name = '请选择单元'
				this.room_name = '请选择房间号'
				this.building_name = e.value[0].buildingName
				this.require.buildingId = e.value[0].buildingId
				this.selected_building = e.value[0]
				console.log(this.selected_building.rooms);
				this.building_show = false
			},
			cancel2(){
				this.building_show = false
			},
			changeHandler3(e){
				this.room_name = '请选择房间号'
				this.unit_name = e.value[0]
				this.room_columns[0] = this.selected_building.rooms.filter(item=>e.value[0] == item.unit+'单元')
				this.require.unit = e.value[0] == '1单元'? 1:2
				this.unit_show = false
			},
			cancel3(){
				this.unit_show = false
			},
			changeHandler4(e){
				this.room_name = e.value[0].roomName
				this.require.roomNo = e.value[0].roomName
				this.room_show = false
			},
			cancel4(){
				this.room_show = false
			},
			submit(){
				this.require.name = this.formData.name
				this.require.gender = this.radio_data == true ? 0 : 1
				this.require.phone = this.formData.phone
				this.require.identityCard = this.formData.idCard
				this.require.status = 0
				this.require.ownerId = uni.getStorageSync('owner').id
				AddHouse(this.require).then((res)=>{
					console.log(res);
					if(res.data.code == 0){
						this.$refs.uToast.show({
							message:'提交成功',
							type:'success',
							position:'top'
						})
					}else{
						this.$refs.uToast.show({
							message:'提交失败:' + res.data.msg,
							type:'error',
							position:'top'
						})
					}
				}).catch((err)=>{
					this.$refs.uToast.show({
						message:'服务器错误',
						type:'error',
						position:'top'
					})
				})
			}
		},
		onShow(){
			const owner_id = this.getOwnerId()
			HouseList(owner_id,0).then((res)=>{
				
				if(res.data.code === 0){
					console.log(res);
					//获取到值
					this.community_columns[0] = res.data.data
					
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
.container{
	min-height: 100vh;
	width:100%;
	background-color: #f5f5f5;
}
.u-cell-group{
	background-color: #ffffff;
	
}
.house_choose,.house_info{
	padding: 30upx;
}
.u-form{
	background-color: #ffffff;
	.u-row{
		padding:20upx;
	}
}
.my_radio{
	display:flex;
	justify-content: space-between;
	width:200upx;
	height:70upx;
	.male,.female{
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

</style>

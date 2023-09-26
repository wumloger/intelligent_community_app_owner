//界面跳转方法
			//我的房屋
export function toHome(){
				uni.navigateTo({
					url:'/pages/home/home'
				})
			}
			//邀请访客
export function	toInvitor(){
				uni.navigateTo({
					url:'/pages/invitor/invitor'
				})
			}
			//手机开门
export function	toOpen(){
			uni.switchTab({
				url:'/pages/tarbar/open/open'
			})
			}
			//手机缴费
export function	toPay(){
				uni.navigateTo({
					url:'/pages/pay/pay'
				})
			}
			//我的车位
export function	toPark(){
				uni.navigateTo({
					url:'/pages/park/park'
				})
			}
			//在线报修
export function	toFix(){
				uni.navigateTo({
					url:'/pages/fix/fix'
				})
			}
			//投诉建议
export function	toAdvice(){
				uni.navigateTo({
					url:'/pages/advice/advice'
				})
			}
			//社区公告
export function	toNotice(){
				uni.navigateTo({
					url:'/pages/notice/notice'
				})
			}
			//联系物业
export function	toPhones(){
	uni.navigateTo({
			url:'/pages/phones/phones'
	})
}
			//更多
export function toServer(){
	uni.switchTab({
		url:'/pages/tarbar/server/server'
	})
}			
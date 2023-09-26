	//校验电话号码是否正确函数
	export function validatePhone(phone) {
	  const regExp = /^1[3456789]\d{9}$/;
	  return regExp.test(phone);
	}
	
	//封装toast组件
	export function toast(message,type){
		this.$refs.uToast.show({
			loading:false,
			message,
			position:'top',
			type
		})
	}

//时间过滤器	
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
   fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
   'M+': date.getMonth() + 1,
   'd+': date.getDate(),
   'h+': date.getHours(),
   'm+': date.getMinutes(),
   's+': date.getSeconds()
  };
  for (let k in o) {
   if (new RegExp(`(${k})`).test(fmt)) {
    let str = o[k] + '';
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
   }
  }
  return fmt;
 };

 

 function padLeftZero (str) {

  return ('00' + str).substr(str.length);

 };
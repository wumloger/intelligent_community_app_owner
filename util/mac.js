// export function getMac(){
// 	     //获取mac地址----可在App.vue页面的onLaunch里面直接运行，初始化获取到。
// 	                var net = plus.android.importClass("java.net.NetworkInterface")
// 	                var wl0 = net.getByName('wlan0')  
// 	                var macByte = wl0.getHardwareAddress()  
// 	                var str = ''  
	                
// 	                for (var i = 0; i < macByte.length; i++) {  
// 	                    var tmp = "";  
// 	                    var num = macByte[i];  
// 	                    if (num < 0) {        
// 	                      tmp =(255+num+1).toString(16);  
// 	                    } else {  
// 	                      tmp = num.toString(16);  
// 	                    }  
// 	                    if (tmp.length == 1) {  
// 	                      tmp = "0" + tmp;  
// 	                    }  
// 	                    str += tmp;  
// 	                }  
// 					return str;
// }
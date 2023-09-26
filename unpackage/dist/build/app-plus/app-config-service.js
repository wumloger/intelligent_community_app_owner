
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#ffffff","navigationBar":{"backgroundColor":"#ffffff","titleText":"智慧生活","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"weex","flex-direction":"column"},"renderer":"auto","appname":"智慧社区","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.8.4","entryPagePath":"pages/launch/launch-page","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#8F8F94","selectedColor":"#72a1e3","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"pagePath":"pages/tarbar/index/index","iconPath":"/static/img/tabbar/index/home1.png","selectedIconPath":"/static/img/tabbar/index/home2.png","text":"首页"},{"pagePath":"pages/tarbar/server/server","iconPath":"/static/img/tabbar/server/fuwu1.png","selectedIconPath":"/static/img/tabbar/server/fuwu2.png","text":"服务"},{"pagePath":"pages/tarbar/open/open","iconPath":"/static/img/tabbar/open/yuechi1.png","selectedIconPath":"/static/img/tabbar/open/yuechi2.png","text":"开门"},{"pagePath":"pages/tarbar/message/message","iconPath":"/static/img/tabbar/message/xiaoxi1.png","selectedIconPath":"/static/img/tabbar/message/xiaoxi2.png","text":"消息"},{"pagePath":"pages/tarbar/me/me","iconPath":"/static/img/tabbar/me/wode1.png","selectedIconPath":"/static/img/tabbar/me/wode2.png","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/launch/launch-page","meta":{"isQuit":true,"isEntry":true,"enablePullDownRefresh":false,"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/tarbar/index/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"enablePullDownRefresh":false,"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/tarbar/server/server","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"navigationBar":{"titleText":"物业服务","type":"default"},"isNVue":false}},{"path":"pages/tarbar/open/open","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"titleText":"手机开门","type":"default"},"isNVue":false}},{"path":"pages/tarbar/message/message","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"navigationBar":{"titleText":"消息中心","type":"default"},"isNVue":false}},{"path":"pages/tarbar/me/me","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":4,"enablePullDownRefresh":true,"navigationBar":{"titleText":"","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/login/loginByPassword","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/contract/contract","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"用户协议","type":"default"},"isNVue":false}},{"path":"pages/contract/privacy","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"隐私政策","type":"default"},"isNVue":false}},{"path":"pages/login/enter-code","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"验证码","type":"default"},"isNVue":false}},{"path":"pages/login/re-password","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"找回密码","type":"default"},"isNVue":false}},{"path":"pages/home/home","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的房屋","type":"default"},"isNVue":false}},{"path":"pages/invitor/invitor","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"访客邀请","type":"default"},"isNVue":false}},{"path":"pages/pay/pay","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"生活缴费","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/park/park","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的车位","type":"default"},"isNVue":false}},{"path":"pages/fix/fix","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"在线报修","type":"default"},"isNVue":false}},{"path":"pages/advice/advice","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/notice/notice","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/phones/phones","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"物业电话","type":"default"},"isNVue":false}},{"path":"pages/family/family","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"家庭成员","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/invitor/myInvitor","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的访客","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/setting/setting","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/tarbar/index/activity","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"社区活动","type":"default"},"isNVue":false}},{"path":"pages/tarbar/message/msg-detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"公告详情","type":"default"},"isNVue":false}},{"path":"pages/invitor/openHistory","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"开门记录","type":"default"},"isNVue":false}},{"path":"pages/home/owner-add-house","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"添加房屋","type":"default"},"isNVue":false}},{"path":"pages/home/user-add-house","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"加入房屋","type":"default"},"isNVue":false}},{"path":"pages/pay/bill-detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"backgroundColor":"#409eff","titleText":"账单详情","type":"default","titleColor":"#ffffff"},"isNVue":false}},{"path":"pages/pay/pay-history","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"缴费记录","type":"default"},"isNVue":false}},{"path":"pages/pay/pay-detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/park/my-car","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的车辆","type":"default"},"isNVue":false}},{"path":"pages/park/add-car","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"添加车辆","type":"default"},"isNVue":false}},{"path":"pages/park/add-park","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"添加车位","type":"default"},"isNVue":false}},{"path":"pages/park/bind-car","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"绑定车辆","type":"default"},"isNVue":false}},{"path":"pages/fix/fix-detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"报修详情","type":"default"},"isNVue":false}},{"path":"pages/fix/fix-form","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"添加报修","type":"default"},"isNVue":false}},{"path":"pages/family/add-family","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"绑定家属/租客","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  
## 微信接入
#### 概述
>微信公众平台开发设计的业务较多，而萌点涉及到用户身份，jsapi调用，支付这几个场景。  
>几个基本概念：  

* AppID 应用id
* APPSecret 应用密钥
* openId 用户唯一身份（同一个用户在不同的应用内openId也不同）
* access_token 公众号全局唯一票据
* jsapi_ticket 公众号调用微信js接口临时票据

#### 接入
**1. 填写授权域名**  
m.weimob.com  
**2. 填写js接口安全域名**  
m.weimob.com, stc.vd.weimob.com, m.vd.cn  
**3. 获取用户身份(网页授权的方式)**  
a) 请求地址:"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+config.weichat.AppID+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_base&state=123#wechat_redirect"  
b) 微信重定向地址:redirect_uri，并且在url中添加code参数  
c) 服务端请求地址: "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+args.AppID+"&secret="+args.AppSecret+"&code="+args.CODE+"&grant_type=authorization_code" 获取access_token, openId  
d) 根据access_token ,openId 调用微信相应的api获取信息  
#### 微信jsapi
微信jsapi赋予js调用app某些功能的能力，包括分享，支付，获取用户网络信息，原生方式预览图片，文件上传  
jsapi使用前需要初始化响应的配置信息  
**1. 引用微信jssdk**  

```
< script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>  
```

**2. 初始化配置信息**  

```
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: '', // 必填，公众号的唯一标识
    timestamp: , // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
```

**3. 服务端配置signature签名**  

```
var url = [req.protocol, "://", req.hostname, req.originalUrl].join("");
wechat.initJsTicket(url, function(err, result){
    if(err){

    }else{
        res.locals.config.wxConfig= result;
    }
});
```
所有需要调用jsapi的地方<span style="color:#f00;">均需</span>要调用wechat.initJsTicket方法，该方法是util/wechat.js对微信签名算法的封装

#### 微信分享
微信分享包括朋友圈和好友两种渠道
相应的配置信息如下，开发者无需关心微信具体实现  

```
APP.wxShare = {
	status: true,
	//分享到朋友圈
	timeline:{
		title: '',
		link: '',
		imgUrl: ''
	},
	//分享给好友
	appMessage:{
		title: '',
		desc: '',
		link: '',
		imgUrl: ''
	}
};
```
APP.wxShare.status 为true时，表示该页面可以进行微信分享  


#### 微信支付
**1. 公众号平台配置支付授权目录**  
http://m.weimob.com/buyer/order/  
http://m.weimob.com/buyer/order/check/  
http://m.weimob.com/buyer/order/list/
**2. 发起支付请求**  

```
wx.chooseWXPay({
    timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    nonceStr: '', // 支付签名随机串，不长于 32 位
    package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
    signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    paySign: '', // 支付签名
    success: function (res) {
        // 支付成功后的回调函数
    }
});
```
支付请求参数由服务端处理，在此不详细赘述。
#### 注意事项
微信分享是指微信中的页面分享到微信中（朋友圈or好友）
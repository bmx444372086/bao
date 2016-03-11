## 萌店node config  
#### 概述
>萌店项目运行需要一些配置信息。为了方便管理，这些信息统一写在config文件中。  
#### config.js  
config.js 中并没有具体的配置信息，而是根据环境变量动态加载具体的配置文件  

```
var config = {},
	NODE_ENV = process.env.NODE_ENV;
if("development" === NODE_ENV){
	config = require('./config_development');
}else if("pl" === NODE_ENV){
	config = require('./config_pl');
}else if("production" === NODE_ENV){
	config = require('./config_production');
}else if("qa" === NODE_ENV){
	config = require('./config_qa');
}else{
	config = require('./config_development');
	NODE_ENV= "development";
}
```
#### config  

```
var config = {
	port:5000,
	api:{
		"host":"mapi.dev.vd.cn",
		"port":80
	},
	//海燕 环信接口地址
	im:{
		"host":"121.43.197.98",
		"port":7074,
		"appKey": "dwm716#weiim"
	},
	//海燕
	coupon: {
		"host": "120.55.126.2",
		"port": "8888",
		"api": {
			"addCouponWithPhone": "/main-api/publishCardByCode"
		},
		"cusNo": "2147483640" //商户号
	},
	//促销专题接口
	promotion:{
		//"host":"10.252.218.121",
		"host":"112.124.28.82",
		"port":6005
	},
	wx:{
		
	},
	qqLbs:{
		"host":"apis.map.qq.com",
		"key": "AIEBZ-OPRHV-7MHPE-UC4QN-CC2BO-BIBNQ"
	},
	weichat:{
		aid: "622",
	  	AppID: "wx726413b361dff8af", //weimob013
      	AppSecret: "a08c60223e9cd416e3dc49da9e14cd89"
	},
	//旺铺接口
	wp:{
		wechatUc:{
			host:"112.124.16.233",
			port:11111
		},
		wechatToken:{
			host:"kf.weimob.com",
			port:"",
			path:"/PublicWebService/PublicWebService.asmx/GetAccessToken?sAppId={AppID}&sSecret={AppSecret}&IsRefresh={IsRefresh}"
		}
	},
	defaultShop: {
		vid: "21276"
	},
	db:{
		COOKIE_SECRET: 'cloudMall',
		DB: 'cloudMall_dev',
		PORT:'11211',
		USERNAME: 'memcached',
		PASSWORD: '',
		HOST: '121.43.196.204'
	},
	//统计
	statistics:{
		host: "112.124.11.130",
		port: 80
	},
	share: {
		url: "http://yunjie.vd.cn"
	},
	lama:{
		host:"112.124.11.130",
		port:7070
	},
	monitor: {
		host: "112.124.8.195",
		port: 8087
	},
	soaProxy: {
		host: "112.124.8.195",
		port: 8087
	},
	walletQQ: {
		appId: '101270804',
        appKey: '9ba370474f3ca2676e2328e33958a86b',
        business: 1,
        cardId: 'cSchdWx9fJmLt1r-DiahQp1zcH-DyUyw',
        qcAdmin: '3550177076215664636764'
	},
	recommend: {
		//host: "10.47.54.90",
		host: "120.27.162.234",
		host2: "120.27.162.234",
		port: 10000,
		port2: 8879
	},
	domain: "http://yunjie.vd.cn"
};
```
这是萌店dev的配置，常用的配置包括端口，接口IP地址，开发的appkey  

* port 程序端口
* api 萌店的数据的基本接口地址（光绪组）
* im 客服接口的配置（海燕组）
* coupon 优惠券接口配置（海燕组，纸质优惠券）
* promotion 促销接口（振国组）
* wx 微信配置
* qqLbs qq地图接入的配置
* weichat 萌店公众号的开发者配置信息
* wp 公众号的用户信息和token获取的接口（苏阳组）
* defaultShop 默认店铺
* db ocs的接口地址和配置
* statistics 统计接口地址（张伟组）
* share 分享域名配置
* lama 辣妈数据接口
* monitor 性能监控接口（茂森组）
* walletQQ qq接入配置&qq红包的配置
* soaProxy 萌店java业务接入（茂森组，促销&团购信息）
* recommend 萌店推荐接口（皓萍组）

#### 注意事项   
config中的值是只读形式，不允许动态改变和删除  
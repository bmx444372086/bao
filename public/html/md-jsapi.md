## 萌店jsapi

#### 概述
>萌店app采用hybrid的形式，一些活动页面是h5的实现，为了方便h5与nativeapp的交互而定义了jsapi[^1]  

[^1]: touchApp-cmd.js  

#### 常用方法  

```
var touchApp= require("js_cmd/touchApp-cmd"),	
	TA= new touchApp();
``` 
1.获取app环境信息  

 ```
 TA.getEnvironment(function(result){
 	var appType= result.appType,
 		appVersion= result.appVersion,
 		enviroment= result.enviroment,
 		deviceId= result.deviceId;
 });
 ```
2.获取用户信息  

``` 
TA.getUserInfo(function(result){
	var mobile= userInfo.mobile,
        uuid= userInfo.uuid,
        shop_id= userInfo.shop_id,
        wid= userInfo.wid,
        token= userInfo.token;
});
```
3.条转原生appview  
 
``` 
//跳转到商品详情
var args = {
    destClassName: TA.NativeView.GoodsDetail,
    segue: {
        wp_goods_id: "100512716_66644",
             aid: "100512716"
        }
    };
TA.jump(args);

//跳转到登录
var args = {
	destClassName: TA.NativeView.LoginPage
};
TA.jump(args);

//跳转新的web页面（url_new），并隐藏分享&更多按钮
var args=  {
    destClassName: TA.NativeView.WebView,
       segue: {
           web: {
                url: url_new,
                hideShareBtn: true,
                hideMoreBtn: true
           }
       }
   };
TA.jump(args);
```
4.返回  
 
``` 
TA.back();
```
5.返回app主页 
 
``` 
TA.gotoMainPage("0");
```
6.隐藏title栏  

``` 
TA.hideTitleBar();
``` 
7.剪贴板  
 
``` 
var args= {};//  参数信息不完整，具体请查阅文档
TA.clipBoard(args);
```
8.分享  
 
``` 
var args= {
	weixin: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    timeline: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    weibo: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    qzone: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    qq: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    qweibo: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
    },
    yixin: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
   },
   ytimeline: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
   },
   renren: {
       title: title,
       desc: desc,
       link: locHref,
       imgUrl: imgUrl
   },
   message: {
       title: title,
       desc: '【'+title+'】'+desc,
       link: locHref,
       imgUrl: imgUrl
   },
   copy: {
       title: title,
       desc: '【'+title+'】'+desc,
       link: locHref,
       imgUrl: imgUrl
   },
   qrcode: {
       title: '萌店辣妈创业赛人气大比拼',
       desc: '扫描或长按下面二维码直接投票',
       link: locHref,
       imgUrl: imgUrl
   }
};
TA.toShare(args);
```
9.新的分享（自定义二维码页面）  

``` 
//新的二维码渠道greenqrcode ,自定义二维码页面地址
args.greenqrcode= args.qrcode= {
	title: "萌店辣妈创业赛人气大比拼",
    desc: "扫描或长按下面二维码直接投票",
    link: “/vd/xxx/qrcode?a=xxx&b=xxx&url=qrcodeValue”,
    imgUrl: imgUrl,
    globalPageSegue: {
        destClassName: TA.NativeView.QRcode
    } 
}
TA.toShareInvite(args);
```
10.新增app提醒  

```
var args = {
    notificationType: 1,
    notificationList: [{
        notifyTag: id,
        timeStamp: {
            startTimeStamp: APP.scenes[curScene].stime,
            endTimeStamp: APP.scenes[curScene].etime
        },
        globalPageSegue: {
            destClassName: TA.NativeView.GoodsDetail,
            segue: {
                wp_goods_id: id,
                aid: aid,
                topic: "kill"
            }
       }
   }]
};
TA.addAlarmList(args);
```
 
11.获取提醒信息  

```
TA.getAlarmList(1, function (list) {
	//
});

```
12.删除提醒信息  
 
```
var args= {};//  参数信息不完整，具体请查阅文档
TA.addAlarmList(args);

```

#### 注意事项
类似jQuery.ready 方法 touchApp也实现了ready方法  

```
TA.ready(function(){
	//
});
```
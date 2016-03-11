## 萌店优惠券领取文档  

### 概述  
1.一个手机号可以绑定多张优惠券  
2.一张优惠券只能用一个手机号绑定  
3.优惠券不能重复绑定  


### 描述  
**优惠券领取页面  coupon.ejs**  
获取页面中输入的手机号和优惠券码，校验手机号位数和优惠券码位数，提交数据给后台，绑定判断优惠券领取状态。  


优惠券领取不成功，有4中可能出现的情况：  
code  
4：优惠券码不对  
5：优惠券已被领取过  
6：同一张券不能重复绑定  
7：优惠券已过领取有效期  

优惠券领取成功：  
code  
0：领取成功  

领取成功需要微信分享：  
1.分享给微信好友  
标题：快来领取萌店优惠券  
内容：萌店优惠券分享平台  
2.分享至朋友圈  
内容：萌店优惠券分享平台  
  

    **walletCoupon-cmd.js**  
 
         function fn_addCouponWidthPhone(args){
        var l= loading();
        $.ajax({
            type:"post",
            url:APP.urls.addCouponWithPhone,
            dataType:"json",
            data:args,
            success:function(res){
                if(0== res.code){
                    eles.couponInfo= res.data;
                    setTimeout(function(){
                        l.destroy();
                        eles.curPage= 1;
                        $eles.form_coupon[0].reset();
                        history.pushState({
                            title: "",
                            url: "?aaa=111",
                            flag: "p2"
                        }, document.totle, location.href);
                   }, 300);
                }else{
                    var msg= {
                        1: "网络请求异常，请重新尝试～", //服务出错
                        5: "优惠券已被领取过了哦～", //卡券已被领取
                        4: "该优惠券不存在，请输入正确的优惠券码哦~", //卡券不存在
                        3: "超过领取数限制～", //超过领取数限制
                        0: "领取成功～", //领取成功
                        6: "优惠券不能重复绑定哦～", //卡券已经加入到您的卡包
                        7: "优惠券已过期了哦～" //卡券不在有效期内。
                    };
                    l.destroy();
                }
            }
        });
    }
相关页面  
![](http://i.imgur.com/HqCMQ7A.png)   

### 相关接口文档  
**优惠券领取**  
地址：120.55.126.2：8888/main-api/publishCardByCode  
方式：post|json  

参数：  
![](http://i.imgur.com/E6elkrE.png) 
 
返回值：  
![](http://i.imgur.com/hdVGFzR.png)
          
     

   


<style>
    th{text-align: left }
</style>

## 购物号文档

### 概述
> 购物号

### 描述
**图文列表页msglist.ejs**  
从入口点击进入消息列表，通过getMsgList(1)加载相关内容，消息列表默认从第1页开始。  
列表页向下滚动到底部加载下一页（如果当前页面在加载中，则不会加载下一页。这里通过变量，数据加载完成为true值）

	**gwhMsglist-cmd.js**

	TA.ready(function(){
	    // 点击跳转
	    TA.getUserInfo(function(ui){
	        if(ui&& ui.mobile){
	            userInfo = {
	                mobile: ui.mobile,
	                uuid: ui.uuid,
	                shop_id: ui.shop_id,
	                wid: ui.wid,
	                token: ui.token
	            };
	            // 加载消息列表
	            getMsgList(1);
	        }else{
	            var args = {
	                destClassName: TA.NativeView.LoginPage
	            };
	            TA.jump(args);
	    });
	});


此处涉及到app内跳转登录  

    APP.openNewPage = function(segue){
        if(APP.isVdianAPP){
            var aPhone = segue.destClassName.split("|");
            if (APP.platform.toLowerCase() != 'iphone') {
                segue.destClassName= aPhone[0];
            } else {
                segue.destClassName= aPhone[1];
            }
            TA.jump(segue);
        }else{
            location.href= segue.segue.web.url;
        }
    };

相关页面  
![](http://i.imgur.com/sxEmdZD.png)


<br>
**图文详情页msg.ejs**  
从消息列表点击跳转到消息详情页，有4种可能出现的情况   
code  
0：正常  
1001：购物号被暂停  
1002：购物号被停止使用  
1003：消息已被删  
1004：账号关闭  

分享：涉及到分享模块shareApp-cmd (分享需判断版本)，跳转到举报页面时要去除分享  
商品信息（价格和标题）：此处需调用found/search接口 获取商品**价格**和**标题**  

通过message_content_list里的content字段判断 页面内容是**富文本**还是**商品**，如果是富文本则截取富文本的前50个内容，如果商品则把商品的aid保存在一个变量中（通过与wp_goods_id的匹配进行筛选保留所需要的商品）

	**gwhMsglist-cmd.js**
	
	 // 去除分享代码
    $('#j-report').on('click', function() {
        var url = $(this).data('url');
        var appV1 = TA.appVersion;
        var appV2 = 0;
        if (appV1) {
            appV2 = parseInt(appV1.replace(/\./g,''));
        }
        if (url) {
            if (appV2 >= appVersionNeed) {
                var args=  {
                    destClassName: TA.NativeView.WebView,
                    segue: {
                        web: {
                            url: url,
                            hideShareBtn: true,		// 分享按钮
                            hideMoreBtn: true		// 更多
                        }
                    }
                };
                TA.jump(args);
            } else {
                location.href = url;
            }
        }
    });


<br>
**举报页 report.ejs**  
由图文详情页点击进入举报页，举报内容是根据mid来判断，从图文详情页跳转到举报页需传mid。  
选择举报原因，下一步选择举报描述，提交后请求ajax，通过code码判断是否请求成功（0为成功，其余均为失败）。    
举报成功后点确定跳转至图文详情页。


<br>
### 相关接口文档
**1. 消息集合：(h5)**  
含购物号状态 ( 分页， 正序)  
地址:  112.124.28.82:3005/mengdianApp/gwh/messageAssemblyList  
方式:  post|json  
参数：  
![](http://i.imgur.com/EARL2vB.png)
  
返回值：  
![](http://i.imgur.com/ncfVOnS.png)

Data返回值：  
![](http://i.imgur.com/GHfCxRi.png)

message_list结构：  
![](http://i.imgur.com/FmezZhI.png)  
![](http://i.imgur.com/POsTZjU.png)

Value结构：  
![](http://i.imgur.com/c83iQ0o.png)

Segue结构：详情参考附件：  
![](http://i.imgur.com/7VU8O6R.png)

**2. 单条消息详情**  
地址:  112.124.28.82:3005/mengdianApp/gwh/messageDetail  
方式:  post|json  
暂不考虑分页，素材里的商品信息及展示样式，需要H5控制。  
参数：  
![](http://i.imgur.com/6Px4Q7x.png)

返回数据：  
![](http://i.imgur.com/Y0ImDMI.png)

Data数据结构：  
![](http://i.imgur.com/iCkMrlB.png)

message_content_list数据结构：  
![](http://i.imgur.com/Fkspa8Q.png)

**3. 举报类型**  
地址： 112.124.28.82:3005/mengdianApp/gwh/getReportType  
方式： post|json  
参数：  
![](http://i.imgur.com/e4zpDj0.png)

返回数据：  
![](http://i.imgur.com/deizSLT.png)

Data数据结构：  
![](http://i.imgur.com/VM0xJSl.png)

**4. 举报消息**  
地址:  112.124.28.82:3005/mengdianApp/gwh/reportMessage  
方式:  post|json  
参数：  
![](http://i.imgur.com/U2AD1LL.png)

返回数据：  
![](http://i.imgur.com/E7ZQfZh.png)



## widget

#### 概述
>为了方便阅读，和代码的可维护，萌店的html代码需要根据功能进行组建化定义。  
>widget 分为两类：1 系统级（结构固定）， 2 开发级（遵循widet的定义规则，开发者自定义）

#### 基本结构  

```
< div data-role="widget" data-widget="******">
	<div class="widget_wrap">
		<!---->
	</div>
</div>
```
需要定义两个div，第一个div定义data-role="widget"属性，并且按照具体类型定义data-widget属性的值，比如：widget_alert, widget_nav, recommend

#### 系统级

**1. 页面结构**

```
<!DOCTYPE html>
<html>
	<head></head>
	<body>
		<div data-role="container">
			<header data-role="header">
				<!---->
			</header>
			<div data-role="body">
				<!---->
			</div>
			<footer data-role="footer">
				<!---->
			</footer>
		</div>
	</body>	
</html>
```  
需要说明的是这个widget并不是严格的遵循其定义格式，但是其设计思路也是为了保持页面的规范和统一。


**2. 公共组件**   
为了统一弹窗的标准，我们实现了一个myDialog的js库，下面是一个确认框组件的示例：

```
< div data-role="widget" data-widget="widget_alert" id="widget_alert_2300" class="alert on" style="z-index: 2300;">
	<div class="widget_mask" style="z-index:2300;"></div>
	<div class="widget_wrap" style="z-index:2350;">
		<div class="widget_header"></div>
		<div class="widget_body">hi</div>
		<div class="widget_footer">
			<ul>
				<li><button type="button">确定</button></li>
			</ul>
		</div>
	</div>
</div>
```  

**3. 自定义组件**  
打开萌店首页，会发现有个导航菜单，它的html结构定义也是widget方式  

```
< div data-role="data-widget" data-widget="home-menu" class="home-menu">
	<div class="widget_wrap">
		<ul class="box" ontouchstart="return true;">
			<li>
				<a id="btn_home" href="javascript:;" class="on"><span>&nbsp;</span><label>首页</label></a>
			</li>
			<li>
				<a id="btn_partner" href="/vd/activity/partnerInvite?vid=21252&amp;pop_id=-1&amp;channelInfo=blank&amp;encrypt=ed31ee779eb14fd3d65ee39a42b21964" class=""><span>&nbsp;</span><label>成为合伙人</label></a>
			</li>
			<li>
				<a id="btn_shopcart" href="/buyer/user/shopcart" class=""><span>&nbsp;</span><label>购物车</label></a>
			</li>
			<li>
				<a id="btn_center" href="/buyer/user/center" class=""><span>&nbsp;</span><label>我的</label></a>
			</li>
		</ul>
		<!--店铺首页买家咨询入口-->
		<div class="consult">
			<a href="/buyer/webim/consult" id="btn_webim">
				<!-- <label>立即咨询</label> -->
			</a>
		</div>
	</div>
</div>
```

#### 注意事项  
越是需要功用的html代码结构越需要以widget的方式定义（包括class命名）  
遗憾的是萌店有些地方没有完全遵循这种规范,如返回顶部的按钮，聊天的链接入口等
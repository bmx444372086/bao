##Historyh与Hash的区别  

##### History 对象
History 对象包含用户（在浏览器窗口中）访问过的 URL。

History 对象是 window 对象的一部分，可通过 window.history 属性对其进行访问。
###### History 对象属性
  * length-----------返回浏览器历史列表中的 URL 数量。

######  History 对象方法
  * back()-----------加载 history 列表中的前一个 URL。

  * forward()-----------加载 history 列表中的下一个 URL。

  * go()-----------加载 history 列表中的某个具体页面。
  
###### History 对象描述
  History 对象最初设计来表示窗口的浏览历史。但出于隐私方面的原因，History 对象不再允许脚本访问已经访问过的实际 URL。唯一保持使用的功能只有 back()、forward() 和 go() 方法。

***

##### HTML DOM Location 对象

######  定义和用法
  hash 属性是一个可读可写的字符串，该字符串是 URL 的锚部分（从 # 号开始的部分）。

######  语法
 location.hash=anchorname

###### 实例

  假设当前的 URL 是: http://example.com:1234/test.htm#part2：
		<html>
		<body>
		
		<script type="text/javascript">
		document.write(location.hash);
		</script>
		
		</body>
		</html>
		输出：
		#part2

######HTML DOM href 属性

####定义和用法

href 属性是一个可读可写的字符串，可设置或返回当前显示的文档的完整 URL。
因此，我们可以通过为该属性设置新的 URL，使浏览器读取并显示新的 URL 的内容。
#### 语法
   location.href=URL
实例
  假设当前的 URL 是: http://example.com:1234/test.htm#part2：
			<html>
			<body>
			
			<script type="text/javascript">
			document.write(location.href);
			</script>
			
			</body>
			</html>
			输出：
			http://example.com:1234/test.htm#part2

***

###### 使用 location 对象的 hash 属性

		<html>
		<body>
		
		<script type="text/javascript">
		location.hash="#part2";
		document.write(location.hash);
		</script>
		
		</body>
		</html>
###### 锚的数组
   本例打开两个窗口。第一个窗口中包含四个按钮。第二个窗口定义了四个锚。当点击第一个窗口中的某个按钮时，onclick 事件句柄会到达第二个窗口指定的锚。

		<html>
		<head>
		<script type="text/javascript">
		function linkTo(y)
		{
		var x=window.open("/example/hdom/anchors.htm","","scrollbars=yes,width=250,height=200")
		x.location.hash=y
		}
		</script>
		</head>
		
		<body>
		<h3>Links and Anchors</h3>
		<p>点击一个按钮，来显示第二个窗口中的锚。</p>
		<input type="button" value="0" onclick="linkTo(0)">
		<input type="button" value="1" onclick="linkTo(1)">
		<input type="button" value="2" onclick="linkTo(2)">
		<input type="button" value="3" onclick="linkTo(3)">
		</body>
		
		</html>

> window.open方法：
>
>1.window.open(pageURL,name,parameters) 
>
其中：

> pageURL 为子窗口路径 
> 
> name 为子窗口句柄 
> 
> parameters 为窗口参数(各参数用逗号分隔) 

>2.实例：

		<SCRIPT> 
		<!-- 
		window.open ('page.html','newwindow','height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no') 
		//写成一行 
		--> 
		</SCRIPT>

　　脚本运行后，page.html将在新窗体newwindow中打开，宽为100，高为400，距屏顶0象素，屏左0象素，无工具条，无菜单条，无滚动条，不可调整大小，无地址栏，无状态栏。请对照。

>3.各项参数

    其中yes/no也可使用1/0；pixel value为具体的数值，单位象素。

		参数 | 取值范围 | 说明 
		
		alwaysLowered | yes/no | 指定窗口隐藏在所有窗口之后 
		
		alwaysRaised | yes/no | 指定窗口悬浮在所有窗口之上 
		
		depended | yes/no | 是否和父窗口同时关闭 
		
		directories | yes/no | Nav2和3的目录栏是否可见 
		
		height | pixel value | 窗口高度 
		
		hotkeys | yes/no | 在没菜单栏的窗口中设安全退出热键 
		
		innerHeight | pixel value | 窗口中文档的像素高度 
		
		innerWidth | pixel value | 窗口中文档的像素宽度 
		
		location | yes/no | 位置栏是否可见 
		
		menubar | yes/no | 菜单栏是否可见 
		
		outerHeight | pixel value | 设定窗口(包括装饰边框)的像素高度 
		
		outerWidth | pixel value | 设定窗口(包括装饰边框)的像素宽度 
		
		resizable | yes/no | 窗口大小是否可调整 
		
		screenX | pixel value | 窗口距屏幕左边界的像素长度 
		
		screenY | pixel value | 窗口距屏幕上边界的像素长度 
		
		scrollbars | yes/no | 窗口是否可有滚动栏 
		
		titlebar | yes/no | 窗口题目栏是否可见 
		
		toolbar | yes/no | 窗口工具栏是否可见 
		
		Width | pixel value | 窗口的像素宽度 
		
		z-look | yes/no | 窗口被激活后是否浮在其它窗口之上


***
### Location 对象
 Location 对象包含有关当前 URL 的信息。
 Location 对象是 Window 对象的一个部分，可通过 window.location 属性来访问。

 >实例：：把用户带到一个新地址
 >
		<html>
		   <head>
		     <script type="text/javascript">
		     function currLocation()
		    {
		          alert(window.location)
		   }
		     function newLocation()
		{
		window.location="/index.html"
		}
		</script>
		</head>
		<body>
		<input type="button" onclick="currLocation()" value="显示当前的 URL">
		<input type="button" onclick="newLocation()" value="改变 URL">
		</body>
		</html>


##### Location 对象属性

* hash	设置或返回从井号 (#) 开始的 URL（锚）。
* host	设置或返回主机名和当前 URL 的端口号。
* hostname	设置或返回当前 URL 的主机名。
* href	设置或返回完整的 URL。
* pathname	设置或返回当前 URL 的路径部分。
* port	设置或返回当前 URL 的端口号。
* protocol	设置或返回当前 URL 的协议。
* search	设置或返回从问号 (?) 开始的 URL（查询部分）。

##### Location 对象方法

* assign()	加载新的文档。
    下面的例子将使用 assign() 来加载一个新的文档：
		<html>
		<head>
		<script type="text/javascript">
		function newDoc()
		  {
		  window.location.assign("http://www.w3school.com.cn")
		  }
		</script>
		</head>
		<body>
		
		<input type="button" value="Load new document" onclick="newDoc()" />
		
		</body>
		</html>
* reload()	重新加载当前文档。
##### 定义和用法

   reload() 方法用于重新加载当前文档。

##### 语法
     location.reload(force)
>说明:

>如果该方法没有规定参数，或者参数是 false，它就会用 HTTP 头 If-Modified-Since 来检测服务器上的文档是否已>改变。如果文档已改变，reload() 会再次下载该文档。如果文档未改变，则该方法将从缓存中装载文档。这与用户单击浏览>器的刷新按钮的效果是完全一样的。
>
>如果把该方法的参数设置为 true，那么无论文档的最后修改日期是什么，它都会绕过缓存，从服务器上重新下载该文档。>这与用户在单击浏览器的刷新按钮时按住 Shift 健的效果是完全一样。
##### 实例
	<html>
	<head>
	<script type="text/javascript">
	function reloadPage()
	  {
	  window.location.reload()
	  }
	</script>
	</head>
	
	<body>
	<input type="button" value="Reload page"
	onclick="reloadPage()" />
	</body>
	
	</html>
* replace()	用新的文档替换当前文档。


##### 语法

    location.replace(newURL)
>说明:
>
replace() 方法不会在 History 对象中生成一个新的记录。当使用该方法时，新的 URL 将覆盖 History 对象中的当前记录。
##### 实例
下面的例子将使用 replace() 方法来替换当前文档：

		<html>
		<head>
		<script type="text/javascript">
		function replaceDoc()
		  {
		  window.location.replace("http://www.w3school.com.cn")
		  }
		</script>
		</head>
		<body>
		
		<input type="button" value="Replace document" onclick="replaceDoc()" />
		
		</body>
		</html>

#####Location 对象描述

Location 对象存储在 Window 对象的 Location 属性中，表示那个窗口中当前显示的文档的 Web 地址。它的 href 属性存放的是文档的完整 URL，其他属性则分别描述了 URL 的各个部分。这些属性与 Anchor 对象（或 Area 对象）的 URL 属性非常相似。当一个 Location 对象被转换成字符串，href 属性的值被返回。这意味着你可以使用表达式 location 来替代 location.href。

不过 Anchor 对象表示的是文档中的超链接，Location 对象表示的却是浏览器当前显示的文档的 URL（或位置）。但是 Location 对象所能做的远远不止这些，它还能控制浏览器显示的文档的位置。如果把一个含有 URL 的字符串赋予 Location 对象或它的 href 属性，浏览器就会把新的 URL 所指的文档装载进来，并显示出来。

除了设置 location 或 location.href 用完整的 URL 替换当前的 URL 之外，还可以修改部分 URL，只需要给 Location 对象的其他属性赋值即可。这样做就会创建新的 URL，其中的一部分与原来的 URL 不同，浏览器会将它装载并显示出来。例如，假设设置了Location对象的 hash 属性，那么浏览器就会转移到当前文档中的一个指定的位置。同样，如果设置了 search 属性，那么浏览器就会重新装载附加了新的查询字符串的 URL。

除了 URL 属性外，Location 对象的 reload() 方法可以重新装载当前文档，replace() 可以装载一个新文档而无须为它创建一个新的历史记录，也就是说，在浏览器的历史列表中，新文档将替换当前文档。
***

>示例代码
>
	<input type=button value=刷新 onclick="window.location.reload()"> 
	<input type=button value=前进 onclick="window.history.go(1)"> 
	<input type=button value=后退 onclick="window.history.go(-1)"> 
	<input type=button value=前进 onclick="window.history.forward()"> 
	<input type=button value=后退 onclick="window.history.back()"> 后退+刷新<input type=button value=后退 onclick="window.history.go(-1);window.location.reload()"> 

#####  i=1 history.go(i) [html] 去指定的某页 
   如果是history.go(0)那就是刷新这两个属于JS代码，相当于IE的前进、后退功能。 
具体的用处就要看什么时候需要这个就用上。比如用户注册时的验证是后台验证，不符合要求的时候就可以用这个，可以最大限度保证用户少重复输入数据。 
例如：载入页面： 

				
				function onLoadPage(){ 
				if(event.srcElement.tagName=="SPAN"){ 
				oFrame=top.window.middle.frames[2]; 
				oTxt=event.srcElement.innerText; 
				switch(oTxt){ 
				case "前 进": 
				oFrame.history.go(1); 
				case "后 退": 
				oFrame.history.back(); 
				case "刷 新": 
				oFrame.location.reload(); 
				} 
			} 
		} 

>常用ＪＳ刷新页面的方法

1. history.go(0) 
 
2. location.reload() 
 
3. location=location 

4. location.assign(location) 

5. document.execCommand('Refresh') 

6. window.navigate(location)
 
7. location.replace(location)
 
8. document.URL=location.href 


>实例：用Ajax保留浏览器的历史

HTML代码：

			<ul class="menu">
			<li><a href="/home/index#page=1">page1</a></li>
			<li><a href="/home/index#page=2">page2</a></li>
			<li><a href="/home/index#page=3">page3</a></li>
			</ul>
			<div id="mainPanel">
			</div>
       

JS代码：

      //获取指定key的hash值
      <script type="text/javascript">
      function getHash(key, url) {
          var hash;
          if (!!url) {
              hash = url.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
              hash = (hash == url) ? "" : hash;
          } else {
              hash = self.location.hash;
          }

          hash = "" + hash;
          hash = hash.replace(/^[?#]/, '');
          hash = "&" + hash;
          var val = hash.match(new RegExp("[\&]" + key + "=([^\&]+)", "i"));
          if (val == null || val.length < 1) {
              return null;
          } else {
              return decodeURIComponent(val[1]);
          }
      }
    </script>
###### 当你直接在浏览器(新开的标签页)的地址栏里输入这样的地址：http://localhost:3859/home/index#page=3 或者通过QQ发给你的好友，看到的并不是如你所想的应该是page=3的内容，而是http://localhost:3859/home/index 的内容。原因很简单——页面加载的时候不会触发onhashchange事件。
######所以我们要在上面的代码追加一行：

####方案一：onhashchange 事件

onhashchange 事件location.hash发生改变的时候触发，可以很好解决AJAX刷新后退/前进键失效的问题，是一个新的事件，
目前chrome ,firefox,Opera,  Safari,IE8及以上版本浏览器都兼容。
其实对于那些死抱着IE6,IE7 不放的用户，咱也没必要给他们提供这样的用户体验。


       function loadPanel() {
        var page = getHash("page");
        if (page == 1) {
            $("#mainPanel").load("/home/page1");
        }
        if (page == 2) {
            $("#mainPanel").load("/home/page2");
        }
        if (page == 3) {
            $("#mainPanel").load("/home/page3");
        }
    }
    $(window).bind("hashchange", loadPanel);
    </script>
    $(loadPanel);

####方案二：jquery.ba-hashchange.js

   jquery.ba-hashchange.js(http://benalman.com/projects/jquery-hashchange-plugin/)
这个插件的实现原理和jquery.history.js 完全一样。循环间隔为50毫秒。
它overwrite 了window.hashchange事件，使其能够兼容全部浏览器。
使用如下：

    <script src="/Scripts/jquery.ba-hashchange.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(window).hashchange(function () {
        var page = getHash("page");
        if (page == 1) {
            $("#mainPanel").load("/home/page1");
        }
        if (page == 2) {
            $("#mainPanel").load("/home/page2");
        }
        if (page == 3) {
            $("#mainPanel").load("/home/page3");
        }
    });
    $(window).hashchange();
   </script>



***


### 实现页面内部跳转

##### HTML5有两种解决办法： 

 1. onhashchange 用到了window.loaction.hash对象（存，取） 

 2. history 

(1) pushstate 三个参数：数据，标题（为空），url（可选）。 

(2) popstate是一个事件，读取event.state数据 

 注意：url是虚假的。用户不能实际找到。 

 本质上：两种方式都是存值+取值事件。

简化后就是： 

     window.loaction.hash = srcArr; 
     window.onhashchange=function(){ 
     var val = window.loaction.hash; 
    }

 和 

	history.pushState = srcArr; 
	window.onpopstate=function(event){ 
	    var val = event.state; 
	};

随机数例子：

		<!DOCTYPE html PUBLIC"-//W3C//DTD XHTML 1.0 Transitional//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
		<meta http-equiv="Content-Type"content="text/html; charset=utf-8"/>
		<title>无标题文档</title>
		<script type="text/javascript">
		window.onload=function (){
		var oInput = document.getElementById("input1");
		oInput.onclick=function(){
		var oDiv = document.getElementById("div1");
		var num = generateNum (6);
		//onhashchange
		window.location.hash = num;
		window.onhashchange = function(){
		oDiv = = window.location.hash.substring(1);
		}
		//history
		oDiv.innerHTML=num;
		//生成随机数
		function generateNum (num){
		var ret = [];
		for (var i = 0; i < num; i++) {
		ret.push(Math.ceil(100*Math.random()));
		};
		return ret;
		}
		}
		}
		</script>
		</head>
		<body>
		中奖号码：
		<div id="div1"></div>
		<input type="button"value="生成随机号码"id="input1"/>
		</body>
		</html>
***

### history和hash模拟浏览器前进后退功能

##### 一、使用history的html5新特性（pushState、replaceState、onpopstate）模拟浏览器前进后退功能
   相对于hash模拟，优点是更符合用户习惯（改变内容的同时改变页面地址）、有利于seo，缺点是兼容性很差（ie9及以下不支持）。


		document.addEventListener('DOMContentLoaded', function() {  
		    //缓存tab对象  
		    var tabs = document.getElementsByTagName('a'), nav = document.getElementsByTagName('nav')[0];  
		    //初始化地址栏  
		    if (!history.state) {  
		        //更改history中当前页面的地址  
		        history.replaceState({'no': 1}, document.title, '?no=1');  
		        //改变当前页面的title  
		        document.title = 'no=1';  
		    }  
		    //初始化tab状态  
		    for(var i=0, count=tabs.length; i<count; i++) {  
		        tabs[history.state.no-1].className = 'selected';  
		    }  
		    //把点击事件委托到nav上，不必为每个tab绑定点击事件  
		    nav.addEventListener('click', function(ev) {  
		        if (ev.target.tagName.toLowerCase() === 'a') {  
		            //阻止链接的默认行为  
		            ev.preventDefault();  
		            //读取tab的hash  
		            var tab = ev.target, no = tab.getAttribute('href').replace('#', '');  
		            //生成当前地址并插入到history中  
		            history.pushState({'no': no}, document.title, '?no='+no);  
		            //实时改变当前页面的title  
		            document.title = 'no='+no;  
		            //去除之前tab高亮  
		            for(var i=0, count=tabs.length; i<count; i++) {  
		                tabs[i].className = '';  
		            }  
		            //为当前tab添加高亮  
		            tab.className = 'selected';  
		        }  
		    }, false);  
		}, false);  
		  
		//模拟地址栏前进后退功能  
		window.addEventListener('popstate', function(data) {  
		    //如果之后没有可后退的链接时跳过  
		    if (!data.state) return;  
		    //实时改变当前页面的title  
		    document.title = 'no='+data.state.no;  
		    //高亮对应tab  
		    var tabs = document.getElementsByTagName('a');  
		    //去除之前tab高亮  
		    for(var i=0, count = tabs.length; i<count; i++) {  
		        tabs[i].className = '';  
		    }  
		    //为当前tab添加高亮  
		    for(var i=0, count=tabs.length; i<count; i++) {  
		        tabs[data.state.no-1].className = 'selected';  
		    }  
		}, false);  

### 二、使用地址栏hash值模拟浏览器前进后退功能
##### 相对于hisitory模拟，优点是兼容性更好些（不支持ie67，但可以用定时器模拟），缺点是不利于seo。

		document.addEventListener('DOMContentLoaded', function() {  
		    //缓存tab对象  
		    var tabs = document.getElementsByTagName('a'), tabidx = location.hash.replace('#', '');  
		    //初始化  
		    if (!location.hash) {  
		        //hash值初始化  
		        location.hash = '#1';  
		        //高亮第一个tab  
		        tabs[0].className = 'selected';  
		    } else {  
		        tabs[tabidx-1].className = 'selected';  
		    }  
		}, false);  
		  
		//监控hash值的变化  
		window.addEventListener('hashchange', function() {  
		    //读取当前tab对应的hash  
		    var tabs = document.getElementsByTagName('a'), tabidx = location.hash.replace('#', '');  
		    //去除之前tab高亮  
		    for(var i=0, count=tabs.length; i<count; i++) {  
		        tabs[i].className = '';  
		    }  
		    //为当前tab添加高亮  
		    tabs[tabidx-1].className = 'selected';  
		}, false);  
示例只支持现代浏览器，不支持ie，如果感兴趣，可以自己在ie模拟下。

##### history模拟浏览器前进后退功能demo

		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8" />
			<title>使用history的html5新特性（pushState、replaceState、onpopstate）模拟浏览器前进后退功能</title>
			<style>
				nav { background: gray; padding: 20px; margin: 50px auto; width: 700px; height: 50px; }
				nav ul, nav li { padding: 0; margin: 0; list-style: none; }
				nav li { float: left; background: black; margin: 0 5px; height: 40px; line-height: 40px; }
				nav a { display: block; padding: 0 5px; color: white; text-decoration: none; }
				nav a.selected { background: red; }
			</style>
		</head>
		<body>
		<nav>
			<ul>
				<li><a href="#1">链接1</a></li>
				<li><a href="#2">链接2</a></li>
				<li><a href="#3">链接3</a></li>
				<li><a href="#4">链接4</a></li>
				<li><a href="#5">链接5</a></li>
				<li><a href="#6">链接6</a></li>
				<li><a href="#7">链接7</a></li>
				<li><a href="#8">链接8</a></li>
				<li><a href="#9">链接9</a></li>
			</ul>
		</nav>
		<script>
		//使用history的html5新特性（pushState、replaceState、onpopstate）模拟浏览器前进后退功能
		//相对于hash模拟
		//优点是更符合用户习惯（改变内容的同时改变页面地址）、有利于seo
		//缺点是兼容性很差（ie9及以下不支持）
		document.addEventListener('DOMContentLoaded', function() {
			//缓存tab对象
			var tabs = document.getElementsByTagName('a'), nav = document.getElementsByTagName('nav')[0];
			//初始化地址栏
			if (!history.state) {
				//更改history中当前页面的地址
				history.replaceState({'no': 1}, document.title, '?no=1');
				//改变当前页面的title
				document.title = 'no=1';
			}
			//初始化tab状态
			for(var i=0, count=tabs.length; i<count; i++) {
				tabs[history.state.no-1].className = 'selected';
			}
			//把点击事件委托到nav上，不必为每个tab绑定点击事件
			nav.addEventListener('click', function(ev) {
				if (ev.target.tagName.toLowerCase() === 'a') {
					//阻止链接的默认行为
					ev.preventDefault();
					//读取tab的hash
					var tab = ev.target, no = tab.getAttribute('href').replace('#', '');
					//生成当前地址并插入到history中
					history.pushState({'no': no}, document.title, '?no='+no);
					//实时改变当前页面的title
					document.title = 'no='+no;
					//去除之前tab高亮
					for(var i=0, count=tabs.length; i<count; i++) {
						tabs[i].className = '';
					}
					//为当前tab添加高亮
					tab.className = 'selected';
				}
			}, false);
		}, false);
		//模拟地址栏前进后退功能
		window.addEventListener('popstate', function(data) {
			//如果之后没有可后退的链接时跳过
			if (!data.state) return;
			//实时改变当前页面的title
			document.title = 'no='+data.state.no;
			//高亮对应tab
			var tabs = document.getElementsByTagName('a');
			//去除之前tab高亮
			for(var i=0, count = tabs.length; i<count; i++) {
				tabs[i].className = '';
			}
			//为当前tab添加高亮
			for(var i=0, count=tabs.length; i<count; i++) {
				tabs[data.state.no-1].className = 'selected';
			}
		}, false);
		</script>
		</body>
		</html>

#####  hash模拟浏览器前进后退功能demo

		<!DOCTYPE html>
		<html>
		<head>
			<meta charset="utf-8" />
			<title>使用地址栏hash值模拟浏览器前进后退功能</title>
			<style>
				nav { background: gray; padding: 20px; margin: 50px auto; width: 700px; height: 50px; }
				nav ul, nav li { padding: 0; margin: 0; list-style: none; }
				nav li { float: left; background: black; margin: 0 5px; height: 40px; line-height: 40px; }
				nav a { display: block; padding: 0 5px; color: white; text-decoration: none; }
				nav a.selected { background: red; }
			</style>
		</head>
		<body>
		<nav>
			<ul>
				<li><a href="#1">链接1</a></li>
				<li><a href="#2">链接2</a></li>
				<li><a href="#3">链接3</a></li>
				<li><a href="#4">链接4</a></li>
				<li><a href="#5">链接5</a></li>
				<li><a href="#6">链接6</a></li>
				<li><a href="#7">链接7</a></li>
				<li><a href="#8">链接8</a></li>
				<li><a href="#9">链接9</a></li>
			</ul>
		</nav>
		<script>
		// 使用地址栏hash值模拟浏览器前进后退功能
		// 相对于hisitory模拟
		// 优点是兼容性更好些（不支持ie67，但可以用定时器模拟）
		// 缺点是不利于seo
		document.addEventListener('DOMContentLoaded', function() {
			//缓存tab对象
			var tabs = document.getElementsByTagName('a'), tabidx = location.hash.replace('#', '');
			//初始化
			if (!location.hash) {
				//hash值初始化
				location.hash = '#1';
				//高亮第一个tab
				tabs[0].className = 'selected';
			} else {
				tabs[tabidx-1].className = 'selected';
			}
		}, false);
		//监控hash值的变化
		window.addEventListener('hashchange', function() {
			//读取当前tab对应的hash
			var tabs = document.getElementsByTagName('a'), tabidx = location.hash.replace('#', '');
			//去除之前tab高亮
			for(var i=0, count=tabs.length; i<count; i++) {
				tabs[i].className = '';
			}
			//为当前tab添加高亮
			tabs[tabidx-1].className = 'selected';
		}, false);
		</script>
		</body>
		</html>
***

#### 补充知识：

histrory   是全局的属性，对应window.popstate

hash      是全局的属性，对应 window.hashchang
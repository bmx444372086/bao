## myDialog-cmd.js

####  概述
> myDialog-cmd.js是一款弹窗插件(以下简称myDialog)。页面引用此js后调用浏览器默认方法`alert`, `confirm`将会被新的ui取代。   
> 该插件还实现了`loading`, `tip`等常用功能  
> 优点：所有弹窗统一都继承自dialog类，拥有相同的属性和方法，同时都按照一定的规律统一添加到dom中，并且管理z-index，按照使用顺序依次累加。  
> 需要跟myDialog.css配合使用

####  使用方法
 **1. alert**  

```
alert("I'm a alert!");
```
或着你想要做些什么，当点击确定按钮的时候  

```
alert("I'm a alert!", {
	callBack: function(evt){
		var self= this,
			et= evt.target,
			tx= et.innerText;
		if("确定"=== tx){
			//do something
			self.destroy();
		}
	}
});
```
**2. loading**    
适合做页面异步ajax请求的处理

```
loading();
```
**3. tip**  

```
tip("I'm a tip!"); //默认1.5s后消失
tip("I'm a tip!", {t: 3*1000}); //自定义时间,3s后消失
```
**4. confirm**  

```
confirm("I'm a confirm!");
```
跟alert一样，你也可以自定义“确定”“取消”按钮的事件  

```
confirm("I'm a confirm!", {
	callBack: function(evt){
		var self= this,
			et= evt.target,
			tx= et.innerText;
		if("确定"=== tx){
			//do something
			self.destroy();
		}else if("取消"=== tx){
			//do somthing
			self.destroy();
		}
	}
});
```
**5. dialog**  
dialog是其他弹窗的基类，它们共同继承了`open`[^1]， `close`， `destroy`方法

```
var dialog_1= dialog("I'm a dialog!");
dialog_1.open();
```
close和destroy都是关闭当前弹窗，它们的的区别是：前者不会将html代码从dom中移除，你可以通过实例重新open。desroy则相反，如果想重新打看弹窗，需要重新调用dialog方法，创建对象并添加到dom中
[^1]: 除了dialog外，其它弹窗默认已直接调用open  

####  进阶
通常情况下，还有两种常用的场景，1，自定义样式，2，自定义内容和按钮
首先看一下dialog的代码片段   

```
dialog(null, {
            TPL:    '<div class="widget_wrap" style="z-index:{zIndex2};">\
                        <div class="widget_header">\
                            <header>\
                                <label>请输入手机号快速登录</label>\
                            </header>\
                        </div>\
                        <section class="widget_body">\
                            <form id="form_confirm_login" action="javascript:;" method="POST">\
                                <ul>\
                                    <li class="tbox">\
                                        <div style="display:block;">\
                                            <input type="text" value="" name="phoneNo" />\
                                        </div>\
                                        <div></div>\
                                    </li>\
                                     <li class="tbox">\
                                        <div>\
                                            <input type="text" value="" name="vcode" />\
                                        </div>\
                                        <div>\
                                            <a href="javascript:;" id="btn_getVcode" class="btn-getVcode">获取验证码</a>\
                                        </div>\
                                    </li>\
                                </ul>\
                            </form>\
                        </section>\
                        <div class="widget_footer">\
                            <ul>\
                                <li><a href="javascript:;" class="button btn-cancle" >取消</a></li>\
                                <li><a href="javascript:;" class="button btn-ok" >确定</a></li>\
                            </ul>\
                        </div>\
                    </div>',
            classes: "confirm-login confirm-login-common",
            callBack: function(evt){
                var self= this, et= evt.target, ec= et.className;
                if(/getVcode/.test(ec) ){
                    if(!timer){
                        gendVcoded.call(self);
                    }
                }else if(/cancle/.test(ec) ){
                    self.destroy();
                }else if(/ok/.test(ec) ){
                    doLogin.call(self);
                }
            }
        }).open();
```

这是萌店快速登录的弹窗，它的基本功能包括输入手机号和短信验证码，并且允许用户取消或确定是否继续，普通的confirm无法满足需求。  
弹窗方法均支持两个参数，第二个参数是一个object对象，可以接收如下5个值： 

 
1. TPL *(是弹窗主体的片段，内容可以包含一个憨厚，中间允许一个{str}占位符，已接受第一个参数)*  
2. TPL_MASK*(模式窗口，往往都有一个蒙层，该字段定义蒙层的html代码片段，默认情况下不用写)*  
3. type *(默认的类型有 alert, loading, tip, confirm,也可以自定义)*  
4. zIndex *(除非特殊情况，该字段不能随便用，避免发生两个弹窗因z-index属性不同，而导致的层级关系错乱)*   
5. classes *(自定义样式名称 多个样式名用空格分开，如 "confirm-login confirm-login-common")*   
6. callBack *(弹窗点击事件的回调函数，他的参数是event对象，用户可以根据该对象判断事件源是哪个元素，继而做出相应的处理)*   



####  注意事项
myDialog插件是一个组件工具，生成的是html片段，所以遵循萌店[组件(widget)](/widget.md)的基本格式  
myDialog中的方法是js单线程中执行，并且不会像系统的弹窗（如alert, confirm等）阻止代码继续执行，所以需要用户确认才能执行代码需要通过放在回调函数中的方式实现。  

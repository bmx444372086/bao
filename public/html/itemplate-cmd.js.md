## iTemplate-cmd.js

#### 概述
> iTemplate-cmd.js 是一个轻量型的模板引擎(以下简称 iTemplate)，旨在方便的渲染数据列表到html    
> 模板引擎的原理：通过正则替换代码中的某一格式的字符
   
#### 使用方法
  iTemplate 只提供了一个简单的方法 `makeList` ,该方法有三个参数，tpl、json、fn  
  
 * tpl－模板片段，列表往往都是重发的出现，可以是一个li也可以是div
 * json －数组格式（也可以是object对象[^1])
 [^1]: 基于object对象的属性可以通过for-in枚举出来
 * fn - 非必填，对每一条数据进行处理，生成新的字段
 
 eg:首先定义一个tpl变量
 
 ```
	var TPL= '<li>\
			<h3>名称：{name}</h3>\
			<p>价格：{price}</p>\
		</li>';
 ```
 和一个json数据
 
 ```
 	var bookList= [
 		{
 			name: "OReilly精品图书系列：JavaScript权威指南（第6版）",
 			price: "97"
 		},
 		{
 			name: "JavaScript高级程序设计（第3版）",
 			price: "69.8"
 		},
 		{
 			name: "深入浅出Node.js",
 			price: "60.4"
 		},
 	];
 ```
 
 使用
 
 ```
 	var html_bookList= iTemplate.makeList(TPL, bookList);
 	
 	//console.log(html_bookList);
 	//<li><h3>名称：OReilly精品图书系列：JavaScript权威指南（第6版）</h3><p>价格：97</p></li><li><h3>名称：JavaScript高级程序设计（第3版）</h3><p>价格：69.8</p></li><li><h3>名称：深入浅出Node.js</h3><p>价格：60.4</p></li>
 ```
然后你将得到一个html的文本片段，再也不用写for循环去处理每一条数据，是不是so easy？  
也许你已经注意到TPL中的name和bookList中的name是一一对应的，查看源码会发现，iTemplate会正则匹配`{xxx}`格式的字符串，用以替换`xxx`键对应的值。
 
 
 

#### 进阶
在日常的项目中，使用场景也许更复杂，也许要对每一条数据进行二次逻辑处理，比如对价格保留两位小数。  
我们知道iTemplate还有第三个参数fn,现在让我们通过实例看它的使用方法

```
	var htl_bookList= iTemplate.makeList(TPL, bookList, function(k, v, i){
		return {
			price: v.price.toFixed(2)
		}
	});
```
fn的作用就是返回一个新的对象，TPL中的`{xxx}`会优先匹配该对象中的值


#### 注意事项
* 模板通常情况下都是固定的字符串，所以命名方式要全部大些，如`TPL`
* fn作为回调函数可以接收三个值，k, v, i分别是索引值，值，顺序
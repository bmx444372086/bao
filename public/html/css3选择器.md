## 前端必须要掌握的30个css3选择器   


#### 概述 
> 也许你已经学会了CSS的三个简单常用的选择器：#ID，.class，标签选择器，可是这些就足够了吗？随着CSS3的到来，作为前端开发者需要掌握下面三十个基本的选择器，这样才可以在平时开发中得心用手。  
**本文中将综合前端开发中常用的30个CSS3选择器，并且附带了浏览器的支持情况，希望对大家有所帮助。**

#### 整理如下    
**1.  `*`：通用元素选择器**

```
*{
  margin:0;
  padding:0;
}
```  
*选择器是选择页面上的全部元素，上面的代码作用是把全部元素的margin和padding设为0，最基本的
清除默认CSS样式方法。  

*选择器也可以应用到子选择器中，例如下面的代码：  
```
 #container * {  
 border: 1px solid black;  
}  
```  
这样ID为container 的所有子标签元素都被选中了，并且设置了border。  
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

 **2. ` #ID`：ID选择器**  

```
 #container { 
width: 960px;     
margin: auto;
}
```  
ID选择器是CSS中效率最高的选择器，使用的时候要保证ID的唯一性。  
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  
 
 **3.  `.class`：类选择器**  

```
 .error {    
color: red;  
}
```  
类选择器效率低于ID选择器，一个页面可以有多个class，并且class可以放在不同的标签中使用。  
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

 **4.  `X`：标签选择器**  

```
a { color: red; }  ```  
```
ul { margin-left: 0; }  ```  
如果你只是想要页面中的某个标签样式改变，可以选择使用标签选择器。      
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

 **5.  `X Y`：标签组合选择器**  

```
li a {    
text-decoration: none; 
 }
```  
标签组合选择器也是常用的选择器。上面的代码对页面中的li标签和a标签都起作用。    
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

 **6.  `X:visited and X:link`：伪类选择器**  

```
a:link { color: red; } ```  
```
 a:visted { color: purple; }```  
伪类选择器，最常用的为a标签，类似的还有很多，上面代码设置未访问的链接和已访问的链接的颜色。   
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

 **7.  `X+Y`：毗邻元素选择器**  

```
ul + p { color: red;  }
```  
毗邻元素选择器，匹配的是所有紧随X元素之后的同级元素Y。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

 **8.  `X>Y`：子元素选择器**  

```
 #container > ul { border: 1px solid black;  }
```  
匹配#container下的所有子元素。  
**关于X>Y和X Y的区别请看下面的html实例：**  
`<div id="container">`  
`<ul>`  
 &nbsp; &nbsp; &nbsp;`<li>list item`  
&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<ul><li>list child</li></ul>`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`</li>`   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<li>list item</li>`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<li>list item</li>`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<li>list item</li>`  
`</ul>`  
`</div>`  
选择器#container > ul只会匹配到第一个ul，也就是#container的子元素UL，而不是li里面的ul，但是#container ul则可以匹配到所有div里面的ul。   
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**9. ` X~Y`：后代选择器**  

```
ul ~ p { color: red;  }
```  
匹配任何在X元素之后的同级Y元素。也就是选择了ul之后的同级所有的P元素  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**10.  `X[attr]`：属性选择器**  

```
a[title] { color: green;  }
```  
匹配具有某属性的标签，例如实例中是匹配具有title属性的a标签。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**11.  `X[attr="val"]`：属性选择器**  

```
a[href="http://js8.in"] { color: #1f6053; }
```  
也属于属性选择器，匹配属性中为某个值的标签。例如实例中匹配的为href="http://js8.in"的a标签，而其他链接的a标签不选择。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**12.  `X[attr*="val"]`：属性选择器**  

```
a[href*="tuts"] { color: #1f6053; }
```  
匹配属性值中有val的任何字符串，任意位置都相匹配，实例中匹配href中所有含有tuts的标签。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**13.  `X[attr^="val"]`：属性选择器**  

```
a[href^="http"] { background: url(path/to/external/icon.png) no-repeat;     padding-left: 10px;}
```  
匹配属性值以val开头的任何字符串。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**14.  `X[attr$="val"]`：属性选择器**  

```
a[href$=".jpg"] { color: red;  }
```  
匹配属性值以val结尾的任何字符串。  
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera  

**15.  `X[attr-*="val"]`：属性选择器**  

`<a href="path/to/image.jpg" data-filetype="image"> Image Link </a> `   

` a[data-filetype="image"]{ border:1px solid #ccc}`    
使用自定义属性,给每个锚点加个属性data-filetype指定这个链接指向的图片类型,就可以把所有的图片类型都选中。    
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera    

**16.  `X[attr~="val"]`：属性选择器**  

`<a href="image.jpg" data-info="external image"> Click Me, Fool </a> `    
`a[data-info~="external"] {color: red; ;}`    
`a[data-info~="image"] {  border: 1px solid black;  }`    
这个~符号可以定位那些某属性值是空格分隔多值的标签。    
 **兼容性**：IE7+,Firefox,Chrome,Safari,Opera      

**17.  ` X:checked`：伪类选择器**  

```
input[type=radio]:checked {
   border: 1px solid black;
}
```  
定位那些被选中的单选框和多选框。  
 **兼容性**：IE9+,Firefox,Chrome,Safari,Opera  

**18.  ` X:after`：伪类选择器**  

```
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    font-size: 0;
    height: 0;
  }
```  
```
.clearfix { 
   *display: inline-block; 
   _height: 1%;
}
```  
before 和after是在选择的标签之前或者之后插入内容，一般用于清除浮动，但是对于IE6、IE7是不可用的。上面这段代码会在目标标签后面补上一段空白，然后将它清除。这个方法你一定得放你的聚宝盆里面。特别是当overflow:hidden方法不顶用的时候，这招就特别管用了。  
 **兼容性**：IE8+,Firefox,Chrome,Safari,Opera  

**19.  ` X:hover`：伪类选择器**  

```
div:hover {
  background: #e3e3e3;
}
```  
当鼠标经过的时候产生的变化。  
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

**20.  `  X:not(selector)`：结构性伪类选择器**  

```
div:not([id="footer"]) {  
  color: green;  
}
```  
选择除某个元素之外的所有元素,但是除了id=footer的div。  
 **兼容性**：IE9+,Firefox,Chrome,Safari,Opera   

**21.  ` X::pseudoElement)`：结构性伪类选择器**  

```
p::first-line {  
   font-weight: bold;  
   font-size: 1.2em;  
} 
```  
```
p::first-letter {  
   float: left;  
   font-size: 2em;  
   font-weight: bold;  
   font-family: cursive;  
   padding-right: 2px;  
}
```   
分别用于匹配元素的第一行和第一个字母。  
 **兼容性**：IE6+,Firefox,Chrome,Safari,Opera  

**22.  ` X:nth-child(n)`：结构性伪类选择器**  

```
li:nth-child(3) {  
   color: red;  
}
```  
```
li:nth-child(2n-1) {  
   background: green;  
}
```   
用来定位父元素的一个或多个特定的子元素。例如上面的代码匹配的是第三个li标签和li的奇数行。  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   

**23.  `  X:nth-last-child(n)`：结构性伪类选择器**  

```
li:nth-last-child(2) {  
   color: red;  
}
```   
与上一个选择器相反，这个选择器是倒序匹配第几个标签，上面的代码的意思是匹配倒数第二个li标签  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   


**24.  ` X:nth-of-type(n)`：结构性伪类选择器**  

```
ul:nth-of-type(3) {
   border: 1px solid black;
}
```   
只计算父元素中某种类型的子元素，上面的代码只有第三个ul标签会被设置边框。  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   

**25.  ` X:nth-last-of-type(n)`：结构性伪类选择器**  

```
ul:nth-last-of-type(3) {
   border: 1px solid black;
}
```   
与上面的选择器是一样的，区别是起始方向是从最后一个子元素开始。  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   

**26.  `  X:first-child`：结构性伪类选择器**  

```
ul li:first-child {
   border-top: none;
}
```   
选择父元素的第一个子元素的元素。（不是后代元素）  
 **兼容性**：IE7+,Firefox3.5+,Chrome,Safari,Opera   

**27.  `   X:last-child`：结构性伪类选择器**  

```
ul > li:last-child {
   color: green;
}
```   
跟first-child相反，last-child取的是父标签的最后一个标签。  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   

**28.  `X:only-child`：结构性伪类选择器**  

```
div p:only-child {  
   color: red;  
}
```   
匹配父元素下仅有的一个子元素，而且是唯一的额一个子元素。等同于·:first-child:last-child或 :nth-child(1):nth-last-child(1)   
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera   

**29.  `X:only-of-type`：结构性伪类选择器**  

```
li:only-of-type {  
   font-weight: bold;  
}
```   
匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera  


**30.  `X:first-of-type`：结构性伪类选择器**  

```
div>p:first-of-type {  
   background:orange;  
}
```   
定位一个父元素下的某个类型的第一个子元素。  
 **兼容性**：IE9+,Firefox3.5+,Chrome,Safari,Opera  






 


        
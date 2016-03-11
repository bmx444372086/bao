## 萌店代码结构  
#### 概述
>萌店是基于nodejs做的业务实现，其代码也遵循mvc的设计模式。

**1. 基本结构**  

```
	-controllers
	-logs
	-modules
	-node_modules
	-public
	-routes
	-utils
	-views
	 index.js
	 package.json
	 readme.txt
	 settings.js
```
* index.js 是程序的主入口，你可以通过node index.js或者 forever start index.js等方式启动[^1]
* modules-views-controllers&routes 分别对应m－v－c（特别需要注意的是router作为路由模块也承担了大部分的业务处理，所以controllers也不是严格意义的c层了）
* utils 中定义了一些**公共的模块**
* public  所有css，js，img等静态资源都是放在该目录中
* node_modules node运行需要一些第三方模块，它们都会放在该目录中，而在package.json中的dependencies字段中可以一一找到相应的名称
* logs 日志目录（线上环境是在 /data/log/node）,它会收集所有node运行时捕获到的异常，和proxy.js 代理请求与响应的数据
* settings.js 已废弃

[^1]: node, forever, pm2等进程管理[link](http://)
**2. util结构**  

```
	-utils
		config.js
		config_development.js
		config_pl.js
		config_production.js
		config_qa.js
		connect-ocs.js
		logger.js
		monitor.js
		proxy.js
		sign.js
		sign2.js
		statistics.js
		statistics2.js
		statisticsPartner.js
		supUrl.js
		tools.js
		verifyCodeHelper.js
		wechat.js
```
util 是萌店最重要的文件之一，其中有一些项目运行所需要的配置文件，和一些通用的自定义模块。  

* config.js 项目启动时会加载该模块，但是config.js 没有定义具体的配置，而是根据系统环境变量NODE_ENV 判断读取development,pl,qa,production相应的文件
* connect-osc.js 阿里云的OCS的连接模块。用来存储用户登录信息
* logger.js 日志模块，其内容都会保存到logs文件夹
* monitor.js 性能监控模块，统计某一功能耗时情况
* proxy.js 萌店页面数据是通过node代理连接服务端业务，不负责数据底层的相关处理
* sign.js 做微信的签名算法
* statistics.js 打点文件
* supUrl.js view层url的处理方法，其可以将object对象转换为url的参数形式，方便开发，并且可以统一添加公共字段
* tools.js 对http的req,res属性做处理，最常用的功能是封装json响应数据，获取用户ip
* verifyCodeHelper.js 风控帮助类，萌店很多业务（领红包，支付，注册）需要做验证码校验，以防止用户刷数据
* wechat.js jsapi的配置信息处理模块

**1. 基本结构**

#### 注意事项
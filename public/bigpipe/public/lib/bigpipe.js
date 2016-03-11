/**
 * 依赖zepto.js
 * 这里其实没有使用css,js的加载，只是使用了content来添加dom。
 * 对于萌店目前的架构，js都是由sea.js模块化管理。所以不会对各个pagelet来加载js。
 */
function Bg () {
  
}

Bg.prototype.onPageletArrive = function (args) {
	var id = args.id,
		content = args.content;
		// css = args.css,
		// js = args.js;

	$('#'+id).html(content);
}

var Bigpipe = new Bg();
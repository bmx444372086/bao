/**
 * bigpipe测试demo
 */
var express = require('express');
var path = require('path');
var http = require('http');
var ejs = require('ejs');
var app = express();
var async = require('async');
var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/index.html', function (req, res) {
  var pagelets = ['test_p1', 'test_p2']; //需要加载的pagelet的id
  //立即返回主页面
  res.render('test', {
    title: "bigpipe",
    pagelets: pagelets
  }, function (err, str) {
    console.log(str);
    if (err) {
      console.log('page error');
    } else {
      res.write(str);
    }
  });
  //并发请求服务端数据以便生成各pagelet
  async.parallel({
    pagelet1: function (fn) {
      //模拟请求数据
      setTimeout(function () {
        res.render('test_p1', {
          title: "这是pagelet1"
        }, function (err, str) {
          var args = {
            id: 'test_p1',
            content: str,
            css: [],
            js: []
          }
          res.write(pipeWrapper(args));
          fn(err, null);
        });
      }, 1000);
    },
    pagelet2: function (fn) {
      //模拟请求数据
      setTimeout(function () {
        res.render('test_p2', {
          title: "这是pagelet2"
        }, function (err, str) {
          var args = {
            id: 'test_p2',
            content: str,
            css: [],
            js: []
          }
          res.write(pipeWrapper(args));
          fn(err, null);
        });
      }, 2000);
    }
  }, function (err, result) {
    var end_str = '</body></html>';
    res.end(end_str);
  });

  //辅助函数，包装返回的html
  function pipeWrapper (args) {
    var s1 = "<script>Bigpipe.onPageletArrive(",
        s2 = ")</script>";
    return s1 + JSON.stringify(args) + s2;
  }
});
 
http.createServer(app).listen(port);
console.log("start at port  " + port);
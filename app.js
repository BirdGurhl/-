var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');   //日志

var indexRouter = require('./routes/index');  //导入路由对象
var accountRouter = require('./routes/api/account');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //指定模板文件的存放目录
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());  //body-player中间件 post请求数据解析
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //静态资源中间件 目录映射

app.use('/', indexRouter);  //应用路由对象
app.use('/api', accountRouter); //给该路由对象加上访问路径前缀

// catch 404 and forward to error handler   404处理
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler  错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

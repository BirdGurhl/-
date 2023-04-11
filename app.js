var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');   //日志

var indexRouter = require('./routes/index');  //导入路由对象
var accountRouter = require('./routes/api/account');

var app = express();

const session = require('express-session')
const mongoStore = require('connect-mongo')
let {DBHOST,DBPORT,DBNAME} = require(__dirname + '/config')

app.use(session({
    name: 'sid',      // 保存 session ID 的 cookie 名称，默认值是 connect.sid
    secret: 'onepiece',   // 签名，加密字符串。 使用该字符串来加密session数据，自定义
    saveUninitialized: false,   // 是否为每次请求都设置一个cookie用来存储session的id,默认为 true
    resave: true,                // 是否在每次请求时重新保存session,默认为 true。
    store: mongoStore.create({ mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` }),   // session 存储方式,connect-mongo 中间件会自动完成session在数据库中的增删改查，默认集合名 sessions
    cookie: {
        httpOnly: true,  // 开启后前端无法通过 document.cookie 获取cookie
        maxAge: 1000 * 60 * 1   // 1分钟过期
    }
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //指定模板文件的存放目录
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());  //body-player中间件 post请求数据解析
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('onepiece'));
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

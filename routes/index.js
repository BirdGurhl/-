var express = require('express');
var router = express.Router();

const md5 = require('md5')
const accountModel = require('../model/accountModel');
const userModel = require('../model/userModel');
const checkLogin = function (req, res, next) {
  if (!req.session.name) {
    // 没有登录过
    res.redirect('/login')
  }
  next()
}

router.get('/', function (req, res, next) {
  res.redirect('/list')
});

// 登录
router.get('/login', function (req, res, next) {
  res.render('index', { title: '登录', url: '/login' })
});


router.post('/login', function (req, res, next) {
  let { name, password } = req.body
  if (!name || !password) return
  userModel.findOne({ name: name, password: md5(password) })
    .then(user => {
      if (!req.session.name) {
        req.session.name = user.name
      }
      // 如果用户选择“7天免登录”选项，则将maxAge设置为7天
      if (req.body.save) {
        req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000; // 7天（以毫秒为单位）
        console.log(req.cookies);
        // res.cookie('sid', req.cookies.sid, { maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.cookie('sid', req.session.id, { maxAge: 7 * 24 * 60 * 60 * 1000 ,signed:true}); // 如果直接使用服务器上的sessionid,要签名
      } else {
        req.session.cookie.maxAge = 60 * 1000; // 1分钟
        // res.cookie('sid', req.cookies.id, { maxAge: 60 * 1000 });
        res.cookie('sid', req.session.id, { maxAge: 60 * 1000 ,signed:true}); // 如果直接使用服务器上的sessionid,要签名
      }
      res.redirect('/list')
    })
    .catch(err => {
      console.error(err);
      res.send('登录失败')
    });
});

// 注册
router.get('/reg', function (req, res, next) {
  res.render('index', { title: '注册', url: '/reg' })
});

router.post('/reg', function (req, res, next) {
  let { name, password } = req.body
  userModel.create({ name: name, password: md5(password) })
    .then(user => {
      req.session.name = user.name
      res.redirect('/')
    })
    .catch(err => {
      console.error(err);
      res.send('注册失败')
    });
});


// 获取所有账单
router.get('/list', checkLogin, function (req, res, next) {
  // 获取账本数据
  accountModel.find({}).sort({ date: -1 })
    .then(docs => {
      res.render('list', { bills: docs })
    })
    .catch(err => {
      console.error(err);
      res.send('err')
    });
});

// 删除账单
router.get('/list/:id', checkLogin, function (req, res, next) {
  console.log(req.params);
  // 删除对应id的账单
  let { id } = req.params
  accountModel.findByIdAndDelete(id)
    .then(doc => {
      res.redirect('/list')
    })
    .catch(err => {
      console.error(err);
      res.send('err')
    });
});

// 添加账单页面
router.get('/account', checkLogin, function (req, res, next) {
  res.render('add')
});

// 添加账单
router.post('/account', checkLogin, function (req, res, next) {

  console.log('----req.body-----');
  console.log(req.body);
  console.log('----req.body-----');
  // 拿到数据后，持久化保存，写入数据库
  accountModel.create({
    ...req.body,
    date: new Date(req.body.date),
    money: Number(req.body.money)
  }).then((docs) => {
    console.log(docs);
    res.redirect('/list')
  }).catch((err) => {
    console.error(err);
  });
});



module.exports = router;

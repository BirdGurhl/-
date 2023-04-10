var express = require('express');
var router = express.Router();

const md5 = require('md5')
const accountModel = require('../model/accountModel');
const userModel = require('../model/userModel');
const checkLogin = function (req, res, next) {
  if (!req.session.name) {
    // 没有登录过
    res.redirect('/')
  }
  next()
}

router.get('/', function (req, res, next) {
  res.render('index', { title: '登录', url: '/login' })
});

// 登录
router.post('/login', function (req, res, next) {
  console.log(req.body);
  let { name, password } = req.body
  if (!name || !password) return
  userModel.findOne({ name: name, password: md5(password) })
    .then(user => {
      req.session.name = user.name
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
router.get('/list', function (req, res, next) {
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
router.get('/list/:id', function (req, res, next) {
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
router.get('/account', function (req, res, next) {
  res.render('add')
});

// 添加账单
router.post('/account', function (req, res, next) {

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

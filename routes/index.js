var express = require('express');
var router = express.Router();

// 处理文件上传的插件
const formidable = require('formidable');
const accountModel = require('../model/accountModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/list')
});


router.post('/portrait', function (req, res, next) {

  // 创建 form 对象
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + '/../public/images',   //上传文件的保存目录  
    keepExtensions: true   //保持文件后缀
  })

  // 解析 post 请求报文 .parse(request, callback)
  form.parse(req, (err, fields, files) => {
    console.log(fields);  //报文中除了文件类型以外的数据，像body-player
    console.log(files);   //文件类型的数据
    res.redirect('/images/' + files.portrait.newFilename)
  })
});


router.get('/list', function (req, res, next) {
  // 获取账本数据
  accountModel.find({}).sort({date:-1})
  .then(docs => {
    res.render('list',{bills:docs})
  })
  .catch(err => {
    console.error(err);
    res.send('err')
  });
});

router.get('/list/:id', function (req, res, next) {
    console.log(req.params);
    // 删除对应id的账单
    let {id} = req.params
    accountModel.findByIdAndDelete(id)
    .then(doc => {
      res.redirect('/list')
    })
    .catch(err => {
      console.error(err);
      res.send('err')
    });
});


router.get('/account', function (req, res, next) {
  res.render('add')
});

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

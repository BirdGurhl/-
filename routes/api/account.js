var express = require('express');
var router = express.Router();
const accountModel = require('../../model/accountModel');



/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

// 获取所有账单
router.get('/list', function (req, res, next) {
    // 获取账本数据
    accountModel.find({}).sort({ date: -1 })
        .then(docs => {
            res.json({
                code: '200',
                msg: '成功',
                data: docs
            })
        })
        .catch(err => {
            console.error(err);
            res.json({
                code: '403',
                msg: '失败',
                data: null
            })
        });
});
// 获取单挑账单
router.get('/list/:id', function (req, res, next) {
    let { id } = req.params
    accountModel.findById(id)
        .then(docs => {
            res.json({
                code: '200',
                msg: '成功',
                data: docs
            })
        })
        .catch(err => {
            console.error(err);
            res.json({
                code: '403',
                msg: '失败',
                data: null
            })
        });
});

//删除账单
router.delete('/list/:id', function (req, res, next) {
    // console.log(req.params);
    // 删除对应id的账单
    let { id } = req.params
    accountModel.findByIdAndDelete(id)
        .then(doc => {
            res.json({
                code: '200',
                msg: '成功',
                data: doc
            })
        })
        .catch(err => {
            console.error(err);
            res.json({
                code: '403',
                msg: '失败',
                data: null
            })
        });
});

// 添加账单
router.post('/account', function (req, res, next) {
    // 拿到数据后，持久化保存，写入数据库
    accountModel.create({
        ...req.body,
        date: req.body.date ? new Date(req.body.date) : Date.now(),
        money: Number(req.body.money)
    }).then((docs) => {
        res.json({
            code: '200',
            msg: '成功',
            data: docs
        })
    }).catch((err) => {
        console.error(err);
        res.json({
            code: '403',
            msg: '失败',
            data: null
        })
    });
});


module.exports = router;

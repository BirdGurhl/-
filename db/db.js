module.exports = function (success, error,close) {
    // 引入mongoose模块
    const mongoose = require('mongoose');
    let {DBHOST,DBPORT,DBNAME} = require(__dirname + '/../config')
    // 连接MongoDB数据库
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

    // 设置回调
    mongoose.connection.once('open', () => {
        console.log('连接成功')
        success && success()
    })

    mongoose.connection.on('error', () => {
        console.log('连接失败')
        error && error()
    })

    mongoose.connection.on('close', () => {
        console.log('连接关闭')
        close && close()
    })
}
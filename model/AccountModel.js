const mongoose = require('mongoose');

// 定义记账本集合模型
const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now()},
  type: { type: String, enum: ['支出', '收入'] },
  money: { type: Number, required: true },
  remark: { type: String }
});

const accountModel = mongoose.model('account', accountSchema);

module.exports = accountModel;
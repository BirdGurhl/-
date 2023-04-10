const mongoose = require('mongoose');

// 定义用户集合模型
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true,unique:true},
  password: { type: String, required: true }
});

const userModel = mongoose.model('user', UserSchema);

module.exports = userModel;
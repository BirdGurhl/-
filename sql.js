/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 50015
 Source Host           : localhost:27017
 Source Schema         : demo

 Target Server Type    : MongoDB
 Target Server Version : 50015
 File Encoding         : 65001

 Date: 10/04/2023 15:17:43
*/


// ----------------------------
// Collection structure for accounts
// ----------------------------
db.getCollection("accounts").drop();
db.createCollection("accounts");

// ----------------------------
// Documents of accounts
// ----------------------------
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722be"),
    name: "出售二手物品",
    date: ISODate("2023-04-05T00:00:00.000Z"),
    type: "收入",
    money: NumberInt("200"),
    remark: "出售了一些闲置物品",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722bb"),
    name: "发工资",
    date: ISODate("2023-04-08T00:00:00.000Z"),
    type: "收入",
    money: NumberInt("5000"),
    remark: "发放了员工的月薪",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722bc"),
    name: "买电影票",
    date: ISODate("2023-04-07T00:00:00.000Z"),
    type: "支出",
    money: NumberInt("60"),
    remark: "看了最新的电影",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722c2"),
    name: "购买文具",
    date: ISODate("2023-04-01T00:00:00.000Z"),
    type: "支出",
    money: NumberInt("50"),
    remark: "购买了一些写作用品",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722c3"),
    name: "赚取兼职收入",
    date: ISODate("2023-03-31T00:00:00.000Z"),
    type: "收入",
    money: NumberInt("500"),
    remark: "完成了一份兼职工作",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6432894f4d9fdf4bba9722c0"),
    name: "还信用卡",
    date: ISODate("2023-04-03T00:00:00.000Z"),
    type: "支出",
    money: NumberInt("2000"),
    remark: "还了上个月的信用卡账单",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6433ac8a83915bda7a88c52d"),
    name: "早餐",
    date: ISODate("2023-04-10T00:00:00.000Z"),
    type: "支出",
    money: NumberInt("5"),
    remark: "不好吃",
    __v: NumberInt("0")
} ]);
db.getCollection("accounts").insert([ {
    _id: ObjectId("6433afab064008dd419af02f"),
    name: "买烟",
    date: ISODate("2023-04-10T06:41:47.962Z"),
    type: "支出",
    money: NumberInt("23"),
    remark: "百乐蓝莓爆珠",
    __v: NumberInt("0")
} ]);

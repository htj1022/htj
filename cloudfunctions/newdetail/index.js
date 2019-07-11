// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require("request-promise")
// 云函数入口函数
exports.main = async (event, context) => {
  return rp (`http://api.dagoogle.cn/news/ndetail?aid=${event.aid}`)
  .then(res=>{
    return res
  }).catch(err=>{
    console.log(err)
  })
}
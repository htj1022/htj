// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
 //引入request-promise库
var rp = require("request-promise")
// 云函数入口函数
exports.main =(event, context) => {
  return rp(`http://api.dagoogle.cn/news/nlist?cid=${event.cid}&page=${event.page}&psize=${event.psize}`)
   .then(res=>{
     return res;
   }).catch(err=>{
     console.log(err)
   })
}
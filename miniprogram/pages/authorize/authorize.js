// pages/authorize/authorize.js
//获取全局的变量
var app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    logged: false,
    counterId: '',
    openid:"",
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')//获取用户信息是否在当前版本可用
  },
  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    this.setData({
      openid: app.globalData.openid
    })
  },

  //点击授权登录
  bindGetUserInfo: function (e) {
    //如果确认授权登录
    if (!this.logged && e.detail.userInfo) {
      //console.log(app.globalData.openid)
      this.setData({
        logged: true,
      })
      //先插入数据
      db.collection('user').add({
        data: {
          openId: app.globalData.openid,//用户的唯一标识
          nickName: e.detail.userInfo.nickName,//微信昵称
          avatarUrl: e.detail.userInfo.avatarUrl,//微信头像
        },
        success: res => {
          this.setData({
            //新增的时候将用户返回的唯一id保存
            counterId: res._id,
          })
          wx.showToast({
            title: '新增记录成功',
          })
          //跳到首页，将其他页面关闭
          wx.switchTab({
            url: '/pages/home/home',
          })
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
          //先查找是否有相同的_openid
          db.collection('user').where({
            _openid: this.data.openid
          })
          .get({
            success: res => {
              //如果找到了，就把旧数据删除
              console.log(res.data)
              if(res.data.length>1){
                db.collection('user').doc(res.data[0]._id).remove({
                  success:res=>{
                    console.log('删除旧数据成功')
                  }
                })
              }
            },
            fail: err => {
                console.log(err)
            }
          })
        },
        fail: err => {
          wx.showToast({
            title: '新增记录失败',
          })
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    }
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
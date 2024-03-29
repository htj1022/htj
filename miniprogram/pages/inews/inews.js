// pages/inews/inews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title: '新闻内容' })  
      //接收home页面传来的参数
     // console.log(options.id)
      //请求详情云函数
      wx.cloud.callFunction({
        name:"newdetail",
        data:{
          aid: options.id
        }
      }).then(res=>{
        //console.log(res.result)
        var obj = JSON.parse(res.result)
       //将取到的数据存在list里
        this.setData({
            list:obj.data
        })
      }).catch(err => {
         console.log(err)
      })
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
// pages/send/send.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     comId:""//政务
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.comId)
     this.setData({
       comId: options.comId
     })
  },
  //跳到图文页
  toSendtails(){
    let comId = this.data.comId
    wx.navigateTo({
      url: "/pages/senddetails/senddetails?comId=" + comId,
    })
  },
  //跳到文章页
  toCamdtails(){
    let comId = this.data.comId
    wx.navigateTo({
      url: "/pages/camdetails/camdetails?comId=" + comId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '选择发布类型',
    })
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
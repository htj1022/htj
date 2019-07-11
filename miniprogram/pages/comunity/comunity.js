// pages/comunity/comunity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showGoTop: false // 是否显示返回顶部
  },
  // 获取滚动条当前位置，并显隐按钮
  onPageScroll: function (e) {
    if (e.scrollTop > 50) {
      this.setData({
        showGoTop: true
      })
    } else {
      this.setData({
        showGoTop: false
      })
    }
  },
  // 回到顶部
  goTop: function (e) {
    //当wx.pageScrollTo为真.页面肯定已经滚动
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  //点击跳到发布页
  gosay(){
    let comId = this.data.comId
    wx.navigateTo({
      url: '/pages/send/send?comId=' + comId,
    })
  },
  //点击跳到详情页面
  jump:function(e){
    var id=e.target.dataset.id
     wx.navigateTo({
       url: "/pages/comdetails/comdetails?id="+id,
     })
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
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: '社区' })  
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
  onShareAppMessage: function (res) {
    if (res.from === "button") {
      console.log(res.target)
    }
    return {
      title: "转发",
      path: '/pages/comunity/comunity'
    }
  }
})
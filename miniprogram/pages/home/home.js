// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration:500,
    list:[],
    active: 0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  
  },
  onChange(event) {
    this.load(event.detail.index + 1)
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
  },
  //使用新闻列表云函数,请求新闻数据
  load(val){
   // console.log(val)
    wx.cloud.callFunction({
      name:"news",
      data:{
        cid:val,
        page:2,
        psize:10
      }
    }).then(res=>{
      //将结果转为js对象
      var obj = JSON.parse(res.result)
      console.log(obj.data.list)
      //将取到的数据在data里
      this.setData({
        list:obj.data.list
      })
    }).catch(err=>{
      console.log(err)
    })
  },
   //页面传参跳转
  jump(e){
    //页面需要传值的id
    var id = e.target.dataset.newsid
    //console.log(id)
    wx.navigateTo({
      url: '/pages/inews/inews?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: res => {
            console.log(res)
            }
          })
        } else {//未授权，跳到授权页面
          wx.redirectTo({
            url: '../authorize/authorize',//授权页面
          })
        }
      }
    })
    
      this.load(1)
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
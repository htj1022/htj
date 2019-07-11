// pages/comdetails/comdetails.js
const app=getApp()
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputValue: '',
    show: false,
    message:"",
    hiddenn:false,
    detailId:"",//从社区页面传过来的id
    resId:""
  },
  //点击返回上一页
  goJump(){
    wx.navigateBack({
      delta: 2
    })
  },
  //当input框有焦点时
  focus() {
    this.setData({ show: true, hiddenn: true });
  },
  //保存客户的评论信息
  onChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      message: event.detail
    })
  },
  //关闭弹出层
  onClose() {
    this.setData({ show: false, hiddenn: false });
  },
  //点击发表
  prove() {
    //如果用户输入了评论
    if (this.data.message!=""){
      //页面加载的时候取到存在缓存里的APPid
      let openid = wx.getStorageSync('openid')
      let time = new Date()
      let myDate = time.toLocaleDateString()
      //客户的评论信息一起保存
      console.log(this.data.message, openid, myDate)
      wx.showToast({
        title: '发表评论成功',
        icon:'loading',
        mask:true,
        duration:2000
      })
      db.collection('Detailed_comments').add({
        //将用户id，当前时间，详情id，评论存到数据库
        data:{
          openid: openid,
          myDate: myDate,
          detailId: this.data.detailId,
          message: this.data.message,
        },success:res=>{
            this.setData({
              resId:res._id 
            })
          wx.showToast({
            title: '评论成功',
          })
        },fail:err=>{
          console.log(err)
          wx.showToast({
            title: '评论失败',
          })
        }
      })
    }else{
      wx.showToast({
        title:"请输入评论内容",
        duration:2000
      })
    }

  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      detailId: options.id
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title: '社区-详情' })  
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
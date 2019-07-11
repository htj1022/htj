// pages/senddetails/senddetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comId:"",
    title:"",//标题
    container:"",//内容
    images:[],//照片
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
  //保存标题
  onChange1(event){
   // console.log(event.detail);
    this.setData({
      title: event.detail
    })
  },
  //保存内容
  onChange2(event) {
   // console.log(event.detail);
    this.setData({
      container: event.detail
    })
  },
  //保存多张照片
  uploadImg(){
    //选中图片
    wx.chooseImage({
      count:9,
      sizeType: ["original", "compressed"],
      sourceType: ["album", "camera"],
      success:res=> {
        const tempFiles=res.tempFilePaths;//这是一个数组
        console.log(tempFiles)
        //将用户选中的图片保存
        this.setData({
          images: tempFiles
        })
      },
    })
  },
  //点击发布时
  clickSend(){
    wx.showLoading({
      title: '发布中',
    })
    //上传图片到云存储
    //创建promise数组
    let promiseArr=[];
    //创建循环
    for(let i=0;i<this.data.images.length;i++){
      //创建promise数组中
      promiseArr.push(new Promise((reslove,reject)=>{
          //获取当前上传的图片
          var item=this.data.images[i];
          //创建正则表达式拆分文件后缀
        let suffix = /\.\w+$/.exec(item)[0]
      }))
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   wx.setNavigationBarTitle({
     title: '社区-发布话题',
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
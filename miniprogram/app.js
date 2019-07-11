//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'web-user-yytesy1-31o80'  
      })
    }
    // 登录;用户打开小程序时，会调用wx.login获取code，将code发送到后台获取openid。后台保存opendi并返回用户信息
    wx.login({
      success: res => {
        //  获取凭证
        var code = res.code;
        //如果有凭证
        if (code) {
          // 调用云函数取得客户的appid
          wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
              //console.log('[云函数] [login] user openid: ', res.result.openid)
              //存储在全局变量里
              this.globalData.openid = res.result.openid
              //存储在缓存里
              wx.setStorageSync('openid', res.result.openid)
            },
            fail: err => {
              console.error('[云函数] [login] 调用失败', err)
            }
          })
        } else {
          console.log('获取用户登录失败：' + res.errMsg);
        }
      }
    })

  },
  globalData : {
    openid: ""//登录用户的唯一标识
  }
})

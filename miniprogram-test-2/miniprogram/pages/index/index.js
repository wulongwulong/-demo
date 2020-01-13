//index.js
const app = getApp() ;
var detail = 1 ;

Page({

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('muAudio')
  },
  'abc':"123",
  data: {
    poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000' ,
    name : '此时此刻--献给翔baby',
    author : '许巍',
    src:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46' ,

    addItemContent : '123456',

    
    imgUrls: [
    '/images/img_tab1.png',
    '/images/img_tab2.png',
    '/images/img_tab3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
    },
//播放
  audioPlay :function(options){
    this.audioCtx.play()
    },
  //暂停
  audioStop: function (options) {
    this.audioCtx.pause()
  },
  //回到开头
  audioBackStart: function (options) {
    this.audioCtx.seek(0)//如果想回到 23秒 seek(23)
  },

    //页面跳转
    go :function(){
      wx.navigateTo({
        url: '../post/post',
      })
    },
    //欢迎界面
  wel: function (){
    wx.switchTab({
       url: '../welcome/welcome',
     })
  },
  //video界面
  mVideo : function () {
    wx.navigateTo({
        url: '../video/video',
      })
  },
  //map 地图
  mMap : function () {
    wx.switchTab({
      url: '../map/map',
    })
  },
  //拍照
  mCamera: function (){
    wx.switchTab({
      url: '../camera/camera',
    })
  },
  //登录
  myLogin: function(){
    wx.navigateTo({
      url: '../login/login',
    });
  },
  //splash页面
  mySplash: function(){
    wx.navigateTo({
      url: '../splash/splash',
    });
  },

  /**
* 用户分享自定义
*/
  onShareAppMessage: function (res) {
    return {
      title: '哈根达斯冰激凌5折特惠',
      path: '/pages/index/index?goods_id=' + wx.getStorageSync("goods_id"),
      // imageUrl: 'http://static.e-mallchina.com/pic/product/brand/detail/hgds.jpg'
      imageUrl: '/images/img_tab1.png'
      //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径。支持PNG及JPG。显示图长宽比是 5:4。
    }
  },


})

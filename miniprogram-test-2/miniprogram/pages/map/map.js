Page({

  /**
   * 页面的初始数据
   */
  data: {
    mMark :[{
      id: '001',
      latitude:'39.917940',
      longitude:'116.397140',
      // width: '30',
      // height: '30',
      // iconPath: "/images/mark.png",
      lable: { content : '故宫博物院'},
      
      callout: {
        content: '我是这个气泡',
        fontSize: 14,
        color: '#ffffff',
        bgColor: '#000000',
        padding: 8,
        borderRadius: 4,
        boxShadow: '4px 8px 16px 0 rgba(0)'
      }
     
    }
    ]
  },
  
  //视野改变
  areachange: function (){
    // wx.showToast({
    //   title: '视野移动了',
    //   icon: 'none',
    //   duration: 1000,
    //   mask: true
    // })

  }
  ,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
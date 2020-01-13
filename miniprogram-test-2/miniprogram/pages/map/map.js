Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: "31.217497",
    longitude: "121.36527",
    //公司地址：  121.509395, 31.236439
    //我的地址： 121.617507,31.250091
    mMark :[{
      id: '001',
      latitude:'31.217497',
      longitude:'121.36527',
      // width: '30',
      // height: '30',
      // iconPath: "/images/mark.png",
      lable: { content : '陆家嘴'},
      
      callout: {
        content: '你在这里',
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

  },
  /**
   * 按钮定位点击事件
   */
  location: function (e){
    switch(e.target.id){
      case "btnHome" :
        //弹框
        wx.showModal({
          title: '当前位置',
          content: "纬度:" + this.data.mMark[0].longitude + ",经度:" + this.data.mMark[0].latitude,
          
        })
        this.setData({ latitude: this.data.mMark[0].latitude, longitude: this.data.mMark[0].longitude })
        break;

      case "btnCompany" :
        wx.showToast({
          title: '成功',
          icon: 'succes',
          duration: 5000,
          mask: true
        })
      
      break;
      case "btncurr":

        wx.getLocation({
          type: 'gcj02',
          success: (res) => {
            var latitude = res.latitude
            var longitude = res.longitude
            var speed = res.speed
            var accuracy = res.accuracy
            this.setData({ latitude: latitude, longitude: longitude })
            // wx.showModal({
            //   title: '当前位置',
            //   content: '经度' + res.longitude + '纬度' + res.latitude,
            // })
          }
        })
      break;



      


    }



  },

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
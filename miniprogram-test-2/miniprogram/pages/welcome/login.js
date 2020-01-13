var timer; // 计时器
var startTime = 0;
// 倒计时
var Countdown = function () {
  timer = setTimeout(function () {
    console.log("----Countdown----");
    startTime++;
    Countdown();
  }, 1000);
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    countTTime: startTime ,
    
  },

  // 自定义的开始按钮
  startBtn: function () {
    console.log("开始按钮");
    Countdown();
   

  },
  //界面中绑定数据
  userNameFn: function (event) {
    this.setData({
      userName: event.detail.value
    })
  }
})
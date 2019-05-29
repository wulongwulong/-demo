/** post js */

Page({

  
  data:{
     myData : 2 

  },
  //
  backDate: function (){
    // 往上一级页面传参
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; // 当前页面
    var prevPage = pages[pages.length - 2]; // 上一级页面
    // 直接调用上一级页面Page对象，存储数据到上一级页面中
    var str = this.data.myData ;
    console.log(str);

    prevPage.setData({
      data:{
        'addItemContent': str,

      },
      'abc':'aaa'
    });
    console.log(prevPage);

  }

})

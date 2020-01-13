Page({

  data: {

    imgs: [

      "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1578896905&di=d543496d5223e11868deb19cb8c00f07&src=http://img2.a0bi.com/upload/ttq/20140718/1405656574094.jpg",

      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578906989356&di=1037bb3863aa92a2eaa805ab3a467f1c&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw640h915%2F20180128%2Fb4b9-fyqzcxh6359757.jpg",

      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578906989356&di=415d9ec69488b1b712c4712e5acf5d75&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F90f260a51ffd69b33df57a4cdec472313739093d.jpg",

    ],

    img: "https://img.kaiyanapp.com/7ff70fb62f596267ea863e1acb4fa484.jpeg",

  },

  start() {

    wx.navigateTo({

      url: '../home/home'

    })

    //  wx.redirectTo({ url: '../index/index' })

  },

})
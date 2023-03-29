// pages/switch/switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  gotoindex(){
    //console.log("11");
    wx.switchTab({//页面是tabBar跳转才有效
      url:'/pages/index/index'
    })
  }, 
  gotonavigator(){
    wx.navigateTo({
      url:'/pages/navigator/navigator?name=zs&age=18',
      success:()=>{
        console.log('成功的回调');
      }
    })
  },
  handler(){
    this.setData({
      count:this.data.count+1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    //console.log("111");//当页面刷新会被触发
    this.setData({
      count:0
    }),
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
   console.log('触发了上拉触底事件');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
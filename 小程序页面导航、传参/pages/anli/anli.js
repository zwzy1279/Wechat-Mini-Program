// pages/anli/anli.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList:[]
  },
  getColor(){
    wx.showLoading({title:'数据加载中'});//提示loading效果
    wx.request({
      url:'https://www.escook.cn/api/color',
      method:"GET",
      success:({data:res})=>{
        //console.log(res);
        this.setData({
          colorList:[...this.data.colorList,...res.data]
        })
      },
        complete:()=>{
          wx.hideLoading();
        }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log('22');
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    //上拉触底及调用获取颜色
    this.getColor();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
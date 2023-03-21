// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'努力学习',
    url:'https://img2.baidu.com/it/u=579782103,1879316808&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1679418000&t=0753bfff4676b1118982af4cbd478ee9',
    num:Math.random()*10,
    count:0,
    inputcontent:'',
    arr:[1,2,3,4,5,6,7],
  },
  handler(){
    console.log('事件1被触发了');
  },
  handler2(e,a){//默认形式参数第一个是事件对象（事件对象只需要在形式参数接收，不需要在实际参数处传了），第一后面的才是传进来的参数
    console.log('事件2被触发了');
    console.log(e,a);
    //e:{type: "tap", timeStamp: 50893, target: {…}, currentTarget: {…}, mark: {…}, …}
  },
  handler3(e,a){
    //传进来的参数不能通过写在括号里拿到，拿不到的，结果为undefined
    //console.log(a);
    //在函数处理中，通过event.target.dataset.参数名才能拿到具体参数的值
    console.log(e.target.dataset.age);//3
  },
  handler4(){
    //console.log(this);//整个Page中的属性或者方法
    //修改data中的count
    //this.data.count=this.data.count+1;//无效
    //console.log(this.data.count++);//每次点击可以打印出新值
    //那么怎么办呢
    this.setData({
      count:this.data.count+1,//++无效
    })
  },
  inputhandler(e){
    console.log(e);//当输入东西时，才会触发函数
    console.log(e.detail.value);//e.detail.value是变化过后，文本框最新的值
    this.setData({
      inputcontent:e.detail.value,//实现数据双向绑定
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
// pages/video-detail/index.js
import { getMVURL, getMVDetail, getRelatedVideo } from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo: {},
    mvDetail: {},
    relatedVideos: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    this.getPageData(id)
  },

  // 获取页面数据
  getPageData(id) {
    getMVURL({id}).then(res => {
      console.log(res);
      this.setData({
        mvURLInfo: res.data
      })
    })
    getMVDetail({mvid: id}).then(res => {
      console.log(res);
      this.setData({
        mvDetail:res.data
      })
    })
    getRelatedVideo({id}).then(res => {
      console.log(res);
      this.setData({
        relatedVideos: res.data
      })
    })
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
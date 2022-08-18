// pages/home-video/index.js
import { getTopMV } from "../../service/api_video"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTopMVData(0)
  },

  /**获取mv列表数据 */
  getTopMVData(offset) {
    if(!this.data.hasMore && offset !== 0) return
    wx.showNavigationBarLoading()
    getTopMV({
      offset,
      limit: 10,
    }).then((res) => {
      if(offset === 0) {
        this.setData({ topMVs: res.data})
      }else {
        this.setData({ topMVs: this.data.topMVs.concat(res.data)})
      }
      this.setData({ hasMore: res.hasMore })
      wx.hideNavigationBarLoading()
      if(offset === 0) {
        wx.stopPullDownRefresh()
      }
    })
  },

  /**处理mv点击 */
  handleVideoItemClick(event) {
    const id = event.target.dataset.item.id
    wx.navigateTo({
      url: `/pages/video-detail/index?id=${id}`,
    })
  },

  onReachBottom() {
    this.getTopMVData(this.data.topMVs.length)
  },

  onPullDownRefresh() {
    console.log('2222');
    this.getTopMVData(0)
  }
})

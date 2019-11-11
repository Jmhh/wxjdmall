
import {
  API
} from '../../utils/api.js'
let api = new API()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftItems: [],
    navRightItems: [],
    curIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getProductions((res) => {
      this.setData({
        navLeftItems: res.navLeftItems,
        navRightItems: res.navRightItems
      })
    })
  },
  /*
  * 记录左侧点击的按钮下标 
  */
  switchRightTab(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  /**
   * 点击进入列表页
   * 列表页参数 title
  */
  showListView(e) {
    let txt = e.currentTarget.dataset.txt
    wx.navigateTo({
      url: '/pages/list/index?title=' + txt
    })
  }
})
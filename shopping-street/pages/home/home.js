// pages/home/home.js
import { getMultiData, getGoodsData } from "../../service/home"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],
    recommendList: [],
    fashionList: [],
    tabListData: ["流行", "新款", "精选"],
    tabListTitle: ["pop", "new", "sell"],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    currenTabIndex: 0,
    isTabFixed: false,
    tabScrolTop: 534
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getMultiData().then(res => {
      let data = res.data.data;
      console.log(data)

      let { banner, dKeyword, keywords, recommend } = data;
      this.setData({
        bannerList: banner.list,
        recommendList: [...recommend.list],
        fashionList: [...recommend.list, ...recommend.list]
      })
    })

    this._getGoodsData(this.data.currenTabIndex)
  },

  _getGoodsData(index) {
    let type = this.data.tabListTitle[index];
    let good = this.data.goods[type];
    let page = good.page + 1;
    getGoodsData(type, page).then(res => {
      let data = res.data.data;
      let typeKey = `goods.${type}.list`;
      let pagekey = `goods.${type}.page`;

      this.setData({
        [typeKey]: [...good.list, ...data.list],
        [pagekey]: page
      })

      // console.log(data.list)
    })
  },

  handleClick(event) {
    let index = event.detail.index;
    if (this.data.currenTabIndex == index) return;
    this.setData({
      currenTabIndex: index
    });

    if (!this.data.goods[this.data.tabListTitle[this.data.currenTabIndex]].list.length) {
      this._getGoodsData(event.detail.index);
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("add")
    this._getGoodsData(this.data.currenTabIndex)
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
    setTimeout(() => {
      console.log('kaishi ');
      wx.createSelectorQuery().select("#tab-control").boundingClientRect(rect => {
        this.data.tabScrolTop = rect.top;
        console.log(rect.top);
      }).exec()
    }, 2000)
  },

  onPageScroll(options) {
    let isFixed = options.scrollTop >= this.data.tabScrolTop;
    if (this.data.isTabFixed != isFixed) {
      console.log("change")
      this.setData({
        isTabFixed: isFixed
      })
    }
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})
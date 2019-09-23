import {getCategory, 
getSubcategory,
getCategoryDetail
}from '../../service/category.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    categoryData: {
    },
    currentIndex: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCategory()
  },

  _getCategory() {
    getCategory().then(res => {
      // 1.获取categories
      const categories = res.data.data.category.list;
      console.log("categories", categories);

      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }

      // 3.修改data中的数据
      this.setData({
        categories: categories,
        categoryData: categoryData
      })

      // 4.请求第一个类别的数据
      // this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      // this._getCategoryDetail(0)
    })
  },

  onItemClick(event) {
    this.setData({
      currentIndex: event.target.dataset.index
    })
    // console.log(event);
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabListData: {
      type: Array
    },
    selectedIndex: {
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(event) {
      let index = event.currentTarget.dataset.itemIndex
      this.setData({
        selectedIndex: index
      })

      this.triggerEvent("onChangeTabItem", { index, title: this.properties.tabListData[index]})
    }
  }
})

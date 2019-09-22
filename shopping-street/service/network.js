export default function request(options) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: options.url,
      data: options.data || {},
      header: options.header || {},
      method: options.method || "get",
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    })
  })
}
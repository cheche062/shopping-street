
const BASEURL = "http://123.207.32.32:8000/api/v1";
export default function request(options) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: BASEURL + options.url,
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
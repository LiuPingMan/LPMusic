const BASE_URL = 'http://123.207.32.32:9001'
class LPRequest {
  constructor() { }
  request(config) {
    const { url, method, data } = config
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method,
        data,
        success: function (res) {
          resolve(res)
        },
        fail: function (err) {
          reject(err)
        }
      })
    })
  }
  get(config) {
    const { url, params } = config
    return this.request({
      url,
      method: 'GET',
      data: params
    })
  }
  post(config) {
    const { url, data } = config

    return this.request({
      url,
      method: 'POST',
      data
    })
  }

}
const lpRequest = new LPRequest()
export default lpRequest
// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    icon: "",
    text: "",
    temprature: "",
    windDir: "",
    windScale: ""
	},
	
  onLoad() {
    let that = this
    let baseUrl = "https://devapi.qweather.com/v7/weather/now"
    let KEY = "0d6581fad6094dc986c8d55a8d95b563"
    let location = "101120513"
    wx.request({
      url: baseUrl + "?key=" + KEY + "&location=" + location,
      success: function(res) {
        console.log(res)
        that.setData({
              text: res.data.now.text,
              temprature: res.data.now.temp,
              windDir: res.data.now.windDir,
							windScale: res.data.now.windScale,
							icon: "../../images/" + res.data.now.icon + ".svg"
				})
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }
})
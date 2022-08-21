export default function (selecter) {
  return new Promise(resolve => {
    const query = wx.createSelectorQuery()
    query.select(selecter).boundingClientRect()
    query.exec(res => {
      resolve(res[0])
    })
  })

}
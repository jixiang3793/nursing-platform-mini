export default {
  pages: [
    // 'pages/index/index',
    'pages/home/home',
    'pages/order/order',
    'pages/message/message',
    'pages/mine/mine',
    // 'pages/item/item'
  ],
  tabBar: {
    backgroundColor: '#fff',
    color: '#999',
    selectedColor: '#1E8AE8',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/home',
        text: '主页',
        iconPath: 'assets/images/home.png',
        selectedIconPath: 'assets/images/home-light.png'
      },
      {
        pagePath: 'pages/order/order',
        text: '订单',
        iconPath: 'assets/images/more.png',
        selectedIconPath: 'assets/images/more-light.png'
      },
      {
        pagePath: 'pages/message/message',
        text: '消息',
        iconPath: 'assets/images/msg.png',
        selectedIconPath: 'assets/images/msg-light.png'
      },
      {
        pagePath: 'pages/mine/mine',
        text: '我的',
        iconPath: 'assets/images/me.png',
        selectedIconPath: 'assets/images/me-light.png'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}

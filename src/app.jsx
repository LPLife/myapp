import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.less'
import 'taro-ui/dist/style/index.scss' 
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/detail/index',
      'pages/welcome/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#dddddd",
      selectedColor: "#16f2e7",
      backgroundColor: "#fff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "找房",
          iconPath: "static/image/icon_home_u.png",
          selectedIconPath: "static/image/icon_home_a.png"
        },
        {
          pagePath: "pages/detail/index",
          text: "发布房源",
          iconPath: "static/image/icon_release_u.png",
          selectedIconPath: "static/image/icon_release_a.png"
        },
        {
          pagePath: "pages/welcome/index",
          text: "我的",
          selectedIconPath: "static/image/icon_user_a.png",
          iconPath: "static/image/icon_user_u.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

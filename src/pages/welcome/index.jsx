import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { str:'make'}
  }
    config = {
      navigationBarTitleText: '欢迎'
    }
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
    Welcome() {
      return <View>Hello, 123456</View>;
    }
    render () {
      let {str} = this.state;
      return (
        <View className='index'>
          <Text className='tip'>欢迎</Text>
          {this.Welcome()}
          {this.props.children}
          {this.props.a}
          { str && str}
        </View>
      )
    }
  }
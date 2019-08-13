import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
export default class Index extends Component {

    config = {
      navigationBarTitleText: '欢迎'
    }
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
        <View className='index'>
          <Text className='tip'>欢迎</Text>
        </View>
      )
    }
  }
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
export default class Index extends Component {

    config = {
      navigationBarTitleText: '详情'
    }
    constructor (props) {
      super(props)
      this.state = { user:{name:'liming',age:12} }
    }

    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
    Header ( user ) {
      let name = user.name
      const renderTitle = () => {
        return(
              user &&
            <View>Welcome, {user.name}</View>  
          ) 
        }
      return (
        <View>
          {/* 重要人士我们要欢迎他三次 */ }
          {renderTitle()}
          {renderTitle()}
          {renderTitle()}
        </View>
      )
    }
    render () {
      let { user } = this.state;
      const value = this.context
      return (
        <View className='index'>
          <Text className='tip'>详情</Text>
          {
            this.Header(user)
          }
            {value} 
        </View>
      )
    }
  }

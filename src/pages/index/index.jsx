import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Welcome from '../welcome/index';
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { date: new Date(),isDisplay:false,loadingStatus:'loading',numbers :[1, 2, 3, 4, 5] }
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    clearInterval(this.timerID)
   }

  componentDidMount () { 
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  tick () {
    // this.setState({
    //   date: new Date()
    // });
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide = () => { }
  handleClick(id){ 
    // Taro.navigateTo({
    //   url: '/pages/logs/index'
    // })
    if(this.state.isDisplay){
      this.setState({
        isDisplay: false,
        loadingStatus: 'fail'
      })
    }else{
      this.setState({
        isDisplay:true,
        loadingStatus: 'no-more'          
      })
    }
  }
  render () {
    let {isDisplay,loadingStatus,numbers} = this.state;
    return (
      <View className='index'>
        <Text className='tip'>Hello world!</Text>
      <View>
        <Button onClick={() => {
          Taro.navigateTo({
            url: '/pages/detail/index'
          })
      }}>确定</Button>
        <Button onClick={this.handleClick.bind(this,7)}>确定</Button>
         {
           isDisplay && <Welcome></Welcome>
         }
         <View>
            {
              {
                'loading': 'loading',
                'fail': <View> 加载失败, 点击重试 </View>,
                'no-more': '没有更多了'
              }[loadingStatus] 
            }
         </View>
          {
            numbers.map((number) => {
              return <View key={String(number)}>{number}</View>
            })
          }
      </View>
      </View>
    )
  }
}

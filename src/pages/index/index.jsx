import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Welcome from '../welcome/index';
import { AtButton,AtCountdown  } from 'taro-ui'
export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0, date: new Date(),isDisplay:false,loadingStatus:'loading',numbers :[1, 2, 3, 4, 5] }
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
    
    // console.log(this.refs);
  }
  tick () {
    // this.setState({
    //   date: new Date()
    // });
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide = () => {


   }
  handleClick(id){ 
    // Taro.navigateTo({
    //   url: '/pages/logs/index'
    // })
    if(this.refs.wel !== undefined && this.refs.wel !== null){
      this.refs.wel.str = 'fdgg33333333333';
      console.log(this.refs.wel.state.str);
    }

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
  setCount(count) {
    this.setState({
      count:count
    })
  }
  onTimeUp () {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }
  render () {
    let {isDisplay,loadingStatus,numbers,count} = this.state;
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
           isDisplay && <Welcome a='dfffffffff' ref='wel'> 1234565gf</Welcome>
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
          {this.context}
      </View>
      <AtButton type='primary'>按钮文案</AtButton>
      <AtCountdown
        isCard
        minutes={1}
        seconds={10}
      />
          <View className = "df">
                  <View>民主</View>
                  <View>和谐</View>
                  <View>进步</View>
          </View>
  
      </View>

    )
  }
}
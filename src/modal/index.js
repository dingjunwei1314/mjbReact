// 引入redux
import { createStore } from 'redux'

// 引入reducer
import reducer from './reducers'

// 创建一个初始化的state
var initState = {
  page:{
    page:1
  }
}

// 创建store
const store = createStore(reducer, initState)

console.log(store.getState())
export default store;
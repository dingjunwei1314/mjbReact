import { combineReducers } from 'redux';

function page(state={}, action) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return {
        page: action.page, 
      }
    default:
     return state  // 没有匹配的action type，返回原来的state
  }
}

export default combineReducers({
  page
})


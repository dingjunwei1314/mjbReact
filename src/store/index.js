import { combineReducers } from 'redux';

let initState={
  name:'mjb',
  age:1
}

function test1(state=initState,action){
  switch(action.type){
    case 'test1':
      return state.name;
    default:
      return state
  }
}

function test2(state=initState,action){
  switch(action.type){
    case 'test2':
      return state.age;
    default:
      return state
  }
}

const todoApp = combineReducers({
  test1,
  test2
})

export default todoApp;
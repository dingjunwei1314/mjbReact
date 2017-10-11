import React from 'react'
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import routers from './router/index'
import { Provider } from 'react-redux'
import store from './modal' 
import axios from './common/js/axios'
window.$http=axios


ReactDOM.render( 
  <Provider store={store}>
    <div>
      {routers}
    </div>
  </Provider>,
  document.getElementById('root'));

// registerServiceWorker();
export default store;
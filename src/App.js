import React from 'react';
import Header from './components/Header/Header'
import Foot from './components/Foot/Foot';
import  './app.css'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {this.props.children}
        <Foot/>
      </div>
    );
  }
}
export default App
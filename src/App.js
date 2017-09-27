import React from 'react';
import { browserHistory } from 'react-router'
import  { Navbar,Nav,NavItem } from 'react-bootstrap';
import  './app.css'
class App extends React.Component {
  constructor(props){
		super(props)
		this.state={
		
    }
  }
  
  mainNav(page){
    browserHistory.push(page)
  }
	componentDidMount() {

	}
  render() {
    let a={
      background:'white',
      border:'none',
      boxShadow:'0px 1px 20px rgba(0,0,0,.1)',
      borderRadius:0
    }
    return (
      <div className="App">
        <Navbar fixedTop style={a} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
                <embed style={{cursor:'pointer'}} src="/static/img/hawkeye_logo_blue.svg" type="image/svg+xml"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.mainNav.bind(this,'/')} eventKey={1}>首页</NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/down')} eventKey={1}>下载</NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/score')} eventKey={1}>“鹰眼”评分体系</NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/about')} eventKey={1}>关于</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;

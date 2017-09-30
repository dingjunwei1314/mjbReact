import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import  { Navbar,Nav,NavItem } from 'react-bootstrap';
import  './app.css'
class App extends React.Component {
  constructor(props){
		super(props)
		this.state={
		
    }
  }
  
  mainNav(page){
    hashHistory.push(page)
  }
	componentDidMount() {
    console.log(this.props)
	}
  render() {
    let a={
      background:'white',
      border:'none',
      boxShadow:'0px 1px 20px rgba(0,0,0,.1)',
      borderRadius:0
    }

    let activePageStyle={
      color:'#5880F3'
    }
    return (
      <div className="App">
        <Navbar fixedTop style={a} inverse collapseOnSelect id="navBar">
          <Navbar.Header>
            <Navbar.Brand>
                <img id="logoSvg" src="/static/img/hawkeye_logo_blue.png" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={this.mainNav.bind(this,'/')} eventKey={1}><span style={ this.props.page.page===1? activePageStyle:null }>首页</span></NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/down')} eventKey={1}><span style={ this.props.page.page===2? activePageStyle:null }>下载</span></NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/score')} eventKey={1}><span style={ this.props.page.page===3? activePageStyle:null }>“鹰眼”评分体系</span></NavItem>
              <NavItem onClick={this.mainNav.bind(this,'/about')} eventKey={1}><span style={ this.props.page.page===4? activePageStyle:null }>关于</span></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {page:state.page}
}

export default connect(mapStateToProps)(App)
import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'
import  { Navbar,Nav,NavItem } from 'react-bootstrap';
class Header extends React.Component {
  mainNav(page){
    browserHistory.push(page)
  }
  render() {
    let activePageStyle={
      color:'#5880F3'
    }
    return (
   
        <Navbar fixedTop className="selfBar" inverse collapseOnSelect id="navBar">
          <Navbar.Header>
            <Navbar.Brand>
                <embed id="logoSvg1" style={{position:'relative',left:'-24px'}} src="/static/img/hawkeye_logo_blue.svg" type="image/svg+xml"/>
                <embed id="logoSvg2" style={{display:'none'}}  src="/static/img/hawkeye_logo_white.svg" type="image/svg+xml"/>
            </Navbar.Brand>
            <Navbar.Toggle/>
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
     
    );
  }
}


function mapStateToProps(state) {
  return {page:state.page}
}

export default connect(mapStateToProps)(Header)
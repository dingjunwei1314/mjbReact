import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import './home.css'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="Home">
        <div className="banner">
          关于鹰眼鉴房
        </div>
        <div className="content">
          
          <p className="title1">专注于房屋质量的房产交易平台</p>
          <span className="conSpan">鹰眼鉴房致力于打造一个专注于买房人居住质量、安全和舒适度的房产交易平台</span>
          <span className="conSpan">我们凭借都有的房产质量数据采集系统、通过数据建挖掘和独有的数据建模技术</span>
          <span className="conSpan">为关注楼盘规划和质量的买房人提供多维度、可量化的评测结果</span>
          <span className="conSpan">理性剖析关于房子的一切细节、辅助房产交易决策</span>
          <span className="conSpan">目前已与国内多个知名地产开发商合作、全面量化地产行业质量数据</span>
          <p className="title1">联系我们</p>
          
          <Row className="show-grid">
            <Col xs={12} mdOffset={3} md={3}>
              <embed  src="/static/img/icon_aboutus_cooperate.svg" type="image/svg+xml"/>
              <p style={{color:'#333',fontSize:'14px',fontWeight:'bold',Bottom:'5px',marginTop:'5px'}}>商务合作</p>
              <p style={{color:'#777',fontSize:'12px'}}>bd@maijiahome.com</p>
            </Col>
            <Col xs={12} mdOffset={0} md={3}>
              <embed  src="/static/img/icon_aboutus_customer_service.svg" type="image/svg+xml"/>
              <p style={{color:'#333',fontSize:'14px',fontWeight:'bold',marginBottom:'5px',marginTop:'5px'}}>联系客服</p>
              <p style={{color:'#777',fontSize:'12px',marginBottom:'0px'}}>400 810 1180</p>
              <p style={{color:'#777',fontSize:'12px'}}>9:00-18:00(周一到周五)</p>
            </Col>
          </Row>
         
      
          <Row className="show-grid">
            <Col xs={24}  md={12} style={{marginTop:'1.2rem',padding:'20px 0px',borderTop:'1px solid #eee',borderBottom:'1px solid #eee'}}>
              <embed  src="/static/img/hawkeye_logo_blue.svg" width={150} type="image/svg+xml"/>
              <div>
                <embed  src="/static/img/logo_weibo_n.svg" style={{margin:'10px 20px'}} width={25} type="image/svg+xml"/>
                <embed  src="/static/img/logo_wechat_n.svg" style={{margin:'10px 20px'}} width={25} type="image/svg+xml"/>
                <embed  src="/static/img/logo_zhihu_n.svg" style={{margin:'10px 20px'}} width={25} type="image/svg+xml"/>
              </div>
              <p style={{color:'#777',fontSize:'12px',marginBottom:'0px'}}>首页 · 下载 · “鹰眼”评分体系 · 关于</p>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={24}  md={12} style={{padding:'10px 0px'}}>
              <p style={{color:'#ccc',fontSize:'12px',marginBottom:'0px'}}>京IPC备案号1720281947(占位，非真实)</p>
            </Col>
          </Row>
        
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {card:state.card}
}

function mapDispatchToProps(dispatch) {
  return {
    handle: (name) => dispatch({
      type: 'CHANGE_NAME',
      name: name
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

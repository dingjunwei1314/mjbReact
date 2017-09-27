import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import Foot from '../Foot/Foot'
import './about.css'
class About extends React.Component {
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
      <div className="About">
        <div className="banner">
          关 于 鹰 眼 鉴 房
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
          <Foot/>
        </div>

        {
        /*
        {this.props.card.name}
        <h1>{this.state.name}</h1>
        <Button>Default</Button>
        <button onClick={this.props.handle.bind(this,'我的名字')}>点击</button>
        */
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(About)

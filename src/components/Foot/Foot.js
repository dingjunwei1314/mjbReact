import React from 'react';
import { Row,Col } from 'react-bootstrap';

class Foot extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="Foot" style={{textAlign:'center'}}>
     
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
    );
  }
}


export default Foot

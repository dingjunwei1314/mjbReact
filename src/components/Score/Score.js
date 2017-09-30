import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import Foot from '../Foot/Foot';
import './score.css'
class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  initPosition(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  componentDidMount() {
    this.initPosition()
    this.props.changePage(3)
  }
  render() {
    return (
      <div className="Score">
        <div className="banner">
          什 么 是“鹰眼”评 分 体 系
        </div>
        <div className="content">
          
          <p className="title1">什么是“鹰眼”评分体系</p>
          <span className="conSpan">“鹰眼”评分体系，是我们依据【国家工程建设标准强制性条文】，根据多年房产行业经验</span>
          <span className="conSpan">结合互联网大数据、数据挖掘及机器学习等技术，通过海量数据建模分析，得出的楼盘综合价值评分</span>
          <span className="conSpan">能够科学合理的反映出楼盘及房屋的客观价值，帮助用户筛选出更优质的楼盘</span>
         
          <Row className="show-grid" style={{marginTop:'1rem',marginBottom:'1rem'}}>
            <Col xs={12} mdOffset={2} md={4} style={{textAlign:'left',paddingLeft:'.65rem'}}>
              <embed  src="/static/img/icon_hawkeye_icon1.svg" type="image/svg+xml"/>
              <p style={{color:'#42464D',fontSize:'20px',marginBottom:'15px',marginTop:'5px'}}>评分体系是如何计算的</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>对房屋质量数据进行数据采集及机器挖掘</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>创建动态的评分模型</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>从而科学的计算出房屋真实的价值评分</p>
            </Col>  

            <Col xs={12} mdOffset={0} md={4} style={{textAlign:'left',paddingLeft:'.65rem'}} className="colStyle">
              <embed  src="/static/img/icon_hawkeye_icon2.svg" type="image/svg+xml"/>
              <p style={{color:'#42464D',fontSize:'20px',marginBottom:'15px',marginTop:'5px'}}>评分数据模型通过哪些维度建立</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>评分体系模型分为工程质量、周边配套等三大类别</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>多维度对房屋质量进行评分</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>涵盖了楼盘的全方位信息</p>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} mdOffset={2} md={4} style={{textAlign:'left',paddingLeft:'.65rem'}}>
              <embed  src="/static/img/icon_hawkeye_icon3.svg" type="image/svg+xml"/>
              <p style={{color:'#42464D',fontSize:'20px',marginBottom:'15px',marginTop:'5px'}}>我们的评分标准是什么</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>楼盘价值评分体系严格按照国家房屋规划及施工质量标准</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>对房屋从规划到施工过程各个环节进行实时监控、动态评分</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>对楼盘质量问题已进行整改的楼盘</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>会根据整改结果动态调整评分结果</p>
            </Col>  

            <Col xs={12} mdOffset={0} md={4} style={{textAlign:'left',paddingLeft:'.65rem'}} className="colStyle">
              <embed  src="/static/img/icon_hawkeye_icon4.svg" type="image/svg+xml"/>
              <p style={{color:'#42464D',fontSize:'20px',marginBottom:'15px',marginTop:'5px'}}>价值评分体系通过哪些技术实现</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>楼盘质量数据使用大数据采集及专人人员人工跟踪相结合的方式</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>保证数据的全面性与独有性</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>楼盘质量分析及评分采用数据挖掘与动态的数据建模技术</p>
              <p style={{color:'#42464D',fontSize:'14px',opacity: 0.7,marginBottom:'5px'}}>保证楼盘的评价及时而准确。</p>
            </Col>
          </Row>
          <Foot/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch({
      type: 'CHANGE_PAGE',
      page: page
    })
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Score)
import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'
import { Row,Col,FormGroup,FormControl } from 'react-bootstrap';
import Foot from '../Foot/Foot';
import Btn from '../common/Btn';
import './home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      activePage:1,
      codeNum:60,
      isShowClickCode:true,
      city:'',
      area:'',
      buildName:'',
      phone:'',
      code:''
    }
    this.count=null
  }

  btnDownClik(){
    console.log(1)
  }
  btnScoreClik(){
    hashHistory.push('/score')
  }
  tabChange(page){
    this.setState({activePage:page})
  }
  handleChangeCity(e){
    // let state=Object.assign({},this.state,{a:{name:666}})
    // this.setState(state);
  }  
  handleChangeArea(e){
    this.setState({ area: e.target.value});
  }
  handleChangeBuildName(e){
    this.setState({ buildName: e.target.value});
  }
  handleChangePhone(e){
    this.setState({ phone: e.target.value});
  }  
  handleChangeCode(e){
    this.setState({ code: e.target.value});
  } 
  btnConsultClik(){

  }
  //获取验证码
  getCode(){
    this.setState({isShowClickCode:false})
    this.coutDown()
  }

  coutDown(){
    this.count=setInterval(()=>{
      let num=this.state.codeNum;
      num--
      if(num<=0){
        clearInterval(this.count)
        this.setState({isShowClickCode:true,codeNum:60})
        return
      }
      this.setState({codeNum:num})
    },1000)
  }
  initBanner(){
    let logoNode=document.getElementById('logoSvg')
    let barNode=document.getElementById('navBar')
    barNode.style.background="#545454"
    barNode.style.boxShadow="0 0 0 transparent"
    logoNode.setAttribute('src','/static/img/hawkeye_logo_white.png')
  }
  changBanner(){
    let logoNode=document.getElementById('logoSvg')
    let barNode=document.getElementById('navBar')
    barNode.style.background="white"
    barNode.style.boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 20px"
    logoNode.setAttribute('src','/static/img/hawkeye_logo_blue.png')
  }
  initPosition(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  componentDidMount() {
    let _this=this
    this.initPosition()
    this.props.changePage(1);
    
    if(window.screen.width>800){
      this.initBanner()
      document.onscroll=function(){
        console.log(document.body.scrollTop)
        if((document.body.scrollTop+document.documentElement.scrollTop)>850){
          _this.changBanner()
        }else{
          _this.initBanner()
        }
      }
    }
  }
  componentWillUnmount(){
    if(this.count!=null){
      clearInterval(this.count)
    }
    this.changBanner()
    document.onscroll=null
  }
  render() {
    let pStyle1={
      color:'#777',fontSize:'12px',marginBottom:'0px',lineHeight:'26px'
    },
    pStyle2={
      color:'#777',fontSize:'12px',lineHeight:'26px'
    },
    pStyle0={
      color:'#333',fontSize:'14px',fontWeight:'bold',marginBottom:'15px',marginTop:'5px'
    },
    activePageStyle={color:'rgba(88,128,243,1)'},
    activeConStyle={display:'block'},
    colStyle={marginTop:'.8rem'};
    return (
      <div className="Home">
        <div className="banner">
          <p className="tit">
            <span style={{marginRight:'.6rem'}}>理 性 决 策</span>
            <span>质 选 新 居</span>
          </p>
          <Btn btnClik={this.btnDownClik.bind(this)} text="立即下载" />
        </div>
        <div className="content">
          <p className="title1">回归购房本源，以房屋质量为重</p>
          <span className="conSpan">由专业的规划设计、质量监测人员对楼盘从规划到施工全过程进行严格的质量监督跟踪</span>
          <span className="conSpan">通过房产质量大数据科学合理地反映出楼盘及房屋的客观价值，帮您筛选出优质楼盘</span>
          <Row className="show-grid con1" style={{marginBottom:'1rem'}}>
            <Col xs={12}  md={3} style={colStyle}>
              <p style={pStyle0}>独有“鹰眼”评分体系</p>
              <p style={pStyle1}>通过海量房产质量数据建模分析</p>
              <p style={pStyle2}>得出客观的楼盘综合价值评分</p>
              <embed  src="/static/img/icon_section1_score.svg" type="image/svg+xml"/>
            </Col>
            <Col xs={12}  md={3} style={colStyle}>
              <p style={pStyle0}>三大维度全方位监测</p>
              <p style={pStyle1}>从工程质量、规划设计等三大维度</p>
              <p style={pStyle2}>无死角监测真实楼盘质量</p>
              <embed  src="/static/img/icon_section1_camera.svg" type="image/svg+xml"/>
            </Col>
            <Col xs={12}  md={3} style={colStyle}>
              <p style={pStyle0}>公开透明  客观公正</p>
              <p style={pStyle1}>打开房产质量“黑匣子”</p>
              <p style={pStyle2}>楼盘评分及施工进度动态透明化</p>
              <embed  src="/static/img/icon_section1_chart.svg" type="image/svg+xml"/>
            </Col>
            <Col xs={12}  md={3} style={colStyle}>
              <p style={pStyle0}>严格依据国家制定标准</p>
              <p style={pStyle1}>根据国家法定标准条文监督</p>
              <p style={pStyle2}>违规行为一目了然</p>
              <embed  src="/static/img/icon_section1_standard.svg" type="image/svg+xml"/>
            </Col>
          </Row>
          <Btn btnClik={this.btnScoreClik.bind(this)}  text="什么是“鹰眼”评分体系" />
        </div>
        <div className="con2">
          <Row className="show-grid" style={{height:'100%'}}>
            <Col xs={6}  md={6} className="leftCon"  className="flexP2">
              <p style={{color:'white',fontSize:'.2rem'}}>鹰眼鉴房教你如何选择“靠谱好房产”</p>
              <p style={{color:'white',opacity:'.7',fontSize:'.14rem'}}>我们专注于为您提供包含工程质量、规划设计、周边配套三大维度的详实数据，从数百个楼盘中利用自建的房产采集数据，结合通过海量数据建模分析得出的“鹰眼”评分系统，用数据可视化的解决方案为您的购房提供有力的决策依据。</p>
              <p style={{color:'white',opacity:'.7',fontSize:'.14rem'}}>从此告别购房选择障碍，用大数据为您挑选良心居所。</p>
            </Col>
            <Col xs={6}  md={6}  className="flexP1">
              <img alt="" style={{width:'100%'}} src='/static/img/img_home_phone.png'/>
            </Col>
          </Row>
        </div>
        <div className="con3">
          <p className="title1">交房后再维权，不如全程尽收眼底</p>
          <span className="conSpan">严格按照国家房屋规划及施工质量标准</span>
          <span className="conSpan">从基础工程、结构工程等多维度对楼盘施工进行实时监控</span>
          
          <Row className="show-grid">
            <Col xs={12} className="con3Main"  md={8} mdOffset={2}>
              <Row className="show-grid mainTitleCon">
                <Col xs={3}   md={3} style={{cursor:'pointer'}} onClick={this.tabChange.bind(this,1)}>
                  <span style={this.state.activePage===1? activePageStyle:null}>工程设计</span>
                  {this.state.activePage===1 && <p className="titLine"></p>}
                </Col>
                <Col xs={3}   md={3} style={{cursor:'pointer'}} onClick={this.tabChange.bind(this,2)}>
                  <span style={this.state.activePage===2? activePageStyle:null}>规划设计</span>
                  {this.state.activePage===2 && <p className="titLine"></p>}
                </Col>
                <Col xs={3}   md={3} style={{cursor:'pointer'}} onClick={this.tabChange.bind(this,3)}>
                  <span style={this.state.activePage===3? activePageStyle:null}>周边配套</span>
                  {this.state.activePage===3 && <p className="titLine"></p>}
                </Col>
                <Col xs={3}   md={3} style={{cursor:'pointer'}} onClick={this.tabChange.bind(this,4)}>
                  <span style={this.state.activePage===4? activePageStyle:null}>规划落实</span>
                  {this.state.activePage===4 && <p className="titLine"></p>}
                </Col>
              </Row>
              
              <Row style={this.state.activePage===1? activeConStyle:null} className="show-grid mainConCon">
                <p className="title1">三大板块结构性评估楼盘总体工程质量</p>
                <span className="conSpan">严格按照国家房屋规划及施工质量标准</span>
                <span className="conSpan">从基础工程、结构工程等多维度对楼盘施工进行实时监控</span>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section2_foundation_soils.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>地基工程</p>
                  <p style={pStyle1}>属于隐蔽性工程</p>
                  <p style={pStyle1}>在工程竣工验收中很难察觉</p>
                  <p style={pStyle2}>对质量安全有着直接的影响</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section2_structure.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>主体结构</p>
                  <p style={pStyle1}>建筑工程结构的安全性能</p>
                  <p style={pStyle1}>是建筑工程的施工要点</p>
                  <p style={pStyle2}>承担着项目的质量和安全问题</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section2_renovation.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>装饰装修工程</p>
                  <p style={pStyle1}>是施工过程中必不可少的环节</p>
                  <p style={pStyle1}>整体建筑工程功能实现方面</p>
                  <p style={pStyle2}>发挥着重要的作用</p>
                </Col>
              </Row>
              
              <Row style={this.state.activePage===2? activeConStyle:null} className="show-grid mainConCon">
                <p className="title1">规划设计透明化，真正读懂你的家</p>
                <span className="conSpan">严格按照国家房屋规划及施工质量标准</span>
                <span className="conSpan">从基础工程、结构工程等多维度对楼盘施工进行实时监控</span>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section3_indoor.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>室内规划设计</p>
                  <p style={pStyle1}>多达近60项的标准</p>
                  <p style={pStyle1}>从安全、舒适性、声污染等</p>
                  <p style={pStyle2}>多方面评测内规划设计</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section3_outdoor.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>楼栋规划设计</p>
                  <p style={pStyle1}>良好的通风采光条件、</p>
                  <p style={pStyle1}>交通组织、良好的私密性等条件</p>
                  <p style={pStyle2}>将直接影响用户的居住舒适性</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section3_zone.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>园区规划设计</p>
                  <p style={pStyle1}>合理的消防逃生规划、安防规划</p>
                  <p style={pStyle1}>需要优化设计和</p>
                  <p style={pStyle2}>科学选用建筑材料</p>
                </Col>
              </Row>
              
              <Row style={this.state.activePage===3? activeConStyle:null} className="show-grid mainConCon">
                <p className="title1">深度解读楼盘周边配套</p>
                <span className="conSpan">从楼盘外部配套（市政配套)及内部配套（开发商自建配套）两个层面进行分析</span>
                <span className="conSpan">深层考量生活服务、交通、医疗、教育等多种配套对楼盘价值及居住舒适度造成的影响</span>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section4_traffic.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>交通、医疗配套</p>
                  <p style={pStyle1}>针对周边公交站点</p>
                  <p style={pStyle1}>地铁线路、城市主干道等因素</p>
                  <p style={pStyle2}>进行详尽分析</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section4_market.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>生活服务配套</p>
                  <p style={pStyle1}>全方位考量综合购物等</p>
                  <p style={pStyle1}>生活商圈综合配套</p>
                  <p style={pStyle2}>快速鉴别楼盘舒适度及附加值</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section4_gas_station.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>解析不利因素</p>
                  <p style={pStyle1}>密集流动人员、垃圾处理站</p>
                  <p style={pStyle1}>粉尘污染源头、化工企业</p>
                  <p style={pStyle2}>十余项不利因素替您层层把关</p>
                </Col>
              </Row>
              
              <Row style={this.state.activePage===4? activeConStyle:null} className="show-grid mainConCon">
                <p className="title1">落实细节不妥协，坚做“质量星人”</p>
                <span className="conSpan">为房屋提供全流程“体检”，数据化体现实际落实工作</span>
                <span className="conSpan">令规划图与交房后的不符细节原形毕露</span>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section5_evaluating.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>户内七大阶段落实评测</p>
                  <p style={pStyle1}>根据工程施工进度划分七大阶段</p>
                  <p style={pStyle1}>重点关注“隐蔽工程”</p>
                  <p style={pStyle2}>工序工艺可视化</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section5_park.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>园区规划全程监控</p>
                  <p style={pStyle1}>关注楼盘绿化率与绿化质量</p>
                  <p style={pStyle1}>鉴别园林实时标准是否缩水</p>
                  <p style={pStyle2}>虚假宣传无所遁形</p>
                </Col>
                <Col xs={12}  md={4} style={colStyle}>
                  <embed  src="/static/img/icon_section5_safety.svg" type="image/svg+xml"/>
                  <p style={pStyle0}>全方位关注居住安全</p>
                  <p style={pStyle1}>关注消防安保系统软硬件落实</p>
                  <p style={pStyle1}>精准对比规划与实际落实</p>
                  <p style={pStyle2}>数量与质量同步校准</p>
                </Col>
              </Row>
    
            </Col>
          </Row>
          
          <Row className="show-grid">
            <Col xs={12} className=""  md={4} mdOffset={4}>
              <p className="title1">预约了解楼盘质量/进度信息</p>
              <span className="conSpan">已有目标楼盘？您可以预留想查阅的楼盘信息</span>
              <span className="conSpan">我们将尽快为您开放相关资料</span>
              <form style={{padding:'.2rem .6rem'}}>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.city}
                    placeholder="城市"
                    onChange={this.handleChangeCity.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.area}
                    placeholder="行政区域"
                    onChange={this.handleChangeArea.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.buildName}
                    placeholder="您想了解的楼盘名称"
                    onChange={this.handleChangeBuildName.bind(this)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="text"
                    value={this.state.phone}
                    placeholder="手机号"
                    onChange={this.handleChangePhone.bind(this)}
                  />
                </FormGroup>
                <FormGroup className="codeInputWap">
                  <FormControl
                    type="text"
                    value={this.state.code}
                    placeholder="验证码"
                    onChange={this.handleChangeCode.bind(this)}/>
                  {this.state.isShowClickCode && <span className="codeBtn" onClick={this.getCode.bind(this)}>获取验证码</span>}
                  {this.state.isShowClickCode || <span style={{cursor:'not-allowed'}} className="codeBtn">
                    {this.state.codeNum}s
                  </span>}
                </FormGroup>
              </form>
              <Btn btnClik={this.btnConsultClik.bind(this)} text="我要咨询" />
            </Col>
          </Row>
         
          <Row className="show-grid">
              <Col xs={12} className=""  md={8} mdOffset={2}>
                <p className="title1">战略合作品牌</p>
                <Row className="show-grid" style={{marginTop:'.3rem'}}>
                  <Col xs={12} className=""  md={3}>
                    <embed  src="/static/img/logo_cooperate_urwork.svg" type="image/svg+xml"/>
                  </Col>
                  <Col xs={12} className=""  md={3}>
                    <embed  src="/static/img/logo_cooperate_hezuomaifang.svg" type="image/svg+xml"/>
                  </Col>
                  <Col xs={12} className=""  md={3}>
                    <embed  src="/static/img/logo_cooperate_pufa.svg" type="image/svg+xml"/>
                  </Col>
                  <Col xs={12} className=""  md={3}>
                    <embed  src="/static/img/logo_cooperate_mijia.svg" type="image/svg+xml"/>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} className=""  md={6} mdOffset={3}>
                <Row className="show-grid">
                  <Col xs={12} className=""  md={4}>
                    <embed  src="/static/img/logo_cooperate_qingke.svg"  type="image/svg+xml"/>
                  </Col>
                  <Col xs={12} className=""  md={4}>
                    <embed  src="/static/img/logo_cooperate_qingning.svg" type="image/svg+xml"/>
                  </Col>
                  <Col xs={12} className=""  md={4}>
                    <embed  src="/static/img/logo_cooperate_mofei.svg" type="image/svg+xml"/>
                  </Col>
                </Row>
              </Col>
          </Row>
          
        </div>
        <Foot/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {page:state.page}
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch({
      type: 'CHANGE_PAGE',
      page
    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)

import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import setFontsize from '../../common/js/setFontsize'
// import CanvasParticle from '../../common/js/canvasParticle'
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
    setFontsize()
    this.initPosition()
    this.props.changePage(3)
   
    var dist=null
    function getElementByTag(name){
      return document.getElementsByTagName(name);
    }
    function getELementById(id){
      return document.getElementById(id);
    }
    // 根据传入的config初始化画布
    function canvasInit(canvasConfig){
      console.log('jinru')
      canvasConfig = canvasConfig || {};
      var html = getElementByTag("html")[0];
      // 获取body作为背景
      // var body = getElementByTag("body")[0];

      // 获取特定div作为背景
      // mydiv是你想要将其作为背景的div的ID
      var body = document.getElementById("mydiv");
      var canvasObj = document.createElement("canvas");

      var canvas = {
        element: canvasObj,
        points : [],
        // 默认配置
        config: {
          vx: canvasConfig.vx || 4,
          vy:  canvasConfig.vy || 4,
          height: canvasConfig.height || 2,
          width: canvasConfig.width || 2,
          count: canvasConfig.count || 100,
          color: canvasConfig.color || "121, 162, 185",
          stroke: canvasConfig.stroke || "130,255,255",
          dist: canvasConfig.dist || 6000,
          e_dist: canvasConfig.e_dist || 20000,
          max_conn: 10
        }
      };

      // 获取context
      if(canvas.element.getContext("2d")){
        canvas.context = canvas.element.getContext("2d");
      }else{
        return null;
      }

      body.style.padding = "0";
      body.style.margin = "0";
      // body.replaceChild(canvas.element, canvasDiv);
      body.appendChild(canvas.element);

      canvas.element.style = "position: absolute; top: 0; left: 0; z-index: -1;background:black;right:0;bottom:0";
      canvasSize(canvas.element);
      // window.onresize = function(){
      //   canvasSize(canvas.element);
      //   setFontsize()
      // }
      body.onmousemove = function(e){
        var event = e || window.event;
        canvas.mouse = {
          x: event.clientX,
          y: event.clientY
        }
      }
      document.onmouseleave = function(){
        canvas.mouse = undefined;
      }
      setInterval(function(){
        drawPoint(canvas);
      }, 40);
    }

    // 设置canvas大小
    function canvasSize(canvas){
      // 获取窗口的宽高
      // canvas.width = window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth;
      // canvas.height = window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight;

      // 获取特定div的宽高
      var width = document.getElementById("mydiv").style.width;
      var height = document.getElementById("mydiv").style.height;
      width = parseInt(width);
      height = parseInt(height);
      canvas.width = width || window.innerWeight || document.documentElement.clientWidth || document.body.clientWidth;
      canvas.height = height || window.innerWeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    // 画点
    function drawPoint(canvas){
      var context = canvas.context,
        point,
        dist;
      context.clearRect(0, 0, canvas.element.width, canvas.element.height);
      context.beginPath();
      context.fillStyle = "rgb("+ canvas.config.color +")";
      for(var i = 0, len = canvas.config.count; i < len; i++){
        if(canvas.points.length != canvas.config.count){
          // 初始化所有点
          point = {
            x: Math.floor(Math.random() * canvas.element.width),
            y: Math.floor(Math.random() * canvas.element.height),
            vx: canvas.config.vx / 2 - Math.random() * canvas.config.vx,
            vy: canvas.config.vy / 2 - Math.random() * canvas.config.vy
          }
        }else{
          // 处理球的速度和位置，并且做边界处理
          point = borderPoint(canvas.points[i], canvas);
        }
        context.fillRect(point.x - canvas.config.width / 2, point.y - canvas.config.height / 2, canvas.config.width, canvas.config.height);

        canvas.points[i] = point;
      }
      drawLine(context, canvas, canvas.mouse);
      context.closePath();
    }

    // 边界处理
    function borderPoint(point, canvas){
      var p = point;
      if(point.x <= 0 || point.x >= canvas.element.width){
        p.vx = -p.vx;
        p.x += p.vx;
      }else if(point.y <= 0 || point.y >= canvas.element.height){
        p.vy = -p.vy;
        p.y += p.vy;
      }else{
        p = {
          x: p.x + p.vx,
          y: p.y + p.vy,
          vx: p.vx,
          vy: p.vy
        }
      }
      return p;
    }

    // 画线
    function drawLine(context, canvas, mouse){
      context = context || canvas.context;
      for(var i = 0, len = canvas.config.count; i < len; i++){
        // 初始化最大连接数
        canvas.points[i].max_conn = 0;
        // point to point
        for(var j = 0; j < len; j++){
          if(i != j){
            dist = Math.round(canvas.points[i].x - canvas.points[j].x) * Math.round(canvas.points[i].x - canvas.points[j].x) + 
                Math.round(canvas.points[i].y - canvas.points[j].y) * Math.round(canvas.points[i].y - canvas.points[j].y);
            // 两点距离小于吸附距离，而且小于最大连接数，则画线
            if(dist <= canvas.config.dist && canvas.points[i].max_conn <canvas.config.max_conn){
              canvas.points[i].max_conn++;
              // 距离越远，线条越细，而且越透明
              context.lineWidth = 0.5 - dist / canvas.config.dist;
              context.strokeStyle = "rgba("+ canvas.config.stroke + ","+ (1 - dist / canvas.config.dist) +")"
              context.beginPath();
              context.moveTo(canvas.points[i].x, canvas.points[i].y);
              context.lineTo(canvas.points[j].x, canvas.points[j].y);
              context.stroke();

            }
          }
        }
        // 如果鼠标进入画布
        // point to mouse
        if(mouse){
          dist = Math.round(canvas.points[i].x - mouse.x) * Math.round(canvas.points[i].x - mouse.x) + 
              Math.round(canvas.points[i].y - mouse.y) * Math.round(canvas.points[i].y - mouse.y);
          // 遇到鼠标吸附距离时加速，直接改变point的x，y值达到加速效果
          if(dist > canvas.config.dist && dist <= canvas.config.e_dist){
            canvas.points[i].x = canvas.points[i].x + (mouse.x - canvas.points[i].x) / 20;
            canvas.points[i].y = canvas.points[i].y + (mouse.y - canvas.points[i].y) / 20;
          }
          if(dist <= canvas.config.e_dist){
            context.lineWidth = 1;
            context.strokeStyle = "rgba("+ canvas.config.stroke + ","+ (1 - dist / canvas.config.e_dist) +")";
            context.beginPath();
            context.moveTo(canvas.points[i].x, canvas.points[i].y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
          }
        }
      }
    }
     
    //配置
    var config = {
        vx: 4,	//小球x轴速度,正为右，负为左
        vy: 4,	//小球y轴速度
        height: 2,	//小球高宽，其实为正方形，所以不宜太大
        width: 2,
        count: 200,		//点个数
        color: "121, 162, 185", 	//点颜色
        stroke: "130,255,255", 		//线条颜色
        dist: 6000, 	//点吸附距离
        e_dist: 20000, 	//鼠标吸附加速距离
        max_conn: 10 	//点到点最大连接数
    }

    //调用
    setTimeout(function(){
      canvasInit(config);
    },300)
    window.onresize=function(){
       setFontsize()
       setTimeout(function(){
        canvasInit(config)
      },300)
    }
  }
  render() {
    return (
      <div className="Score">
        <div id="mydiv"></div>
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
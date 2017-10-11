import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import setFontsize from '../../common/js/setFontsize'
import './about.css'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      
    }
  }
  initPosition(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  componentWillUnmount(){
    
  }
  componentDidMount() {
    setFontsize()
    this.initPosition()
    this.props.changePage(4)
   
    var dist=null
    function getElementByTag(name){
      return document.getElementsByTagName(name);
    }
    function getELementById(id){
      return document.getElementById(id);
    }
    // 根据传入的config初始化画布
    function canvasInit(canvasConfig){
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
        canvasInit(config);
      },300)
    }
  }
  render() {
    return (
      <div className="About">
       
        <div id="mydiv"></div>
       
        <div className="banner">
          关 于 鹰 眼 鉴 房
        </div>
        <div className="content">
          
          <p className="title1">专注于房屋质量的房产交易平台</p>
          <span className="conSpan">鹰眼鉴房致力于打造一个专注于买房人关注的居住质量、房屋进度、安全性及舒适度等方面的房产数据服务平台</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(About)
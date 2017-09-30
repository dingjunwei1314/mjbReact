import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import Foot from '../Foot/Foot'
import './down.css'

function Welcome(props) {
	return <div className = 'downTitleC animated bounceInLeft'  ><p >鹰眼鉴房</p><p>快速甄别良心好房产</p></div>;
}
function DownTitleImg(props) {
	return  <img className='title '  src={props.img} type="image/png"/>;
}
function DownBar(props) {
	
	if( props.name === 'iphone'){
		return <div className = 'downBarIp' onClick={props.clickHandleIp}>
			<div><DownTitleImg img='/static/img/ip.png' /></div>
			<div><p>前往下载</p><p>App Store</p></div>
		</div>;
	}
		return <div className = 'downBarAr' onClick={props.clickHandleAr}>
		<div><DownTitleImg img='/static/img/ar.png' /></div>
		<div><p>前往下载</p><p>安卓应用市场</p></div>
		</div>;
}
function QuickMark( props ) {
		return <div className = {props.isShow ? props.classNames : 'isShows'}>
		<i></i>
		<DownTitleImg img = {props.img}/>
		</div>;
	}
	function ForeTextTitle ( props ){
		if( props.text === 'one'){
			return <div className = 'a'>
			<span>可视化楼盘质量评分体系</span><div><p>3 大维度综合评测<br/>
			近 1000 项检验标准<br/>
			评分体系数据动态更新<br/>
			保障楼盘信息及时准确</p></div>
			<div className='opcityTry'></div>
			</div>
		}
		return <div className = 'a'>
		<span>深度质量评测报告</span><div><p>多份深度评测报告全方位展示楼盘工程质量<br/>
		透明化楼盘整体实施进程<br/>
		多维度展示施工实录<br/>
		全方位掌控楼盘总体进度质量</p></div>
		<div className='opcityTry'></div>
		</div>
	}
function ForeText ( props ){
		if( props.type === 'img'){
			return <div className = 'a'><DownTitleImg img={props.img} /><div className='opcityTry'></div></div>
		}
			return <ForeTextTitle text = {props.isText}/>
}
class Down extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:'djw',
			isShow:false,
			isShowAr:false
		}
	}
	componentDidMount() {

	}
	clickHandleIp = (e) =>{
		if(!e){
			e = e || window.event;
		}
		e.preventDefault();
		this.setState((prevState,props) => ({
			isShow : !prevState.isShow,
			isShowAr : false
        }));
	}
	clickHandleAr = (e) =>{
		if(!e){
			e = e || window.event;
		}
		e.preventDefault();
		this.setState((prevState,props) => ({
			isShowAr : !prevState.isShowAr,
			isShow : false
        }));
	}
	render() {
		
		return (
		  <div className="Down">
				<div className="banner">
					<Welcome name='haha' />
					<DownTitleImg className='title' img = '/static/img/img_download_top.png' />
					<a href=''><DownBar name='iphone' clickHandleIp={this.clickHandleIp} /></a>
					<a href=''><DownBar name='andire' clickHandleAr={this.clickHandleAr}  /></a>
					<QuickMark classNames='QuickMark animated flip' isShow={this.state.isShow} img='/static/img/er.png' />
					<QuickMark classNames='QuickMarkAr animated flip' isShow={this.state.isShowAr} img='/static/img/erweima.png' style = {{left:0}} />
				</div>
				<div className="whiterText">
						  <Row className = 'rowTitle'>
							 <Col style={{paddingLeft:'2rem'}} className='tryHeight' xs={12}  md={6}><ForeText type='img' img='/static/img/img_download_1.png' /></Col>
							 <Col style={{paddingRight:'2rem'}} className='tryHeight' xs={12}  md={6}><ForeText isText = 'one' type='text' /></Col>
						  </Row>
				</div>
				<div className="whiterTextTwo">
				<Row className = 'rowTitleTwo' style={{background: '#F0F0F2'}}>
				   <Col style={{paddingLeft:'2rem'}} className='tryHeight' xs={12}  md={6}><ForeText isText = 'two' type='text' /></Col>
				   <Col style={{paddingRight:'2rem'}} className='tryHeight' xs={12}  md={6}><ForeText type='img' img='/static/img/img_download_2.png' /></Col>
				</Row>
			  </div>
			  <Foot />
		  </div>
		);
	}
}

function mapStateToProps(state) {
  return {
		card:state.card
	}
}

export default connect(mapStateToProps)(Down)

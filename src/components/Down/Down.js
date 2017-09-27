import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import Foot from '../Foot/Foot'
import './down.css'
class Down extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:'djw'
		}
	}
	componentDidMount() {

	}
	render() {
		return (
		  <div className="Down">
				<div className="banner"></div>
				<Foot/>
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

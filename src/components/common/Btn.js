import React from 'react';


class Btn extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    
  }
  render() {
    let btnStyly={
      width:'3rem',
      height:'.56rem',
      margin:'0 auto',
      background: '#5880F3',
      boxShadow: '0 2px 6px 0 rgba(0,0,0,0.09), 0 1px 2px 0 rgba(0,0,0,0.15)',
      borderRadius: '1rem',
      lineHeight:'.56rem',
      textAlign:'center',
      color:'white',
      fontSize:'.2rem',
      cursor:'pointer'
    }
    return (
        <p onClick={this.props.btnClik} style={btnStyly}>{this.props.text}</p>
    );
  }
}


export default Btn

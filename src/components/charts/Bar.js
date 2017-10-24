import React from 'react';

export default class Bar extends React.Component {
  render(){
    let ulim = this.props.height + this.props.martop;
    let height = ulim ? (this.props.height/ulim)*300 : 0;
    let marginTop = (400 - height);

    let style = {
      margin: '0 10px',
      height: 400 + "px",
    };

    let style1 = {
      width: this.props.width,
      height: height + "px",
    };

    let style2 = {
      width: this.props.width,
      height: marginTop + "px",
    };

    return(
      <div className="bar-main" style={style}>
        <div className="bar-head" style={style2}>
          <div className="bar-head-content">{this.props.data}</div>
        </div>
        <div className="bar" style={style1}>
        </div>
      </div>
    );
  }
}
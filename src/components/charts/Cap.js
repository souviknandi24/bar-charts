import React from 'react';

export default class Cap extends React.Component {
  render(){
    let style = {
      width: this.props.width,
      margin: '0 10px',
    };

    return(
      <div className="cap" style={style}>
        {this.props.data}
      </div>
    );
  }
}
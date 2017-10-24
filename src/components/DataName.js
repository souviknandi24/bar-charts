import React from 'react';

export default class DataName extends React.Component { 
  constructor(){
    super();
    this.state = {
      ages:["0-10","11-20","21-30","31-40","41-50","50+"],
      locs:["India", "China", "Japan", "USA", "Russia", "Others"]
    }
  }

  onDataClick() {
    this.props.onCompClick();
  }

  onDataRemove(e) {
    this.props.onCompRemove();
    e.stopPropagation();
    alert("User " + this.props.name + " deleted!!!");
  }

  render(){
    return(
      <tr onClick={this.onDataClick.bind(this)}>
        <td>{this.props.name}</td>
        <td>{this.state.ages[this.props.age]}</td>
        <td>{this.state.locs[this.props.loc]}</td>
        <td><button className="btn btn-xs btn-danger" onClick={this.onDataRemove.bind(this)}>&#x2715;</button></td>
      </tr>
    );
  }
}
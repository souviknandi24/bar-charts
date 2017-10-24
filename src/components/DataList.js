import React from 'react';
import DataName from './DataName.js'

export default class DataList extends React.Component {
  
  onDataClick(i){
    this.props.onDataClick(i);  
  }

  onDataRemove(i){
    this.props.onDataRemove(i);
  }

  render(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span className="panel-head">Data List:</span>
        </div>
        <div className="panel-body data-lists">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age Range</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.datas.map((dataItem, i) => 
                <DataName key={i} name={dataItem.name} age={dataItem.age} loc={dataItem.loc}
                  onCompClick={this.onDataClick.bind(this,i)} 
                  onCompRemove={this.onDataRemove.bind(this,i)}/>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
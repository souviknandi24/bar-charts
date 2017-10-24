import React from 'react';

export default class Add extends React.Component {
  
  add(event){
    event.preventDefault();

    let name = this.refs.cn.value;
    let age = this.refs.age.value;
    let loc = this.refs.loc.value;

    if(name.length > 2) {
      this.props.onAdd(name, age, loc);
      alert("User data for " + name + " created!!!");
    }
    else{
      alert("Name must have atleast 3 characters!!!");
    }

    this.refs.cn.value = '';
    this.refs.age.value = 0;
    this.refs.loc.value = 0; 
  }

  render(){
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <span className="panel-head">Data Form:</span>
        </div>
        <div className="panel-body">
          <form className="form-horizontal" onSubmit={this.add.bind(this)}>
            <div className="form-group">
              <label className="control-label col-sm-3">Name:</label>
              <div className="col-sm-8">
                <input type="text" id="name" name="name" className="form-control" placeholder="Name" ref="cn"/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Age Range:</label>
              <div className="col-sm-8">
                <select name="age" ref="age" className="form-control">
                  <option value="0">0 - 10</option>
                  <option value="1">11 - 20</option>
                  <option value="2">21 - 30</option>
                  <option value="3">31 - 40</option>
                  <option value="4">41 - 50</option>
                  <option value="5">50+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Location:</label>
              <div className="col-sm-8">
                <select name="loc" ref="loc" className="form-control">
                  <option value="0">India</option>
                  <option value="1">China</option>
                  <option value="2">Japan</option>
                  <option value="3">USA</option>
                  <option value="4">Russia</option>
                  <option value="5">Others</option>
                </select>
              </div>
            </div>
            <div className="form-group">        
              <div className="col-sm-offset-3 col-sm-10">
                <input type="submit" value="submit" className="btn btn-success"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
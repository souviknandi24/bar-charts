import React from 'react';

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {value1: '', value2: 0, value3: 0};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  

  add(event){
    event.preventDefault();
    console.log(event.target.value);
    let name = this.state.value1;
    let age = this.state.value2;
    let loc = this.state.value3;

    if(name.length > 2) {
      this.props.onAdd(name, age, loc);
      alert("User data for " + name + " created!!!");
    }
    else{
      alert("Name must have atleast 3 characters!!!");
    }

    this.setState({value1: ''});
    this.setState({value2: 0});
    this.setState({value3: 0});
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
                <input type="text" id="name" name="value1" className="form-control" placeholder="Name" value={this.state.value1} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-3">Age Range:</label>
              <div className="col-sm-8">
                <select name="value2" className="form-control" value={this.state.value2} onChange={this.handleChange}>
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
                <select name="value3" className="form-control" value={this.state.value3} onChange={this.handleChange}>
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
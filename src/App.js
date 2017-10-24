import React from 'react'
import Add from './components/Add.js'
import DataList from './components/DataList.js'
import Bar from './components/charts/Bar.js'
import Cap from './components/charts/Cap.js'

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      datas:[
      {name:'Souvik', age:2, loc:3},
      {name:'Alpha', age:0, loc:3},
      {name:'Beta', age:1, loc:1},
      {name:'Motilal', age:1, loc:4},
      {name:'Acarya', age:1, loc:5},
      {name:'Anuraag', age:1, loc:4},
      {name:'Nakula', age:2, loc:1},
      {name:'Narayana', age:2, loc:2},
      {name:'Maha', age:2, loc:2},
      {name:'Nakshatra', age:2, loc:3},
      {name:'Dhirtarashtra', age:2, loc:5},
      {name:'Ragunath', age:3, loc:1},
      {name:'Daksha', age:3, loc:2},
      {name:'Vishnu', age:3, loc:3},
      {name:'Roodra', age:3, loc:3},
      {name:'Vaibhav', age:3, loc:4},
      {name:'Aman', age:3, loc:5},
      {name:'Prakash', age:3, loc:2},
      {name:'Dasra', age:3, loc:3},
      {name:'Keshav', age:4, loc:1},
      {name:'Vijya', age:4, loc:1},
      {name:'Kaumari', age:4, loc:2},
      {name:'Arpita', age:4, loc:2},
      {name:'Dakini', age:5, loc:2},
      {name:'Sadhana', age:5, loc:3},
      {name:'Aasiya', age:5, loc:4},
      {name:'Simron', age:5, loc:5},
      {name:'Nagini', age:5, loc:5},
      {name:'Mataji', age:5, loc:4},
      {name:'Samarj', age:5, loc:4},
      {name:'Sarama', age:0, loc:0},
      {name:'Vaibhav', age:0, loc:0},
      {name:'Aman', age:1, loc:0},
      {name:'Prakash', age:0, loc:2},
      {name:'Dasra', age:0, loc:3},
      {name:'Keshav', age:4, loc:0},
      {name:'Vijya', age:4, loc:0},
      {name:'Kaumari', age:0, loc:2},
      {name:'Arpita', age:4, loc:0},
      ],

      locage:[[0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0],
      [0,0,0,0,0,0]],

      ages: ["0-10","11-20","21-30","31-40","41-50","50+"],
      locs: ["India", "China", "Japan", "USA", "Russia", "Others"],
      arr: [],
      cap: [],
      max: [],
      filt: "0",
      str: "BAR CHART CANVAS",
      age: 0,
      loc: 0,

      selectedData:{}
    };
  }

  calculate() {
    let datas = this.state.datas;
    let arr = this.state.locage;
    
    for(var i=0; i<6; i++) {
      for(var j=0; j<6; j++){
        arr[i][j] = 0;
      }
    }

    datas.map((dataItem, index) => { 
      i = dataItem.loc;
      j = dataItem.age;
      arr[i][j] += 1;
      return 0;
    })

    this.setState({locage: arr});
  }

  componentDidMount() {
    this.calculate();
    this.barGen();
  }

  handleAdd(name, age, loc) {
    let newComp = {name:name, age:age, loc:loc};
    let datas = this.state.datas;
    datas.unshift(newComp);
    this.setState({datas});
    this.calculate();
    this.barGen();
  }

  handleDataClick(i){
    let selectedData = this.state.datas[i];
    this.setState({selectedData});
  }

  handleDataRemove(i){
    let datas = this.state.datas;
    datas.splice(i,1);
    let selectedData;
    
    if(datas.length > 0)
    {
      selectedData = datas[0];
    }
    else
    {
      selectedData = {};
    }

    this.setState({datas, selectedData});
    this.calculate();
    this.barGen();
  }

  handleClick(event) {
    this.setState({filt: event.target.value}, function () {
      this.barGen();
    });
  }

  handleChange1(event) {
    this.setState({age: event.target.value}, function () {
      this.barGen();
    });
  }
  
  handleChange2(event) {
    this.setState({loc: event.target.value}, function () {
      this.barGen();
    });
  }

  barGen() {
    let age = this.state.age;
    let loc = this.state.loc;
    let locage = this.state.locage;
    let filt = this.state.filt;
    let ages = this.state.ages;
    let locs = this.state.locs;
    let str;

    let arr = [];
    let cap = [];

    if(filt === "0") {
      str = "Age Range = " + ages[age];
      locs.map((dataItem, i) =>
        cap.push(dataItem)
        )
      for(var i=0; i<6; i++){
        arr.push(locage[i][age]);
      }
    }
    else {
      str = "Location = " + locs[loc];
      ages.map((dataItem, i) =>
        cap.push(dataItem)
        )
      for(i=0; i<6; i++){
        arr.push(locage[loc][i]);
      }
    }

    let max = Math.max.apply(null, arr);
    this.setState({arr: arr});
    this.setState({cap: cap});
    this.setState({max: max});
    this.setState({str: str});
  }

  render(){
    return(
      <div>
        <div className="well text-center">
          <h1>Bar Charts Flow</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Add onAdd={this.handleAdd.bind(this)}/>
            </div>
            <div className="col-md-6">
              <DataList datas={this.state.datas} locage={this.state.locage} onDataClick={this.handleDataClick.bind(this)} onDataRemove={this.handleDataRemove.bind(this)}/>
            </div>
          </div>

          <div>
            <div className="filter">
              <h3>Filter by:</h3>
              <form className="form-horizontal">
                <div className="form-group">
                  <div className="col-sm-2 col-sm-offset-4">
                    <input type="radio" name="filter" value="0" ref="filter" checked={this.state.filt==="0"}  onChange={this.handleClick.bind(this)}/>Age Range
                    <select name="age" ref="age" className="form-control" onChange={this.handleChange1.bind(this)}>
                      <option value="0">0 - 10</option>
                      <option value="1">11 - 20</option>
                      <option value="2">21 - 30</option>
                      <option value="3">31 - 40</option>
                      <option value="4">41 - 50</option>
                      <option value="5">50+</option>
                    </select>
                  </div>
                  <div className="col-sm-2">
                    <input type="radio" name="filter" value="1" ref="filter" checked={this.state.filt==="1"} onChange={this.handleClick.bind(this)}/>Location
                    <select name="loc" ref="loc" className="form-control" onChange={this.handleChange2.bind(this)}>
                      <option value="0">India</option>
                      <option value="1">China</option>
                      <option value="2">Japan</option>
                      <option value="3">USA</option>
                      <option value="4">Russia</option>
                      <option value="5">Others</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <br/>
            <div className="chart-view">
              <div className="canvas">
                {this.state.arr.map((dataItem,i) => 
                  <Bar key={i} height={dataItem} martop={this.state.max - dataItem} data={dataItem} width={"50px"}/>
                  )}
              </div>
              <div className="captions">
                {this.state.cap.map((dataItem,i) => 
                  <Cap key={i} data={dataItem} width={"50px"}/>
                  )}
              </div>
              <div className="captions">
                <h4>{this.state.str}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
// import Counter from "./Counter";
import Counter1 from "./Counter1";
export default class Classcom extends Component {
  constructor() {
    super();
    this.state={
        count: 0
    }
  }

  componentDidCatch() {
    console.log("componentDidCatch : When Component render first time ");
  }
 increment(){
    this.setState({count : this.state.count + 1})
 }
componentWillUnmount(){
    console.log("componentWillUnmount: Componet Remove")

}

  render() {
    return (
      <div>
        <Counter1 number={this.state.count}/>
        {/* <Counter number={this.state.count}/> */}
        {/* <h1>{this.state.count}</h1> */}
        {/* <button onClick={this.increment.bind(this)}>Click Me</button> */}
        <button onClick={()=>{this.increment()}}>Click Me</button>
      </div>
    );
  }
}

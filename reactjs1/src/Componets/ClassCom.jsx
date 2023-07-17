import React, { Component } from 'react'

export default class ClassCom extends Component {
    constructor(){
        super();
        this.state={
            data: 1
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>upDateData</button>
        
      </div>
    )
  }
}

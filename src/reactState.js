import React, { Component } from "react";
import "./css/Common.css"
class reactstate extends Component {

    state={
        name:"Saurav",
        agenumber: this.props.age
    }

  render() {
    return (
      <div className="box">
        <h1>React State </h1>
        <h1> Student name is {this.state.name} </h1>
        <h1>and age is {this.state.agenumber}</h1>
      </div>
    );
  }
}
export default reactstate;

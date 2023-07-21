import React, { Component } from "react";

class reactstate extends Component {

    state={
        name:"Saurav",
        agenumber: this.props.age
    }

  render() {
    return (
      <>
        <h1>React State </h1>
        <h1> Student name is {this.state.name} </h1>
        <h1>and age is {this.state.agenumber}</h1>
      </>
    );
  }
}
export default reactstate;

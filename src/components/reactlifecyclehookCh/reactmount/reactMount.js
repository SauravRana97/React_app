import React, { Component } from "react";
import "../../asset/css/Common.css";
// const mounted = () => {
//   return (
//     <div>
//       <h1>Mounted Component</h1>
//     </div>
//   );
// };

export default class mounted extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
    };
  }
  componentDidMount(){
    console.log("Mounted Component")
    this.setState({name: "shweta"})
  }
  render() {
    return (
      <div className="box">
        <h1>Mounted Component</h1>
       <h1>{this.state.name}</h1>
      </div>
    );
  }
}


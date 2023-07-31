import React, { Component } from "react";
import "../../asset/css/Common.css";
// const mounted = () => {
//   return (
//     <div>
//       <h1>Mounted Component</h1>
//     </div>
//   );
// };

export default class unmounte extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
    };
  }
  componentDidMount(){
    console.log("Mounted Component")
    this.setState({name: "sakshi"})
  }
  componentWillUnmount(){
    console.log("unmounted Component")
  }
  render() {
    return (
      <div className="box">
        <h1>UnMounted Component</h1>
       <h1>{this.state.name}</h1>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../css/Common.css"
// const updated = () => {
//   return (
//     <div>
//       <h1>updated Component</h1>
//     </div>
//   );
// };

export default class updated extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
    };
  }
  componentDidUpdate() {
    console.log("Update Component");
    setTimeout(() => {
      this.setState({ name: "Saurav" });
    }, 3000);
  }
  render() {
    return (
      <div className="box">
        <h1>Update Component </h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

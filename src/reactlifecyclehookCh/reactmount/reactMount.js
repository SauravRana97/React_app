import React, { Component } from "react";

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
    setTimeout(() => {
        this.setState({name: "saurav"})
      }, 3000);
  }
  render() {
    return (
      <div>
        <h1>Mounted Component</h1>
       <h1>{this.state.name}</h1>
      </div>
    );
  }
}


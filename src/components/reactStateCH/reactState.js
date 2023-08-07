import React, { useState } from "react";
import "../asset/css/Common.css";
// class reactstate extends Component {

//     state={
//         name:"Saurav",
//         agenumber: this.props.age
//     }

//   render() {
//     return (
//       <div className="box">
//         <h1>React State </h1>
//         <h1> Student name is {this.state.name} </h1>
//         <h1>and age is {this.state.agenumber}</h1>
//       </div>
//     );
//   }
// }

const Reactstate = () => {
  const nameSateVariable = useState("saurav");
  const name = nameSateVariable[0];
  const setname = nameSateVariable[1];
  const [username,setusername] = useState("lakshmi")
  const namechange = () => {
    setname("Sakshi");
    setusername("Arti")
  };
  return (
    <div className="box">
      <h1>State Comoponent</h1>
      <h1>Sate value {name}</h1>
      <h1>Sate value {username}</h1>
      <button type="button" onClick={namechange}>
        click
      </button>
    </div>
  );
};
export default Reactstate;

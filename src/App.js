import React from "react";
import "./css/Common.css"
// import ReactPropType from "./reactproptypeCH/reactProptype";
// import Componentchild from "./reactComponentchildCh/reactComponentchild";
// import Reactstate from "./reactStateCH/reactState";
// import Reactclass from "./reactclassCh/reactclass";
// import ReactEvent from "./reactEventCh/reactEvent";
// import Reactmount from "./reactlifecyclehookCh/reactmount/reactMount"
import Reactupdate from "./reactlifecyclehookCh/reactupdate/reactUpdate"

const App = () => {
  return (
    <div className="home">
      <h1 style={{margin: "0 0 0 35%", padding:"5% 0 0 0" }}>React component Render all Imported Component</h1>
      {/* <ReactPropType name="Rahul" sum={10+2}/>
      <Componentchild> is Rahul</Componentchild>
      <Reactstate/>
      <Reactclass/>
      <ReactEvent/> */}
      {/* <Reactmount /> */}
      <Reactupdate/>
      </div>
  );
};

export default App;

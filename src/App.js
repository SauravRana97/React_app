import React from "react";
import "./css/Common.css"
import ReactPropType from "./reactProptype";
import Componentchild from "./reactComponentchild";
import Reactstate from "./reactState";
import Reactclass from "./reactclass";
import ReactEvent from "./reactEvent";

const App = () => {
  return (
    <div>
      <h1 className="box">App component Render all Imported Component</h1>
      <ReactPropType name="Rahul" sum={10+2}/>
      <Componentchild> is Rahul</Componentchild>
      <Reactstate/>
      <Reactclass/>
      <ReactEvent/>
    </div>
  );
};

export default App;

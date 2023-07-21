import React from "react";
import ReactPropType from "./reactProptype";
import Componentchild from "./reactComponentchild";
import Reactclass from "./reactclass";
import ReactEvent from "./reactEvent";
const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <ReactPropType name="Rahul" sum={10+2}/>
      <Componentchild> is Rahul</Componentchild>
      <Reactclass/>
      <ReactEvent/>
    </div>
  );
};

export default App;

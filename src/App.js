import React from "react";
import "../src/asset/css/Common.css";
// import ReactPropType from "./reactproptypeCH/reactProptype";
// import Componentchild from "./reactComponentchildCh/reactComponentchild";
// import Reactstate from "./reactStateCH/reactState";
// import Reactclass from "./reactclassCh/reactclass";
// import ReactEvent from "./reactEventCh/reactEvent";
// import Reactmount from "./reactlifecyclehookCh/reactmount/reactMount"
// import Reactupdate from "./reactlifecyclehookCh/reactupdate/reactUpdate";
// import Reactunmounted from "./reactlifecyclehookCh/reactumount/reactUnmonuted"
// import ReactEffect from "./reactuseEffect/reactuseEffect";
import ReactcustomHook from "./reactcustomHook/reactcustomHook"

const App = () => {
  return (
    <div>
      <h1 className="home">React component Render all Imported Component</h1>
      {/* <ReactPropType name="Rahul" sum={10+2}/>
      <Componentchild> is Rahul</Componentchild>
      <Reactclass/>
      <ReactEvent/> 
      <Reactmount /> 
      <Reactunmounted/>
      <Reactstate/>
      <ReactEffect />
      <Reactupdate /> */}
      <ReactcustomHook/>

    </div>
  );
};

export default App;

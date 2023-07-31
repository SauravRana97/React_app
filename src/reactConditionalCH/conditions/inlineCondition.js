import React from "react";
import Reactstate from "../../reactStateCH/reactState";
import "../../asset/css/Common.css";
// import ReactEffect from "../../reactuseEffect/reactuseEffect";
const Inlinecomponent = () => {
  const data = true;
  return (
    <React.Fragment>
      <h1 className="box">Inline Component </h1>
      {data && <Reactstate/>}
     
    </React.Fragment>
  );
};
export default Inlinecomponent;

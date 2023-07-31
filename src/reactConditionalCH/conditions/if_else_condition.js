import React from "react";
import "../../asset/css/Common.css";
import Reactstate from "../../reactStateCH/reactState";
import ReactEffect from "../../reactuseEffect/reactuseEffect";

const Simpleconditional = () => {
  const value = false;
  if (value) {
    return <Reactstate />;
  }
  return <ReactEffect />;
};
export default Simpleconditional;

import React from "react";
import pt from "prop-types"
const ReactProptype = (props) => {
  return (
    <div>
      <h1>Student Name is {props.name}</h1>
      <h1>Age {props.sum}</h1>
      <h1>Class {props.class}</h1>
    </div>
  );
};

ReactProptype.propTypes={
    name: pt.string,
    sum:pt.number,
}

ReactProptype.defaultProps={
    name:"Saurav",
    class:12,
}


export default ReactProptype;

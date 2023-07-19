import React from "react";
import pt from "prop-types"
const Student = (props) => {
  return (
    <div>
      <h1>Student Name is {props.name}</h1>
    </div>
  );
};

Student.propTypes={
    name: pt.string
}

Student.defaultProps={
    name:"Saurav"
}


export default Student;

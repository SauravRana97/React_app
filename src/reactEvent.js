import React from "react";
import "./css/Common.css";

const ReactEvent = () => {
  let name = "saurav";

  const clickbtn = (value) => {
    console.log("Name old value", name);
    name = value;
    console.log("Name New Value", name);
    // document.getElementsByClassName("button").style.display="show";
  };

  return (
    <div className="box">
      <h1>React Event</h1>
      <button onClick={() => clickbtn("Shweta")}>click me</button>
      <h1>{name}</h1>
      {/* <h1 id="person" className="button">
        {name}
      </h1> */}
    </div>
  );
};

export default ReactEvent;

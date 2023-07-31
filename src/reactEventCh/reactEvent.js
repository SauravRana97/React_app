import React, { useState } from "react";
import "../asset/css/Common.css";

//implement all diffrent method of event handling
const ReactEvent = () => {
  let [name, setname] = useState("saurav");

  const clickbtn = (value) => {
    setname(value);
  };

  //   const changevalue = ()=>{
  //     clickbtn("Shweta")
  //   }

  return (
    <div className="box">
      <h1>React Event</h1>
      <button onClick={() => clickbtn("Shweta")}>click me</button>
      {/* <button onClick={clickbtn.bind(this,"Shweta")}>click me</button> */}
      {/* <button onClick={changevalue}>click me</button> */}
      <h1>{name}</h1>
    </div>
  );
};

export default ReactEvent;

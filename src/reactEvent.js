import React,{ useState } from "react";
import "./css/Common.css";

const ReactEvent = () => {
  let [ name, setname] = useState("saurav");

  const clickbtn = (value) => {
    setname(value)
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

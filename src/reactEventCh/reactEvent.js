import React, { useState } from "react";
import "../asset/css/Common.css";
import Button from 'react-bootstrap/Button';
//implement all diffrent method of event handling
const ReactEvent = () => {
  let [name, setname] = useState("saurav");
  let [vishnu,setvishnu] =useState("")

  const clickbtn = (value) => {
    setname(value);
  };
  const clickbtn2 = (value) => {
    setvishnu(value);
  };

  return (
    <div className="box">
      <h1>React Event</h1>
      <button onClick={() => clickbtn("Shweta")} className="btn btn-danger">click me</button>
      {/* <button onClick={clickbtn.bind(this,"Shweta")}>click me</button> */}
      {/* <button onClick={changevalue}>click me</button> */}
      <h1>{name}</h1>
      <Button variant="warning" onClick={()=> clickbtn2("Vishnu chutiya h")}>Warning</Button>{' '}
      <h1>{vishnu}</h1>
      
    </div>
  );
};

export default ReactEvent;

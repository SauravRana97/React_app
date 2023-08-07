import React, { useState, useEffect } from "react";
// import "../asset/css/Common.css";
import { useNavigate } from "react-router-dom";

const Reactuseeffect = () => {
  let navigate = useNavigate();
  const [name, setname] = useState("saurav");
  const [roll, setroll] = useState(0);
  const Handleclick = () => {
    setname("sakshi");
    navigate(-1);
  };
  const rollupdate = () => {
    setroll(2);
  };

  useEffect(() => {
    console.log("use Effect Called");
  },[roll]);
  return (
    <div className="box">
      <h1>UseEffect hook Component</h1>
      <p>Name of Student {name}</p>
      <p>RollNo of Student {roll}</p>
      <button type="button" onClick={Handleclick}>
        click me
      </button>
      <button type="button" onClick={rollupdate}>
        Set rollNo
      </button>
    </div>
  );
};
export default Reactuseeffect;

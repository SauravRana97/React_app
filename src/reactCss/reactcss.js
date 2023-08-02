import React from "react";
import "../asset/css/Common.css";
const Reactcss = () => {
    let data = true
  let bg = {
    color: "yellow",
  };
  let blackbg = {
    fontSize: "50px",
  };
  if(data){
    blackbg.fontSize = "10px"
  }
  return (
    <div className="box">
      <h1 style={bg}>font color red</h1>
      <h1 style={{ ...bg, ...blackbg }}> font size and color change</h1>
      <h1 style={{...blackbg,...{color: " red",height: "20vh" }}}>india ia a Country</h1>
    </div>
  );
};
export default Reactcss;

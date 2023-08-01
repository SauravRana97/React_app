import React, { useState } from "react";
import "../asset/css/Common.css";
const Maplist = (props) => {
  let data = [10, 20, 30, 40];
  let propdata = props.arrvalues;
  //   let student = [
  //     { id: 1, name: "saurav", password: "saf324ds" },
  //     { id: 2, name: "akshay", password: "saf324dssadsad" },
  //   ];

  let [arrayvalues] = useState([
    { id: 1, name: "saurav", password: "saf324ds" },
    { id: 2, name: "akshay", password: "saf324dssadsad" },
  ]);
  // let datavalue = data.map((value)=>{
  //     return <li>{value}</li>
  // })
  return (
    <div className="box">
      {/* Simple Way 
             <h1 className='box'>{datavalue}</h1> */}
      <p>Local Data:</p>
      {data.map((value) => {
        return <li>{value}</li>;
      })}
      <br></br>
      <p>Parent Data:</p>
      {propdata.map((value) => {
        return <li>{value}</li>;
      })}
      <br></br>
      <p>State Data:</p>
      
      {arrayvalues.map((item)=>{
        return <>
        <li> {item.id}</li>
        <li>{item.name}</li>
        <li>{item.password}</li>
        </>
      })}
    </div>
  );
};
export default Maplist;

import React, { useState } from "react";
import "../asset/css/Common.css";
const Maplist = (props) => {
  let data = [10, 20, 30, 40];
  let propdata = props.arrvalues;
  console.log(propdata);
    // let student = [
    //   { id: 1, name: "saurav", password: "saf324ds" },
    //   { id: 2, name: "akshay", password: "saf324dssadsad" },
    // ];
    // let [studentData] = useState(student)

  let [arrayvalues] = useState([
    { id: 1, name: "saurav", password: "saf324ds" },
    { id: 2, name: "akshay", password: "saf324dssadsad" },
    { id: 3, name: "sunakshi", password: "fghfgfghfghfgh" },
  ]);
  
  return (
    <div className="box">
      {/* Simple Way 
             <h1 className='box'>{datavalue}</h1> */}
      <p>Local Data:</p>
      {data.map((value) => {
        return <li key={value.toString()}>{value}</li>;
      })}
      <br></br>
      <p>Parent Data:</p>
      {propdata.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
      <br></br>
      <p>State Data:</p>
      {arrayvalues.map((item) => {
        return (
          <div key={item.id}>
            <li >
              Student Id:{item.id}
              <br></br>
              Student Name:{item.name}
              <br></br>
              Student Password:{item.password}
            </li>
          </div>
        );
      })}
    </div>
  );
};
export default Maplist;

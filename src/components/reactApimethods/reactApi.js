import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


const Reactapi = () => {
  const [Data, setData] = useState({ data: [] });
  const navigate = useNavigate();
  const getData = () => {
    const apiUrl = "https://api.github.com/users/hacktivist123/repos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => {
        setData({ data: res });
      });
    console.log(Data);
  };

  return (
    <div className="box">
      <h1>Rest API</h1>
      <Button
        variant="success"
        type="button"
        name="button"
        onClick={() => getData()}
      >
        Get Data
      </Button>
      <Button
        variant="warning"
        type="button"
        name="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </Button>

      {/* {Data.map((item) => {
        return (
        <div key={item.id}>         
            <li>
              Student Id:{item.id}
              <br></br>
              Student Name:{item.name}
              <br></br>
              Student Password:{item.password}
            </li>
          </div>
        );
      })} */}
      {Data.data.map((items, index) => {
        return (
          <div key={index}>
            <li>{items.name}</li>
          </div>
        );
      })}
    </div>
  );
};
export default Reactapi;

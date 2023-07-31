import React from "react";
import customhook from "./custumHook";
import "../asset/css/Common.css";
const Customhook = () => {
  const data = customhook();
  return (
    <div className="box">
      <h1>Custom hook Component</h1>
      <p>{data.name}</p>
      <button type="button" onClick={() => data.changename("Peeyush")}>
        Click
      </button>
    </div>
  );
};
export default Customhook;

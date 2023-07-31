import React from "react";
import "../../../asset/css/Common.css";
const Login = ( props ) => {
  return (
    <div className="box">
      <h1>Please SignIn</h1>
      <button type="button" onClick={() => props.login()}>
        SignIn
      </button>
    </div>
  );
};
export default Login;

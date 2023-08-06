import React, { useState } from "react";
import Login from "./login";
import Dashboard from "./dashboard";
// import "../../../asset/css/Common.css";

const Home = () => {
  let [access, setaccess] = useState(false);

  const logoutclick = () => {
    setaccess(false);
  };
  const loginclick = () => {
    setaccess(true);
  };
  // ####### Advance Way with Ternary Operator ########
  return(
    <React.Fragment>
      {access ? <Dashboard logout={logoutclick}/> : <Login login={loginclick}/>} 
    </React.Fragment>
  )
  // ####### Simple Way ########
  // if (access) {
  //   let condition = <Dashboard logout={logoutclick} />;
  //   return <React.Fragment>
  //     {condition}
  //   </React.Fragment>
  // }
  // return <Login login={loginclick} />;
};

export default Home;

import React from "react";
import Student from "./Student";

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Student name="Rahul" sum={10+2}/>
    </div>
  );
};

export default App;

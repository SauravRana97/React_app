import React from "react";
import Student from "./Proptype";
import Componentchild from "./Componentchild"

const App = () => {
  return (
    <div>
      <h1>App component</h1>
      <Student name="Rahul" sum={10+2}/>
      <Componentchild> is Rahul</Componentchild>
    </div>
  );
};

export default App;

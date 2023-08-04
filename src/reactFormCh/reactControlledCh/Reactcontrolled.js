import React, { useState } from "react";
import "../../asset/css/Common.css";
import Button from "react-bootstrap/Button";

export default function Controlledcomponent() {
  const [formData, setformData] = useState({
    name: "",
    // password: "",
    // emailId: "",
  });
  const inputsHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="box">
      <h1>React Form</h1>
      <form onSubmit={inputsHandler}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setformData(e.target.value)}
        ></input>
        <Button variant="danger" name="button">
          Submits
        </Button>
      </form>
    </div>
  );
}

// export default function form(){
//   const [formData, setFormData] = useState({name: "",email: "",message: ""});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
//     );
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

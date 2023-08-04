import React, { useState } from "react";
import "../../asset/css/Common.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../../asset/img/Registerbg.jpg";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Controlledcomponent() {
  const [formData, setformData] = useState({
    name: "",
    password: "",
    email: "",
  });
  const inputsHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
  };
  const handleChange = (event) => {
    // console.log("handle chnage", event.target);
    const { name, value } = event.target;
    setformData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <Container fluid="sm">
      <div className="box">
        <Row>
          <Col>
            <Card >
              <Card.Text style={{color:"black",fontSize:"30px"}}>
              React Form
            </Card.Text>
              <Card.Img variant="top" src={pic} />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            {/* <h1>React Form</h1> */}
          </Col>
          <Col>
            <Form onSubmit={inputsHandler}>
              <Form.Label>Name</Form.Label>
              <Form.Group>
                <Form.Control
                  type="name"
                  placeholder="Enter Name"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input> */}

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input> */}

              <Form.Label>Email address</Form.Label>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              {/* <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input> */}

              <Button variant="danger" type="submit" name="button">
                Submits
              </Button>
            </Form>
              <Card.Text style={{color:"black",fontSize:"30px"}}>
              Form data { formData.name} { formData.password}{ formData.email}
              
            </Card.Text>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

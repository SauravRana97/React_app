import React, { useState } from "react";
import "../../asset/css/Common.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../../asset/img/Registerbg.jpg";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

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
      <div className="box" style={{ width: "50%", height: "90%" }}>
        <Row>
          <Col>
            <Card style={{ height: "100%" }}>
              <Card.Text style={{ color: "black", fontSize: "30px" }}>
                Sign up
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
            <Form
              onSubmit={inputsHandler}
              style={{ width: "90%", margin: "20% 0 0 5%"}}
            >
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Group>
                <FloatingLabel label="Enter Name" className="mt-3">
                  <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              ></input> */}

              <Form.Group>
                {/* <Form.Label>Password</Form.Label> */}
                <FloatingLabel label="Enter Password" className="mt-3">
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Form.Group>
              {/* <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input> */}

              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Group>
                <FloatingLabel label="Enter Email" className="mt-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Form.Group>
              {/* <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input> */}

              <Button
                variant="danger"
                type="submit"
                name="button"
                style={{ width: "60%", margin: "10% 0 0 20% " }}
              >
                Submits
              </Button>
            </Form>
            <Card.Text style={{ color: "black", fontSize: "30px" }}>
              {/* <p>{JSON.stringify(formData)}</p> */}
              {/* Form data Output <br></br>Username:{formData.name}<br></br>Password:{formData.password}
              <br></br> Email: {formData.email} */}
            </Card.Text>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

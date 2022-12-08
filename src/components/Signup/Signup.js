import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import './Registration.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Signup.css";

function Signup(props) {
  //   console.log(props);

  return (
    <>
      <Modal show={props.view} onHide={props.handleView}>
        <Modal.Header closeButton className="">
          <Modal.Title className="text">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            <Form.Group>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            <Button variant="primary" className="m-1 float-start w-100" onClick={props.handleView}>
                Login
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={props.handleView}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleView}>
            Login
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default Signup;

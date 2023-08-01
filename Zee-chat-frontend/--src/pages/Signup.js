import React, { useState } from 'react';
import {Col,Container,Form,Row,Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./Signup.css";
import Botimg from "../assets/Bot.jpg";
function validateImg() {}

function Signup() {
const[email,SetEmail]=useState('');
const[password,SetPassword]=useState('');
const[name,SetName]=useState("");

  return (
    <Container>
        <Row>
            
            <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
    <Form style={{width:"80%",maxWidth:500}}>
        <h1 className="text-center">Create Account</h1>
    <div className="signup-profile-pic_container">
            <img src={Botimg} className="signup-profilr-pic"/>
            <label htmlFor="image-upload" className="image-upload-label">
                < i className="fas fa-plus-circle add-picture-icon"></i>
            </label>
            <input type="file" id="image-upload" hidden accept="image/png, image/jpeg" onChange={validateImg}/>
    </div>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name" onChange={(e)=>SetName(e.target.value)} value={name}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>SetEmail(e.target.value)} value={email}/>
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) =>SetPassword(e.target.value)} value={password}/>
      </Form.Group>
   
      <Button variant="primary" type="submit">
        Create Account
      </Button>
      <div className='py-4'>
        <p className='text-center'>
        Already have an account?<Link to="/Login">Login</Link>
        </p>

      </div>
    </Form>
    </Col>
    <Col md={5} className="Signup__bg"></Col>
    </Row>
    </Container>
  );
}

export default Signup;
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { Link } from 'react-router-dom';



const Login = props => {
  const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    
    function addEmail(event){
      setEmail(event.target.value)

  }function addPassword(event){
      setPassword(event.target.value)

  }
  function login(){

      fetch("http://localhost:3000/login",
{
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({email:`${email}`,password:`${password}`})
})
.then((res)=>{
  console.log(res)
  return res.json()
}).then((data)=>{
  console.log(data)
  
localStorage.setItem("token",JSON.stringify(data.token))


}).catch((error)=>{
console.log(error)
})
  }

  
  return (
    <>
    <Header/>
    <Container style={{width:"30%",marginTop:"15%"}}>
    <Form >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  onChange={addEmail} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={addPassword} type="password" placeholder="Password" />
      </Form.Group>
      <button onClick={login} type='submit'>Submit</button>
      <Link to={'/register'}>Register</Link>
    </Form>
    </Container>
    </>
  )
}


export default Login
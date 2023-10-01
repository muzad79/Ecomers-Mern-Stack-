import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Registration = () => {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[response,setResponse]=useState("")
    
    function addName(event){

        setName(event.target.value)


    }
    function addEmail(event){
        setEmail(event.target.value)

    }function addPassword(event){
        setPassword(event.target.value)

    }
    function register(){

        fetch("http://localhost:3000/user",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({name:`${name}`,email:`${email}`,password:`${password}`})
})
.then((res)=>{
    console.log(res)
    return res.json()
}).then((data)=>{
    
setResponse(data.message)


}).catch((error)=>{
console.log(error)
})
    }
  return (
    <>
    <Header/>
    <Container style={{width:"30%",marginTop:"10%"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={addName} type="text" placeholder="Full Name" name='fullName'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={addEmail} type="email" placeholder="Enter email" name='email' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={addPassword} type="password" placeholder="Password" name='password' />
      </Form.Group>
    
      <button onClick={register} type='submit'>Register</button>
      {response}

    </Form>
    </Container>
    </>
  )
}

export default Registration
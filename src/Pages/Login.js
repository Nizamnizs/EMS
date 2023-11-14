import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { adminLoginApi } from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  //validate state
  const [emailValid, setEmailValid] = useState(true)
  const [pswValid, setPswValid] = useState(true)


  //state to hold inputs
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    psw: ""
  })

  const setInputs = (e) => {
    const { value, name } = e.target
    if (name == 'email') {
      if (value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }

    }
    if (name == 'psw') {
      if (value.match(/^[a-zA-Z0-9]+$/)) {
        setPswValid(true)
        setLoginInputs({ ...loginInputs, [name]: value })
      }
      else {
        setPswValid(false)
      }

    }

   

  }
  console.log(loginInputs);

  const navigate = useNavigate()
  const handleSubmit = async () => {
    const{email,psw}=loginInputs
    if(email=="" || psw==""){
      alert("all inputs are required")
    }
    else{
      const result=await adminLoginApi(loginInputs)
      if(result.status>=200 && result.status<300){
      
        navigate('/home')
      }
      else{
        alert(result.data)
      }
    }
    
  }

  return (
    <div>
      <Card className='container shadow mt-5 mb-5' style={{ width: '600px', margin: '0 auto', marginTop: '100px' }}>
        <Card.Body>
          <Card.Title className='fs-4 text-center'>Login</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setInputs(e)}
                name='email'
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            {!emailValid &&
              <div>
                <p className='text-danger'>*invalid email</p>
              </div>}


            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setInputs(e)}
                name='psw'
                type="password"
                placeholder="Password"
              />
            </Form.Group>
           {!pswValid && <div>
              <p className='text-danger'>*invalid password</p>
            </div>}

            <Button className='w-100 text-center mt-4' variant="primary" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  )
}

export default Login
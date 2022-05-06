import React, {Component} from 'react'
import { Navigate, Link } from 'react-router-dom';
import './Login.css'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
export default class Login extends Component {
 constructor(props) {
   super(props)
   const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
  this.state = {
     username: "",
     password: "",
     loggedIn
   }
   this.onChange = this.onChange.bind(this)
   this.submitForm = this.submitForm.bind(this)
 }
 onChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 submitForm(e){
   e.preventDefault()
   const { username, password} = this.state

   //login 

   if(username === "admins" && password=== "12342") {
    localStorage.setItem("token", "ihdhjkbcxvkfdjshlk")
    this.setState({
       loggedIn: true
     })
   }
   else {
     alert("Incorrect username Or Password....")
   }
   
 }
 render() {
  if(this.state.loggedIn){
    return <Navigate to='/Dashboard' />
  } 
  return (
    <div>
     <Container fluid>
        <Row>
          <Col sm={5} className="login-left">
          <div className="d-flex align-items-center position-absolute" style={{top: '10px' ,left: '10px'}}>
            <h5 class="fw-bold ms-2 mb-0">Comapany Name</h5>
          </div>
            <Container className='mt-5'>
              <Row className='align-items-center justify-content-center'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign In</h3>
                    <p className='mb-3 text-muted'>Sign in into your accont</p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='mb-4 d-flex'>
                      <span className='me-auto'><Link to="/" style={{textDecoration:'none'}}>Neead an account?</Link></span>
                      <span className='ms-auto'><Link to="/" style={{textDecoration:'none'}}>Forgot Password</Link></span>
                    </div>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
            </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={7} className="login-right">
            <h5 className='text-warning text-center mb-3 px-5'>Get instant access to Millions of Verified Emails and Direct Dials Powered by Lead Intelligence</h5>
          <div className='result-one'>
          <img src='/images/result_one.png' alt='result-one' />
          </div>
          <div className='result-two'>
          <img src='/images/result_two.png' alt='result-two' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}
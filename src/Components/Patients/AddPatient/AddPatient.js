import React, {Component} from 'react'
import {Row, Col, Container,Form} from 'react-bootstrap';
import './AddPatient.css'
import Sidebar from '../../Sidebar/Sidebar';
import NavbarMenu from '../../Navbar/NavbarMenu';
export default class  AddPatient extends Component {
     constructor(props){
          super(props)
          const token = localStorage.getItem("token")
          let loggedIn = true
          if(token ==  null){
            loggedIn= false
          }
          this.state = {
            loggedIn
          }
        }
render(){
  return (
     
    <div>
         <Sidebar />
         <NavbarMenu />
    <Container className='bookonline'>
    <Form action='http://backend.softgenics.in/api/patients' method="POST">
           <div className='text-center d-inline mb-b'>
             <h2 className='mb-5' sty>Add<span style={{color:'#3bc0fd'}}> Patient</span></h2>
           </div>
              <Row>
                <Col md={6} sm={6}>
                   <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" className="form-control" name="name" placeholder="Patient Full Name" required/>
                    </Col>

                               <Col md={6} sm={6}>
                               <Form.Label htmlFor="select">Select Age</Form.Label>
                                    <Form.Select className="form-control" name="age">
                                         <option>0-18</option>
                                         <option>18-30</option>
                                         <option>30-60</option>
                                         <option>60-80</option>
                                    </Form.Select>
                               </Col>
                                </Row>
                                <Row>
                                 <Col md={6} sm={6}>
                                 <Form.Label htmlFor="email">E-mail</Form.Label>
                                    <Form.Control type="email" className="form-control" name="email" placeholder="Enter Patients E-mail"/>
                                 </Col>
                                 <Col md={6} sm={6}>
                                    <Form.Label htmlFor="telephone">Phone No.</Form.Label>
                                    <Form.Control type="tel" name="P_number" className="form-control" placeholder='Enter Patient number' required/>
                               </Col>
                                </Row>
                                <Row>
                                 <Col md={6} sm={6}>
                                 <Form.Label htmlFor="gender">Gender</Form.Label>
                                 <Form.Label>Select Gender</Form.Label>
                          {['radio'].map((type) => (
                             <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                  inline
                                  label="Male"
                                  name="gender"
                                  value="Male"
                                  type={type}
                                  />
                                <Form.Check
                                  inline
                                  label="Female"
                                  name="gender"
                                  value="Female"
                                  type={type}
                                />
                                <Form.Check
                                 inline
                                 label="Others"
                                 name="gender"
                                 type={type}
                                 value="others"
                                />
                              </div>
                            ))}
                                 </Col>
                                 <Col md={6} sm={6}>
                                 <Form.Label htmlFor="category">Treatment for:</Form.Label>
                                    <Form.Select className="form-control" name="category">
                                         <option>Dental Implants</option>
                                         <option>18-30</option>
                                         <option>30-60</option>
                                         <option>60-80</option>
                                    </Form.Select>
                               </Col>
                                </Row>
                               <Col md={12} sm={12}>
                                    <Form.Label htmlFor="address">Address</Form.Label>
                                    <Form.Control type="address" className="form-control" name="address" placeholder="Patient Address" required/>
                               </Col>
                               
                          <Row>
                          <Col md={12} sm={12}>
                                    <Form.Label htmlFor="Message">Decribe Problem:</Form.Label>
                                    <Form.Control as="textarea" className="form-control mb-3" rows="5" name="problem" placeholder="You can describe Patient problem here..."></Form.Control>
                             <button type="submit" className="form-control" id="cf-submit" >Add Patient</button>
                             </Col>
                          </Row>
     </Form>
    </Container>
</div>
  )
}

}
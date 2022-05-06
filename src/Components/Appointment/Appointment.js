import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../Navbar/NavbarMenu'
import { Row, Col, Form } from 'react-bootstrap'
import './Appointment.css'
const Appointment = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
             <section className="appointment" data-stellar-background-ratio="3">
          <div className="container">
               <Row>

                    <Col md={6} sm={6} >
                         <img src="images/appointment.jpg" className="img-responsive" alt="" />
                         <img src="images/appointment1.jpg" className="img-responsive" alt="" style={{width:'700px'}} />
                    </Col>

                    <Col md={6} sm={6} style={{ boxShadow:'0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
                         <Form id="appointment-form" action="https://backend.softgenics.in/api/addAppointmnet" method="post" >
                                <div className='text-center d-inline mb-b'>
                                   <h2 className='mb-5 mt-3' sty>Make an <span style={{color:'#3bc0fd'}}>Appointment</span></h2>
                                </div>
                                   <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control type="email" className="form-control" name="email"  placeholder="Your Email" />
                                   </Col>
                                    </Row>
                                    <Row>
                                     <Col md={6} sm={6}>
                                     <Form.Label htmlFor="gender">Select Gender</Form.Label>
                                     {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                             inline
                                             label="Male"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-1`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Female"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-2`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Others"
                                             name="gender"
                                             type={type}
                                             value="others"
                                             id={`inline-${type}-3`}
                                             />
                                        </div>
                                        ))}
                                     </Col>
                                     <Col md={6} sm={6}>
                                     <Form.Label htmlFor="select">Select Age</Form.Label>
                                        <Form.Select className="form-control" name="department">
                                             <option>0-18</option>
                                             <option>18-30</option>
                                             <option>30-60</option>
                                             <option>60-80</option>
                                        </Form.Select>
                                     </Col>
                                    </Row>
                                    <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Label htmlFor="date">Select Date</Form.Label>
                                        <Form.Control type="date" name="date" className="form-control" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Label htmlFor="select">Select Department</Form.Label>
                                        <Form.Select className="form-control" name="department">
                                             <option>General Health</option>
                                             <option>Cardiology</option>
                                             <option>Dental</option>
                                             <option>Medical Research</option>
                                        </Form.Select>
                                   </Col>
                                    </Row>
                                   <Col md={12} sm={12}>
                                        <Form.Label htmlFor="telephone">Phone Number</Form.Label>
                                        <Form.Control type="tel" className="form-control" name="p_number" placeholder="Phone"/>
                                        <Form.Label htmlFor="Message">Decribe Problem:</Form.Label>
                                        <Form.Control as="textarea" className="form-control mb-3" rows="5" name="message" placeholder="You can describe your problem here..."></Form.Control>
                                   </Col>
                              <Row>
                              <Col md={12} sm={12}>
                                 <button type="submit" className="form-control" id="cf-submit" >Submit Button</button>
                                 </Col>
                              </Row>

                        </Form>
                    </Col>

               </Row>
          </div>
     </section>
    </div>
  )
}

export default Appointment
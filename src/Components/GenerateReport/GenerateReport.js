import React, {Component} from 'react'
import {Row, Col, Container,Form} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../Navbar/NavbarMenu'
export default class GenerateReport extends Component {
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
    <Form action='http://backend.softgenics.in/api/addreport' method='POST'>
           <div className='text-center d-inline mb-b'>
             <h2 className='mb-5' sty>Make a New<span style={{color:'#3bc0fd'}}> Report</span></h2>
           </div>
              <Row>
                <Col md={6} sm={6}>
                   <Form.Label htmlFor="name">Name</Form.Label>
                    <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" required />
                    </Col>

                               <Col md={6} sm={6}>
                               <Form.Label htmlFor="age">Age</Form.Label>
                                <Form.Control type="number"  className='form-control' name="age" placeholder='Enter age' />
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
                                  name="sex"
                                  value="M"
                                  type={type}
                                  />
                                <Form.Check
                                  inline
                                  label="Female"
                                  name="sex"
                                  value="F"
                                  type={type}
                                />
                                <Form.Check
                                 inline
                                 label="Other"
                                 name="sex"
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
                                         <option>Wisdom Tooth Surgery</option>
                                         <option>Fractures of Jaw & Face</option>
                                         <option>Complete & Partial Denture</option>
                                         <option >Root Canal Treatment/option</option>
                                         <option>Prthodontic Treatment</option>
                                         <option>Smile Design/Full Mouth Rehabilitation</option>
                                         <option>Dental Laser/Bleeding & Swollen gum</option>
                                    </Form.Select>
                               </Col>
                                </Row>
                               
                          <Row>
                          <Col md={12} sm={12}>
                                    <Form.Label htmlFor="Message">Decribe Problem:</Form.Label>
                                    <Form.Control as="textarea" className="form-control mb-3" rows="5" name="disc" placeholder="You can describe Patient problem here..."></Form.Control>
                             <button type="submit" className="form-control" id="cf-submit" >Add Patient</button>
                             </Col>
                          </Row>
     </Form>
    </Container>
    </div>
  )
}
}

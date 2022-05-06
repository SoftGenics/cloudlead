import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { Col, Container, Row, Table } from 'react-bootstrap'
import './GenerateReport.css'
function PrintReport(){
  const [GetData, SetPost] = useState([]);
  const {id}  = useParams();
  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get(`https://backend.softgenics.in/api/report/${id}`);
      SetPost(res.data)
    }
    fetchPosts();
  })
  return (
    <div>
      {GetData.map((getdata) =>{
            return(
      <Container className='viewReport'>
        <Container className='report-container'>
          <Container className='first-row'>
            <h1>THE DENTAL & MAXILLOFACIAL <span style={{color:'white'}}> CLINIC </span></h1>
          </Container>
          <Container className='sec-row'>
            <Row>
              <Col xs={6}>
              <p><strong>Ref. No.</strong></p> 
              </Col>
              <Col xs={6}>
              <h3 style={{fontStyle:'italic',textAlign:'right'}}>Center for Dental Implants</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={6} className="doc-col">
                <h4 className='doc-name'>Dr. SWATI GUPTA</h4>
                <br></br>
                <p>B.D.S (Gold Medalist), M.D.S</p>
                <p>PROSTHODONTICS</p>
                <p>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</p>
                <p>SPECIALIST IN CROWN, BRIDGE & DENTURE</p>
                <p>Ex.SENIOR RESIDENT(K.G.M.C)</p>
                <p>PROFESSOR & SENIOR CONSULTANT</p>
                <p>B.B.D COLLEGE OF DENTAL SCIENCE</p>
              </Col>
              <Col xs={6} className="doc-col-2">
                <h4 className='doc-name' >Dr. HEMANT GUPTA</h4>
                <br></br>
                <p>ORAL & MAXILLOFACIAL SURGERY</p>
                <p>KING GEOGES' MEDICAL COLLEGE, LUCKNOW</p>
                <p>SPECIALIST INPLANTS & SURGRIES OF FACE & JAW</p>
                <p>Ex.XONSULTANT, VIVEKANAND POLYCKINIC</p>
                <p>PROFESSOR & SENIOR CONSULTANT</p>
                <p>B.B.D COLLEGE OF DENTAL SCIENCE</p>
              </Col>
            </Row>
          </Container>
          <Container className='third-row'>
            <Row>
              <Col xs={6}>
                <p>NAME: {getdata.name}</p>
              </Col>
              <Col xs={3}>
                <p>Age / Sex: {getdata.age} / {getdata.sex}</p>
              </Col>
              <Col xs={3}>
                <p>Date: {getdata.date}</p>
              </Col>
            </Row>
          </Container>

          <Container className='middle-container'>
          <small style={{float:'right', fontWeight:'700'}}>Medical History/Allergiess:</small>
          <br></br>
          <p className='disc card-text'>
            {getdata.disc}
          </p>
          <img src="/images/logo.png" alt="bg-logo"/>
          </Container>
          <Row>
            <Col xs={8}></Col>
            <Col xs={4}>
            <Table bordered hover size="sm">
              <thead>
              <tr>
                  <th colSpan={2}>APPOINTMENT</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td></td>
              </tr>
              </tbody>
              
            </Table>
            </Col>
          </Row>
          <Container className='third-bottom-row' fluid>
            <p className='text-center text-bold'>SPECIALITY TREATMENT FOR:</p>
            <ul>
              <li>Dental Implants</li>
              <li>Wisdom Tooth Surgery</li>
              <li>Fractures of Jaw & Face</li>
              <li>CAD/CAM Crown and Bridege</li>
              <li>Complete & Partial Denture</li>
              <li>Root Canal Treatment</li>
              <li>Prthodontic Treatment</li>
              <li>Smile Design/Full Mouth Rehabilitation</li>
              <li>Dental Laser/Bleeding & Swollen gum</li>
            </ul>
          </Container>
          <Container fluid className='second-bottom-row'>
            <p><strong>TIMING: </strong> Morning: 10 A.M. 2 P.M.(By Appoitment Only), Evening:5 P.M., SUNADY:10A.M. -5P.M. <span style={{backgroundColor:'black', color:'white', paddingLeft:'10px', paddingBottom:'4px', paddingRight:'10px', paddingTop:'4px'}}> Monady Evening Closed </span></p>
            <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADDRESS: </strong> 1/705, Bypass Road, Vishal Khand, Gomti Ngar, Lucknow-226010. Phone: 0522-4049731</p>
          </Container>
          <Container>
            <Row>
              <Col xs={2} className="before-col">

              </Col>
              <Col xs={8} className="between-col">
                <p>Valid For One Month Only / Not Medicolegal Purpose</p>
              </Col>
              <Col xs={2} className="after-col">

              </Col>
            </Row>
          </Container>
        </Container>
        
      </Container>
         )
        }
    )
 }
    </div>
  )
}

export default PrintReport;
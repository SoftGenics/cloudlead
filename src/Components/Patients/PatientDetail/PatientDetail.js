import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../../Sidebar/Sidebar'
import NavbarMenu from '../../Navbar/NavbarMenu'
function PatientDetail() {
    const [GetData, SetPost] = useState([]);
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`https://backend.softgenics.in/api/patient/${id}`);
        SetPost(res.data)
      }
      fetchPosts();
    })
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        {GetData.map((getdata) =>{
            return(
        <Container className='d-flex justify-content-center'>
        <Card style={{ width: '40rem' }}>
          <Row>
            <Col xs={4} className='d-flex justify-content-center pt-3'>
            <Card.Img variant="top" src="/images/av2.png" style={{width:'100px', height:'100px'}} />
            </Col>
            <Col xs={8}>
            <Card.Body>
                <Card.Title>{getdata.name}</Card.Title>
                <Card.Text>Age: <span>{getdata.age}</span></Card.Text>
                <Card.Text>Gender: <span>{getdata.gender}</span></Card.Text>
                <Card.Text>Phone No.: <span></span>{getdata.P_number}</Card.Text>
                <Card.Text>E-mail: <span></span>{getdata.email}</Card.Text>
                <Card.Text>Address: <span></span>{getdata.address}</Card.Text>
                <Card.Text>Treatment For: <span></span>{getdata.category}</Card.Text>
                <Card.Text>Problem: <span></span>{getdata.problem}</Card.Text>
            </Card.Body>
            </Col>
            </Row>
            </Card>
        </Container>
                          )
                        }
                    )
                 }
    </div>
  )
}

export default PatientDetail
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../Navbar/NavbarMenu';
const ViewAppointment = () => {
    const [GetData, SetPost] = useState([]);
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`https://backend.softgenics.in/api/Appointment/${id}`);
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
        <Card.Img variant="top" src="/images/appointment.jpg"  />
        </Col>
        <Col xs={8}>
        <Card.Body>
            <Card.Title>{getdata.name}</Card.Title>
            <Card.Text>Gender: <span>{getdata.gender}</span></Card.Text>
            <Card.Text>Phone No.: <span></span>{getdata._number}</Card.Text>
            <Card.Text>E-mail: <span></span>{getdata.email}</Card.Text>
            <Card.Text>Treatment: <span></span>{getdata.department}</Card.Text>
            <Card.Text>Message: <span></span>{getdata.message}</Card.Text>
            <Card.Text>Date: <span></span>{getdata.date}</Card.Text>
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

export default ViewAppointment
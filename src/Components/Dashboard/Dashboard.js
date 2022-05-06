import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <NavbarMenu />
      <Container className='right-report-container'>
            <div>
            <Button variant="outline-secondary" className='mt-3 ml-2'>Today</Button>
            <Button variant="outline-secondary" className='mt-3 mx-3'>This Month</Button>
            <Button variant="outline-secondary" className='mt-3 mx-3'>Last Month</Button>
            <Button variant="outline-secondary" className='mt-3 mx-3'>This Quarter</Button>
            <Button variant="outline-secondary" className='mt-3 mx-3'>This Year</Button>
            <Button variant="outline-secondary" className='mt-3 mx-3'>Last Year</Button>
            </div>
            <Row className='mt-3'>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Download</Card.Title>
                            <br></br>
                            <h2>133</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Total Email Sent</Card.Title>
                            <br></br>
                            <h2>50</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Unlocked</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
        </Container>
    </div>
  )
}

export default Dashboard
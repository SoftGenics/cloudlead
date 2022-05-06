import React,{useState, useEffect} from 'react'
import {Table, Container,  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../Navbar/NavbarMenu'
import axios from 'axios';
const TodaysAppointment = () => {
    let s_number=0;
    const [GetData, SetPost] = useState([]);
    useEffect(() => {
  
      const fetchPosts = async () =>{
        const res = await axios.get("https://backend.softgenics.in/api/todayAppointmnet");
        SetPost(res.data)
      }
      fetchPosts();
    });
  
    const deleteAppointment = async id => {
      await axios.delete(`https://backend.softgenics.in/api/deleteAppointment/${id}`)
    }
  return (
    <div>
      <Sidebar />
      <NavbarMenu />
              <Container className='mt-5'>
        <h1 className='text-center mb-3'>Today's <span style={{color:'#3bc0fd'}}> Appointment</span></h1>
        <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Gender</th>
              <th>email</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            { GetData.map((getData) =>{
      

      
      return(
          <>
            <tr>
              <td>{s_number=s_number+1}</td>
              <td>{getData.name}</td>
              <td>{getData.gender}</td>
              <td>{getData.email}</td>
              <td>{getData.p_number}</td>
              <td>
                <Link to={`/viw_appointment/${getData.id}`} className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
                <Button className='btn btn-danger' onClick={() => deleteAppointment(getData.id)} >Delete </Button>
              </td>
            </tr>
           
          </>
              )

        }
      )}
          </tbody>
        </Table>

        </Container>
    </div>
  )
}

export default TodaysAppointment
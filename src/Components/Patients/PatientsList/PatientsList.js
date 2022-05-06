import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Container, Table } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import NavbarMenu from '../../Navbar/NavbarMenu';
import { Button } from 'react-bootstrap';
import axios from "axios";
import { Link } from 'react-router-dom';

const PatientsList = () => {
  const [GetData, SetPost] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("https://backend.softgenics.in/api/allpatient");
      SetPost(res.data)
    }
    fetchPosts();
  });

  const deleteDoctor = async id => {
    alert("do you want to delete")
    await axios.delete(`https://backend.softgenics.in/api/deletepatient/${id}`)
    
  }
  return (
    <>
    <Sidebar />
    <NavbarMenu />
    <Container className='mt-5'>
      <h1 className='text-center mb-3'>List<span style={{color:'#3bc0fd'}}> Patients</span></h1>
      <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Number</th>
            <th>email</th>
            <th>Treatment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {GetData.map((getData) =>{
      return(
        <>
          <tr>
            <td>{getData.id}</td>
            <td>{getData.name}</td>
            <td>{getData.P_number}</td>
            <td>{getData.email}</td>
            <td>{getData.category}</td>
            <td>
              <Link to={`/patient_detail/${getData.id}`} className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
              <Button className='btn btn-danger' onClick={() => deleteDoctor(getData.id)} >Delete </Button>
            </td>
          </tr>
         
        </>
            )

      }
    )}
        </tbody>
      </Table>
      </Container>

    </>
  )
}

export default PatientsList
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Container, Table, Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../Navbar/NavbarMenu'
import axios from "axios";
import { Link } from 'react-router-dom';

function ReportList() {
  let s_number=0;
  const [GetData, SetPost] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("https://backend.softgenics.in/api/report");
      SetPost(res.data)
    }
    fetchPosts();
  });

  const deleteDoctor = async id => {
    await axios.delete(`https://backend.softgenics.in/api/deletereport/${id}`)
  }
  return (
    <>
    <Sidebar />
    <NavbarMenu />
    <Container className='mt-5'>
      <h1 className='text-center mb-3'>All<span style={{color:'#3bc0fd'}}> Reports</span></h1>
      <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {GetData.map((getData) =>{
      return(
        <>
          <tr>
          <td>{s_number=s_number+1}</td>
            <td>{getData.name}</td>
            <td>{getData.age}</td>
            <td>{getData.sex}</td>
       
            <td>
              <Link to={`/View_report/${getData.id}`} className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
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
export default ReportList;

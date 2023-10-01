import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../component/adminNav';
import SuccessAlert from '../component/successAlert';
import Swal from "sweetalert2";
import { ToastContainer,toast } from 'react-toastify';

function ManageStudent(){
const [records, setRecords] = useState([]);
const [isLoading, setLoading] = useState(true);

let count =1;
useEffect(() => {
    document.title = 'Manage Student';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/manage') // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        setRecords(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
        setLoading(false)
      });
  },);

  const confirmDeletinon = (recordID) =>{

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      handleDelete(recordID)
      SuccessAlert("Deleted", 'success',"Student record has been deleted")
    }
  })
}
  


  const handleDelete = (recordID) => {
    toast.info("Please wait...")
    
    axios.delete(`http://localhost:3000/manage/${recordID}`)
      .then((res) => {
        const response = res.data.message;
        if(response ==="deleted success"){

        }else{
          console.log("Erorr occured!");
        }
      })
      .catch((error) => {
        console.error("Failed", error);
      });
  };


    return(
        <div className=''>          
<ToastContainer/>
                <AdminNav subTitle="Manage Student"/> 
            <div className='container mt-5'>
           <div className='card'>
            <div className='text-center card-header'>
            Student Record List
            </div>
            <div className='card-body'>
      
            <table className='table table-striped'>
            <thead>
                <tr>
                <th>S/N</th>
                <th>Matric No.</th>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {isLoading ? (<tr><td colSpan="7"><div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div></td></tr>) : (records.length > 0 ? (
                records.map((datas) => (
                    <tr key={datas.user_id}>
                    <td>{count++}</td>
                    <td>{datas.regNo}</td>
                    <td>{datas.name}</td>
                    <td>{datas.email}</td>
                    <td>{datas.phone}</td>
                    <td>{(()=>{
                        const databaseDateTime = new Date(datas.date)
                        const formattedDateTime = databaseDateTime.toLocaleString('en-US', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                          second: '2-digit',
                        });

                          return formattedDateTime;
                        
                    })()}</td>
                    <td>
                        <button className='btn btn-danger' onClick={() => confirmDeletinon(datas.student_id)}>Delete</button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="6" className='text-center'>No records found</td>
                </tr>
               ) )}

            </tbody>
            </table>
            </div>
            </div>
            <Link to="/signup" className='btn btn-success col-sm-3 mt-3'>View feedback</Link>
        </div>
        </div>
    );
}



export default ManageStudent;
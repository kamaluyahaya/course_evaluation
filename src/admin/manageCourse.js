import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../component/adminNav';
import SuccessAlert from '../component/successAlert';
import Swal from "sweetalert2";
import { ToastContainer,toast } from 'react-toastify';

function ManageCourse(){
const [records, setRecords] = useState([]);
const [isLoading, setLoading] = useState(true);

let count =1;
useEffect(() => {
    document.title = 'Admin: Courses';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/manageCourse') // Assumes your React app is hosted on the same server as Express.js
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
    
    axios.delete(`http://localhost:3000/admin/manage/${recordID}`)
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
                <AdminNav subTitle="Manage Course"/> 
            <div className='container mt-5'>
           <div className='card'>
            <div className='text-center card-header'>
            Course Record List
            </div>
            <div className='card-body'>
      
            <table className='table table-striped'>
            <thead>
                <tr>
                <th>S/N</th>
                <th>Course Title</th>
                <th>Course Code</th>
                <th>Level</th>
                <th>Semester</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {isLoading ? (<tr><td colSpan="6"><div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div></td></tr>) : (records.length > 0 ? (
                records.map((datas) => (
                    <tr key={datas.user_id}>
                    <td>{count++}</td>
                    <td>{datas.course_title}</td>
                    <td>{datas.course_code}</td>
                    <td>{datas.level}</td>
                    <td>{datas.semester}</td>
                   
                    <td>
                        <button className='btn btn-danger' onClick={() => confirmDeletinon(datas.course_id)}>Delete</button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="7" className='text-center mt-5'>No records found</td>
                </tr>
                ))}

            </tbody>
            </table>
            </div>
            </div>
            <Link to="/admin/addCourse" className='btn btn-success col-sm-3 mt-3'>Add new course</Link>
        </div>
        </div>
    );
}



export default ManageCourse;
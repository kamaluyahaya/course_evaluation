import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessMessage from './successMessage';
import StudentNavs from '../component/StudentNavs';
// import { response } from 'express';
function Manage(){
const [records, setRecords] = useState([]);
const [deleteProcess, setDeletion] = useState(null);
const [updateRecord, setUpdate] = useState(null);

let count =1;
useEffect(() => {
    document.title = 'Admin: Manage student';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/manage') // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  },);


  const handleDelete = (recordID) => {
    axios.delete(`http://localhost:3000/manage/${recordID}`)
      .then((res) => {
        console.log("Success");
        setDeletion("Record Deleted successfully");
        // Reset the deletion message after a delay (e.g., 5 seconds)
        
      })
      .catch((error) => {
        console.error("Failed", error);
      });
  };

  const handleReceived = (recordId)=>{
    axios.put(`http://localhost:3000/manage/${recordId}`)
    .then((response)=>{
        setUpdate('Item received successfully');
    }).catch((error)=>{
        console.error("Error in updating record", error)
    })
  }
    return(
        <div className=''>          

                <StudentNavs/> 
            <div className='container mt-5'>
            {deleteProcess && (<SuccessMessage message={deleteProcess} />)}
            {updateRecord && (<SuccessMessage message={updateRecord} />)}

            <h1>Record List</h1>
      
            <table className='table table-striped'>
            <thead>
                <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Email address</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {records.length > 0 ? (
                records.map((datas) => (
                    <tr key={datas.user_id}>
                    <td>{count++}</td>
                    <td>{datas.name}</td>
                    <td>{datas.email}</td>
                    <td>{datas.phone}</td>
                    <td>{datas.password}</td>
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
                    <td>{
                    datas.status==="new" ? (<div className='text-warning'>New employee</div>) :(<div className='text-success'>Active employee</div>)}</td>
                    <td>
                        <button className='btn btn-warning mr-2' onClick={()=>handleReceived(datas.user_id)}>Received</button> 
                        <button className='btn btn-danger' onClick={() => handleDelete(datas.user_id)}>Delete</button>
                    </td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan="6" className='text-center'>No records found</td>
                </tr>
                )}

            </tbody>
            </table>
            <Link to="/signup">Add employee</Link>
        </div>
        </div>
    );
}



export default Manage;
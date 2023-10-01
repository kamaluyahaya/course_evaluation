import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../component/adminNav';

function EvRecord(){
const [records, setRecords] = useState([]);
const [isLoading, setLoading] = useState(true);

let count =1;
useEffect(() => {
    document.title = 'Admin: Courses';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/admin/evRecord') // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        setRecords(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
        setLoading(false)
      });
  },);

  


  const navigate = useNavigate();
  const viewFeedback = (recordID) =>{
    console.log(recordID)
   
    navigate(`/admin/viewFeedback`, { state: { data: recordID } });
  }


    return(
        <div className=''>          
                <AdminNav subTitle="Manage Course"/> 
            <div className='container mt-5'>
           <div className='card'>
            <div className='text-center card-header'>
            Evaluation Record List
            </div>
            <div className='card-body'>
      
            <table className='table table-striped'>
            <thead>
                <tr>
                <th>S/N</th>
                <th>Course Title</th>
                <th>Student name</th>
                <th>Level</th>
                <th>Reg. number</th>
                <th>Semester</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {isLoading ? (<tr><td colSpan="7"><div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div></td></tr>) : (records.length > 0 ? (
                records.map((datas) => (
                    <tr key={datas.user_id}>
                    <td>{count++}</td>
                    <td>{datas.course_title}</td>
                    <td>{datas.name}</td>
                    <td>{datas.level} Level</td>
                    <td>{datas.regNo}</td>
                    <td>{datas.semester}</td>
                   
                    <td>
                        <button className='btn btn-success' onClick={() => viewFeedback(datas.evaluation_id)}>View Feedback</button>
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
        </div>
        </div>
    );
}



export default EvRecord;
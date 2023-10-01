
import {useEffect,useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../component/adminNav';

function AdminEvaluation(){
    const [records, setRecords] = useState([]);
    const [isLoading, setLoading] = useState(true);

useEffect(() => {
    document.title = 'Admin: Evaluation';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/fetchCourse') // Assumes your React app is hosted on the same server as Express.js
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
  const evaluation = (recordID) =>{
    console.log(recordID)

    navigate(`/admin/AddEvaluation`, { state: { data: recordID } });
  }

  const viewEvaluation = (recordID) =>{
    console.log(recordID)

    navigate(`/admin/ViewEvaluation`, { state: { data: recordID } });
  }
    return (
        <>
        <AdminNav/>
       <div className='container col-lg-10 mt-5'>
        <div className='alert alert-success text-center'>Our Available Course</div>
       <div className="row">
        {isLoading ? (<div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div>) 
        :(records.length >0 ? (records.map(datas =>(
            <div key={datas.course_id} className="col-md-4 mt-2">
                <div className="card border shadow">
                    <div className="card-body">                     
                        <div className="text-start">
                        <b>Course Title:</b> {datas.course_title} <br/>
                        <b>Course code:</b> {datas.course_code} <br/>
                        <b>Semester:</b> {datas.semester} <br/>
                        <b>Level:</b> {datas.level} <br/>
                        <b>Evaluation status:</b> {datas.status ==="" ?<b className='text-danger'>Not Set</b> : <b className='text-success'>Set</b>}
                        </div>
                        <hr/>
                        
                        {datas.status===""?                         <div className='text-center'>
                            <button className='btn btn-success' onClick={() => evaluation(datas.course_id)}>{datas.status ==="" ? "Add Evaluation" : "Update Evalution"}</button>
                        </div> :
                        <div className='row text-center'>
                          
                            <div className='col-md-6'>
                              <button className='btn btn-success' onClick={() => evaluation(datas.course_id)}>{datas.status ==="" ? "Add Evaluation" : "Update Evalution"}</button>
                            </div>
                            <div className='col-md-6'>
                              <button className='btn btn-primary ' onClick={() => viewEvaluation(datas.course_id)}>View Evaluation</button>
                            </div>
                     </div>}
                    </div>
                </div> 
            </div>
        ))) : (<h4 className='text-center text-danger'>No Available courses</h4>))}
            
                
            </div>
        
            </div>
        </>
    )
}

export default AdminEvaluation
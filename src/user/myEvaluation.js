
import {useEffect,useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import StudentNav from '../component/StudentNavs';

function MyEvaluation(){
    const [records, setRecords] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const user_id = useSelector(((state) => state.data));

useEffect(() => {
    document.title = 'Admin: Evaluation';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get(`http://localhost:3000/myEvaluation/${user_id[0].student_id}`) // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        setRecords(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
        setLoading(false)
      });
  },);
//   const navigate = useNavigate();
//   const evaluation = (recordID) =>{
//     console.log(recordID)

//     navigate(`/admin/AddEvaluation`, { state: { data: recordID } });
//   }
    return (
        <>
        <StudentNav/>
       <div className='container col-lg-10 mt-5'>
        <div className='alert alert-success text-center'>My Evaluation Feedback</div>
       <div className="row">
        {isLoading ? (<div className='container text-center'><img src='images/loader.gif' width="200" alt='' /><p>Loading data</p></div>) 
        :(records.length >0 ? (records.map(datas =>(
            
            < div className="col-md-4 mt-2 mb-2">
            <div className="card border shadow">
                <div className="card-body">     
                <div className="text-start">
                    <b>Course:</b> Project management <br/>
                    <b>Level:</b> 100 Level <br/>
                    <b>Semester:</b> 100 Level <br/>
                    </div>
                   
                    <hr/>
                 
                    <p className="bg-light p-2">
                        While the course material was great, I felt that the assignments were a bit overwhelming at times. A more balanced workload would be helpful
                    <div className="text-end">
                         <small className="text-dark text-end"><i>Posted on: 20/09/2023</i></small>
                         </div>
                    </p> 
                    
                    <img src="../images/user.jpg" style={{width: '45px', padding: '4px', height: '45px', border: '2px solid green', borderRadius: '50%'}} className='mr-5' alt=''/>

                    <b>Kamalu yahaya</b>
                </div>
            </div> 
        </div>
        ))) : (<h6 className='text-center text-danger'>You did not make any evaluation yet</h6>))}
            
                
            </div>
        
            </div>
        </>
    )
}

export default MyEvaluation

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../component/adminNav';

function ViewEvaluation(){
    const [record, setRecord] = useState(null); // Initialize state with null
    const location = useLocation();
    const dataFromURL = location.state?.data;

    const navigate = useNavigate();

   


useEffect(() => {
    document.title = 'Admin: Add evaluation Page';
  }, []);

  
  const evaluation = (recordID) =>{
    console.log(recordID)

    navigate(`/admin/AddEvaluation`, { state: { data: recordID } });
  }


    useEffect(() => {
      // Use an empty array as the second argument to run this effect only once
    
      axios.get(`http://localhost:3000/Evaluation/${dataFromURL}`)
        .then(response => {
          // Update the state with the response data
          setRecord(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, );
   
    return (
        <>
        <AdminNav/>
       <div className='container col-lg-7 mt-5'>
        <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                {record ? (
                  <div>
                <div className='card-header alert-success text-center'> Evaluation Question</div>
                <div className='card-body'>
                <table className='table table-bordered p-5 table-striped'>
                  <thead>
                    <tr>
                      <th>Course Title</th>
                      <td>{record[0].course_title}</td>
                    </tr>
                    <tr>
                      <th>Course Code</th>
                      <td>{record[0].course_code}</td>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <td>{record[0].semester}</td>
                    </tr>
                    <tr>
                      <th>Level</th>
                      <td>{record[0].level}</td>
                    </tr>
                    <tr>
                    <th>Question 1</th>
                      <td>{record[0].c_comment_a}</td>
                    </tr>
                    <tr>
                    <th>Question 2</th>
                      <td>{record[0].c_comment_b}</td>
                    </tr>
                    <tr>
                    <th>Question 3</th>
                      <td>{record[0].c_comment_c}</td>
                    </tr>
                    <tr>
                    <th>Question 4</th>
                      <td>{record[0].c_comment_d}</td>
                    </tr>
                    </thead>
                </table>


                    <div className='d-grid mt-3 text-center'>
                        <center>
                            <button type='submit' className='btn btn-primary col-lg-6' onClick={() => evaluation(2)}>Update Evaluation</button>
                        </center>
                    </div>
                    
             
              </div>
              </div>
                   ) : (<div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div>)}
                </div>
                
              </div>
            </div>
        </div>
        </>
    )
}

export default ViewEvaluation

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../component/adminNav';

function ViewFeedback(){
    const [record, setRecord] = useState(null); // Initialize state with null
    const location = useLocation();
    const dataFromUrl = location.state?.data;


useEffect(() => {
    document.title = 'Admin: Feedback Page';
  }, []);

  


    useEffect(() => {
      // Use an empty array as the second argument to run this effect only once
    
      axios.get(`http://localhost:3000/admin/viewFeedback/${dataFromUrl}`)
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
                    <th>{record[0].c_comment_a}</th>
                      <td>{record[0].comment_a}</td>
                    </tr>
                    <tr>
                    <th>{record[0].c_comment_b}</th>
                      <td>{record[0].comment_b}</td>
                    </tr>
                    <tr>
                        <th>{record[0].c_comment_c}</th>
                        <td>{record[0].comment_c}</td>
                        </tr>
                    <tr>
                    <th>{record[0].c_comment_d}</th>
                      <td>{record[0].comment_d}</td>
                    </tr>
                    <tr>
                      <th colSpan="2" className='text-center'>Student rating course from 1 - 10</th>
                    </tr>
                    <tr>
                    <th>Course Content.</th>
                      <td>{record[0].c_content}</td>
                    </tr>
                    <tr>
                    <th>Instructor's Knowledge</th>
                      <td>{record[0].knowledge}</td>
                    </tr>
                    <tr>
                    <th>Usefulness of Material</th>
                      <td>{record[0].material}</td>
                    </tr>
                    <tr>
                    <th>Course Interaction</th>
                      <td>{record[0].c_interaction}</td>
                    </tr>
                    
                    
                    
                    </thead>
                </table>
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

export default ViewFeedback

import React, { useEffect,useState } from 'react';
import AdminNav from '../component/adminNav';
import axios from 'axios';

function AdminDashboard(){
    // Use the useLocation hook to access props passed from the login component
    const [student, setStudent] = useState(null);
    const [course, setCourse] = useState(null);
    const [evaluation, setEvaluation] = useState(null);

    useEffect(() => {
      axios.get('http://localhost:3000/admin/Dashboard/student') // Replace with your API endpoint URL
        .then(response => {
          setStudent(response.data.count);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    useEffect(() => {
      axios.get('http://localhost:3000/admin/Dashboard/evaluation') // Replace with your API endpoint URL
        .then(response => {
          setEvaluation(response.data.count);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);

    useEffect(() => {
      axios.get('http://localhost:3000/admin/Dashboard/course') // Replace with your API endpoint URL
        .then(response => {
          setCourse(response.data.count);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    useEffect(() => {
        document.title = 'Admin: dashboard';
      }, []);

    return (
        <>
        <AdminNav/>
       
       <div className='container mt-5'>
       <div className='alert alert-success mt'>
        <h6 className='text-center '>Administrator Dashboard</h6>
        </div>
        <p className='bg-light p-3'>Welcome, Administrator! You've entered the control center of your digital domain. Here, you have the power to oversee, manage, and optimize every facet of your system. Let's navigate the digital realm together and make informed decisions to drive success</p>
        <div className='row'>
            <div className='col-md-6 text-center'>
              <div className='card'>
                <div className='card-header bg-success text-light'>Total student</div>
                <div className='card-body'>{student}
                </div>
              </div>
            </div>
            <div className='col-md-6 text-center'>
              <div className='card'>
                <div className='card-header bg-dark text-light'>Evaluation</div>
                <div className='card-body'>{evaluation}
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-4 text-center'>
              <div className='card'>
                <div className='card-header bg-dark text-light'>Our courses</div>
                <div className='card-body'>{course}
                </div>
              </div>
            </div>
            <div className='col-md-6 mt-4 text-center'>
              <div className='card'>
                <div className='card-header bg-success text-light'>Complain messages</div>
                <div className='card-body'>{course}
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default AdminDashboard
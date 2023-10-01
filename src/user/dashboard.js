
import React, { useEffect } from 'react';
import StudentNavs from '../component/StudentNavs';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Dashboard(){
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  const data = useSelector((state) => state.data);
    // Use the useLocation hook to access props passed from the login component
  const location = useLocation();
  const userData = location.state?.userData || {}; // Access user data from props
  console.log('userData:', userData);

    return (
        <>
        <StudentNavs/>
        
       <div className='container'>
       <h5 className='text-center mt-5 alert alert-success'>Welcome to Back, {data[0].name.toUpperCase()}</h5>
        <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-header alert-success'>Welcome to black</div>
                <div className='card-body'>
                  Welcome back, {data[0].name}! We're thrilled to have you here. Your journey to knowledge and success continues. Explore your courses, connect with peers, and let's make this learning experience extraordinary together!
                <br/>
                <Link to="" className='btn btn-success mt-3'>View Evaluations</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Dashboard
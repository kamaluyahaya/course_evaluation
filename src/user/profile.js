
import React, { useEffect } from 'react';
import StudentNavs from '../component/StudentNavs';
import { useSelector } from 'react-redux';

function Profile(){
  useEffect(() => {
    document.title = 'Profile';
  }, []);
  const data = useSelector((state) => state.data);
    // Use the useLocation hook to access props passed from the login component

    return (
        <>
        <StudentNavs/>
        <div className='container col-lg-8 mt-5'>
        <div className='card'>
          <div className='card-header text-center'><b>My Profile Account</b></div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-3'>
              <img src='images/kasulogo.png' alt=''/>
               </div>
               <div className='col-lg-9'>
            <table className='table table-bordered p-5 table-striped'>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <td>{data[0].name}</td>
                </tr>
                <tr>
                  <th>Matric Number</th>
                  <td>{data[0].regNo}</td>
                </tr>
                <tr>
                  <th>Phone number</th>
                  <td>{data[0].phone}</td>
                </tr>
                <tr>
                  <th>Email address</th>
                  <td>{data[0].email}</td>
                </tr>
                <tr>
                  <th>Registered Date</th>
                  <td>{data[0].date}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Profile
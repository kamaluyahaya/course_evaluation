import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessAlert from '../component/successAlert';

function AdminLogin(){
    useEffect(() => {
        document.title = 'Admin: Login';
      }, []);
  
    const navigate = useNavigate();
    

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        });
// Initialize user data as null

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
   const handleLogin = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/admin/login', formData);

    if (response.data.message === "invalid login") {
        // setFormData({password:''})
        SuccessAlert("Incorrect login details", 'warning')
      toast.warning("Invalid login details")
      
    } else if (response.data.message === "error") {
      return;
    } else if (response.data.message === "success") {

      toast.success("Login successfully!")
      setTimeout(() => {
        navigate('/admin/dashboard');

      }, 3000);
      return;
    } else {
    }
  } catch (error) {
  }
};
   
    return(
        <div className=''>
                <ToastContainer />
            <div className='40-w p-5 rounded container col-lg-5 mt-5'>
           
                <form onSubmit={handleLogin}>
                <div className='card shadow'>
                    <div className='card-header bg-success text-light text-center'>
                        <h3>Admin Login page</h3>
                    </div>
                    <div className='card-body'>
                        
                        <div className='mb-2'>
                            <label htmlFor='email'>Username.</label>
                            <input type='text' className='form-control' name='username' onChange={handleChange} required/>
                        </div>
                       <div className='mb-2'>
                            <label htmlFor='email'>Password</label>
                            <input type='password' className='form-control' name='password'  onChange={handleChange} required/>
                        </div>
                        <div className='d-grid mt-3 text-center'>
                            <center>
                                <button type='submit' className='btn btn-primary col-lg-6'>Login to portal</button>
                            </center>
                        </div>
                        
                    </div>
                </div>
                </form>
            </div>
            <div className='text-center mt-5 mb-5'>
              <Link to="../" className='btn btn-warning'>Back to home</Link>
            </div>
        </div>
    );
}

export default AdminLogin;
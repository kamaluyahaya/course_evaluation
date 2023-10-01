import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setData } from './redux/actions';
import ShowAlert from './component/successAlert'


function Login(){
  const dispatch = useDispatch();
  
    const [userData, setUserDatas] = useState(0); 
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
  toast.info("Please wait")

  try {
    const response = await axios.post('http://localhost:3000/Login', formData);
    const userData = response.data.result;

    if (response.data.message === "invalid login") {
        ShowAlert("Incorrect Login", "warning");
     
      return;
    } else if (response.data.message === "error") {

        ShowAlert("Something went wrong!", "error");
      return;
    } else if (response.data.message === "success") {
      dispatch(setData(userData));
      setUserDatas(response.data.result)
      toast.success("Login successfully!")
      setTimeout(() => {
        navigate('/dashboard', { state: { userData } });

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

            <section className="jumbotron jumbotron-fluid" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(images/h1_hero.png)', height:'60vh', backgroundSize: 'cover'}}>
                <div className="container  d-flex align-items-center flex-column">
                    <div className="overflow-hidden mb-0 mx-auto  text-center">
                    <img
                        src="images/kasulogo.png"
                        alt="Kaduna State University Logo"
                        width={200}
                        height={200}
                    />
                </div>
          
            <div className='40-w p-5 rounded container col-lg-6'>
           
                <form onSubmit={handleLogin}>
                <div className='card shadow'>
                    <div className='card-header bg-success text-light text-center'>
                        <h3>Login page</h3>
                    </div>
                    <div className='card-body'>
                        
                        <div className='mb-2'>
                            <label htmlFor='email'>Matric No.</label>
                            <input type='text' className='form-control' name='email' onChange={handleChange} required/>
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
                        <div className='text-end mt2'>
                            Don't have an account ? <Link to="/signup" className='ms-2'> Register</Link>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            {Object.keys(userData).length > 0 && (
                <div>
                    <h6>Welcome back Name: {userData[0].name}</h6>
                    {/* Include other user data fields as needed */}
                </div>
                )}
        </div>
        </section>
        </div>
    );
}

export default Login;
import React, {useEffect,  useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowAlert from './component/successAlert'
import { ToastContainer,toast } from 'react-toastify';

function Signup(){
  const [values, setValues] = useState(0)
const navigate = useNavigate();


useEffect(() => {
    document.title = 'Student: Registration Page';
  }, []);

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

};
const handleSubmit = (event) => {
  toast.info("Please wait!");
  event.preventDefault();

  axios.post('http://localhost:3000/signup', values)
    .then(res => {
      const response = res.data.message;
      console.log(response)
      if (response === 'success') {
        ShowAlert("Registration successful", "success", 'You would be redirected to login page.');
        setTimeout(() => {
          // Redirect to the desired page
          navigate('/Login'); // Replace '/target-page' with the actual URL you want to redirect to
        },3000);
        setValues({
          name: '',
          email: '',
          regNo: '',
          level: '',
          phone: '',
          password: ''
        });
      } else {
        ShowAlert("Error occurred, please try again", "error");
      }
    })
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        ShowAlert("Opps! Record is aready exist", "error");
      } else {
        console.error(err);
        ShowAlert("Something went wrong, please try again", "error");
      }
    });
};



  
    return(
        <div className=''>
           <ToastContainer />
            <section className="jumbotron jumbotron-fluid " style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(images/h1_hero.png)', height:'60vh', backgroundSize: 'cover'}}>
      <div className="container  d-flex align-items-center flex-column">
        <div className="overflow-hidden mb-0 mx-auto  text-center">
          <img
            src="images/kasulogo.png"
            alt="Kaduna State University Logo"
            width={200}
            height={200}
          />
        </div>
            <div className='40-w p-2 rounded container col-lg-6'>
            
                   
            <form onSubmit={handleSubmit}> 
                <div className='card shadow'>
                    <div className='card-header bg-success text-light text-center'>
                        <h5>Student Registration form</h5>
                    </div>
                    <div className='card-body'>
                        <div className='mb-2'>
                            <label htmlFor='email'>Name</label>
                            <input type='text' className='form-control' name='name' value={values.name} required onChange={handleChange}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' className='form-control' name='email' value={values.email} required onChange={handleChange}/>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='regno'>Matric No.</label>
                                <input type='text' className='form-control' name='regNo' value={values.regNo} required onChange={handleChange}/>
                              </div>
                          </div>
                          <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='number'>Level</label>
                                <select className='form-control' name='level' value={values.level} required onChange={handleChange}>
                                  <option value=""></option>
                                  <option>100 Level</option>
                                  <option>200 Level</option>
                                  <option>300 Level</option>
                                  <option>400 Level</option>
                                </select>
                              </div>
                          </div>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='number'>Phone</label>
                            <input type='number' className='form-control' name='phone' value={values.phone} required onChange={handleChange}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'>Password</label>
                            <input type='password' className='form-control' name='password' value={values.password}  required onChange={handleChange}/>
                        </div>
                        <div className='d-grid mt-3 text-center'>
                            <center>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <button type='submit' className='btn btn-primary col-lg-12'>Register</button>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link to='/' className='btn btn-danger col-lg-12'>Home page</Link>
                                    </div>
                                </div>
                                
                                </center>
                        </div>
                        <div className='text-center mt-4'>
                            Have an account ? <Link to="/Login" className='ms-2'> Log in</Link>
                        </div>
                    </div>
                </div>
            </form>
            
            </div>
            
       
        
    {/* Login Form */}
    
        
      </div>
      <p className=" text-center">
          Welcome to the Course Evaluation System at Kaduna State University, your gateway to meaningful educational improvement.
        </p>
      
    </section>
        
        </div>
    );
}



export default Signup;
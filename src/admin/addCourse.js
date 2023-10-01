import React, {useEffect,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../component/adminNav';
import ShowAlert from '../component/successAlert'
import { ToastContainer,toast } from 'react-toastify';

function AddCourse(){
  const [values, setValues] = useState(0)
const navigate = useNavigate();


useEffect(() => {
    document.title = 'Add course Page';
  }, []);

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

};
const handleSubmit = (event) => {
  toast.info("Please wait!");
  event.preventDefault();

  axios.post('http://localhost:3000/admin/addCourse', values)
    .then(res => {
      const response = res.data.message;
      console.log(response)
      if (response === 'success') {
        ShowAlert("Course added successful", "success", 'You would be redirected to dashboard page.');
        setTimeout(() => {
          // Redirect to the desired page
          navigate('/admin/Dashboard'); // Replace '/target-page' with the actual URL you want to redirect to
        }, 3000);
        setValues({
          course_title: '',
          course_code: '',
          level: '',
          semester: '',
        });
      } else if(response==="Failed") {
        ShowAlert("Error occurred, please try again", "error");
      }else{
        ShowAlert("Re please try again", "error");
      }
    })
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        ShowAlert("Opps! Record is aready exist", "error");
      } else {
        console.error(err);
        ShowAlert("Opps!", "error","Something went wrong, please try again");
      }
    });
};

    return(
        <div className=''>
          <ToastContainer/>
            <AdminNav/>
            <div className='alert alert-success p-1'>
        <h6 className='text-center '>Add new Course </h6>
        </div>
      <div className="container ">
      
            <div className='40-w p-2 rounded container col-lg-6'>
           
                   
            <form onSubmit={handleSubmit}> 
                <div className='card shadow mt-3'>
                    <div className='card-header text-center'>
                        <h6>Course Information</h6>
                    </div>
                    <div className='card-body'>
                        <div className='mb-2'>
                            <label htmlFor='email'>Course Title</label>
                            <input type='text' className='form-control' name='course_title' value={values.course_title} required onChange={handleChange}/>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'>Course code</label>
                            <input type='text' className='form-control' name='course_code' value={values.course_code} required onChange={handleChange}/>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='level'>Level</label>
                                <select className='form-control' name='level' value={values.level} required onChange={handleChange}>
                                  <option value="">Select</option>
                                  <option>100 Level</option>
                                  <option>200 Level</option>
                                  <option>300 Level</option>
                                  <option>400 Level</option>
                                </select>
                              </div>
                          </div>
                          <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='semester'>Semester</label>
                                <select className='form-control' name='semester' value={values.semester} required onChange={handleChange}>
                                  <option value="">Select</option>
                                  <option>First Semester</option>
                                  <option>Second Semester</option>
                                </select>
                              </div>
                          </div>
                        </div>
                       
                        <div className='d-grid mt-3 text-center'>
                            <center>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <button type='submit' className='btn btn-primary col-lg-12'>Add course</button>
                                    </div>
                                    
                                </div>
                                
                                </center>
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
      
        
        </div>
    );
}



export default AddCourse;
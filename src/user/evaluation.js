
import { useEffect, useState } from 'react';
import StudentNavs from '../component/StudentNavs';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowAlert from '../component/successAlert'
import { ToastContainer,toast } from 'react-toastify';
import { useSelector } from 'react-redux';

function Evaluation(){
    // Use the useLocation hook to access props passed from the login component
    const [record, setRecord] = useState(null); // Initialize state with null
    const location = useLocation();
  const dataFromURL = location.state?.data;
  const data = useSelector((state) => state.data);

  const [values, setValues] = useState(0)
const navigate = useNavigate();


useEffect(() => {
    document.title = 'Student: Evaluation Page';
  }, []);

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });

};
const handleSubmit = (event) => {
  toast.info("Please wait!");
  event.preventDefault();

  const updatedValues = {
    ...values,
    course_id: dataFromURL,
    user_id: data[0].student_id

  }

  axios.post('http://localhost:3000/evaluation', updatedValues)
    .then(res => {
      const response = res.data.message;
      console.log(response)
      if (response === 'success') {
        ShowAlert("Success", "success", 'Evaluation sent successfully.');
        setTimeout(() => {
          // Redirect to the desired page
          navigate('/Dashboard'); // Replace '/target-page' with the actual URL you want to redirect to
        }, 3000);
        setValues({
          c_content: '',
          knowledge: '',
          material: '',
          c_interaction: '',
          comment_a: '',
          comment_b: '',
          comment_c: '',
          comment_d: '',
        });
      } else {
        ShowAlert("Opps!", "error","Error occurred, please try again");
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



  
    useEffect(() => {
      // Use an empty array as the second argument to run this effect only once
    
      axios.get(`http://localhost:3000/Evaluation/${dataFromURL}`)
        .then(response => {
          // Update the state with the response data
          setRecord(response.data);
          console.log(record[0].course_title)
        })
        .catch(err => {
          console.log(err);
        });
    }, );
   
  

    return (
        <>
        <ToastContainer/>
        <StudentNavs/>
       <div className='container col-lg-7 mt-5'>
        <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                {record ? (
                  <div>
                <div className='card-header alert-success text-center'>Course Evaluation Form</div>
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
                    </thead>
                </table>

                      <form onSubmit={handleSubmit}>
                <div className='card'>
                    <div className='card-header text-center'>
                        Open-Ended Questions
                    </div>
                    <div className='card-body'>
                      <small className='text-danger'>Please rate the following aspects of the course on a scale of 1 to 5, where 1 is Poor and 5 is Excellent</small>
                        <hr/>
                        <div className='row'>
                           <div className='col-md-3'>
                              <div className='mb-2'>
                                <label htmlFor='email'>Course Content.</label>
                                <input type='text' className='form-control' maxLength="1" name='c_content'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <div className='mb-2'>
                                <label htmlFor='email'>Instructor's Knowledge</label>
                                <input type='text' className='form-control' maxLength="1" name='knowledge'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <div className='mb-2'>
                                <label htmlFor='email'>Usefulness of Material</label>
                                <input type='text' className='form-control' maxLength="1" name='material'  onChange={handleChange} required/>
                                <small> (e.g., textbooks, online resources)</small>.
                              </div>
                            </div>
                            <div className='col-md-3'>
                              <div className='mb-2'>
                                <label htmlFor='email'>Course Interaction</label>
                                <input type='text' className='form-control' maxLength="1" name='c_interaction'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>{record[0].c_comment_a}.</label>
                                <textarea className='form-control' name='comment_a'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>{record[0].c_comment_b}.</label>
                                <textarea className='form-control' name='comment_b'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>{record[0].c_comment_c}</label>
                                <textarea className='form-control' name='comment_c'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>{record[0].c_comment_d}.</label>
                                <textarea className='form-control' name='comment_d'  onChange={handleChange} required/>
                              </div>
                            </div>
                          <div className='d-grid mt-3 text-center'>
                              <center>
                                  <button type='submit' className='btn btn-primary col-lg-6'>Send Evaluation</button>
                              </center>
                          </div>
                          <div className='text-end mt2'>
                              {/* Don't have an account ? <Link to="/signup" className='ms-2'> Register</Link> */}
                          </div>
                      </div>
                  </div>
                </div>
                </form>
             
              </div>
              </div>
                   ) : (<div className='container text-center'><img src='images/loader.gif' width="200" alt='' /><p>Loading data</p></div>)}
                </div>
                
              </div>
            </div>
        </div>
        </>
    )
}

export default Evaluation

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowAlert from '../component/successAlert'
import { ToastContainer,toast } from 'react-toastify';
import AdminNav from '../component/adminNav';

function AddEvaluation(){
    const [record, setRecord] = useState(null); // Initialize state with null
    const location = useLocation();
    const dataFromURL = location.state?.data;

    const [values, setValues] = useState(0)
    const navigate = useNavigate();

   


useEffect(() => {
    document.title = 'Admin: Add evaluation Page';
  }, []);


  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get(`http://localhost:3000/admin/fetchEvaluation${dataFromURL}`) // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        console.log(`Hello respondant ${response.data[0].comment_b}`)
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
      });
  },);
  

const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
   

};
const handleSubmit = async (event) => {
  const updatedValues = {
    ...values,
    course_id: dataFromURL,
  }
  try {
    event.preventDefault();
    toast.info("Please wait!");

    const response = await axios.post('http://localhost:3000/admin/AddEvaluation', updatedValues);

    if (response.data.message === 'success') {
      ShowAlert("Success", "success", 'Evaluation sent successfully.');

      setTimeout(() => {
        // Redirect to the desired page
        navigate('/admin/Dashboard'); // Replace '/target-page' with the actual URL you want to redirect to
      }, 3000);

      // Clear form values
      setValues({
        course_id: dataFromURL,
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
      ShowAlert("Oops!", "error", "Error occurred, please try again");
    }
  } catch (err) {
    if (err.response && err.response.status === 409) {
      ShowAlert("Oops! Record already exists", "error");
    } else {
      console.error(err);
      ShowAlert("Something went wrong, please try again", "error");
    }
  }
};

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
        <ToastContainer/>
        <AdminNav/>
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
                        <div className='row'>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>1. Evaluation.</label>
                                <textarea className='form-control' name='comment_a'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>2. Evaluation</label>
                                <textarea className='form-control' name='comment_b'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>3. Evaluation</label>
                                <textarea className='form-control' name='comment_c'  onChange={handleChange} required/>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <div className='mb-2'>
                                <label htmlFor='email'>4. Evaluation</label>
                                <textarea className='form-control' name='comment_d'  onChange={handleChange} required/>
                              </div>
                            </div>
                          <div className='d-grid mt-3 text-center'>
                              <center>
                                  <button type='submit' className='btn btn-primary col-lg-6'>Add Evaluation</button>
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
                   ) : (<div className='container text-center'><img src='../images/loader.gif' width="200" alt='' /><p>Loading data</p></div>)}
                </div>
                
              </div>
            </div>
        </div>
        </>
    )
}

export default AddEvaluation
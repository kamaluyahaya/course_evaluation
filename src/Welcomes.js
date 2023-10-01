import Head from './component/index_nav';
import Feedback from './component/feedback';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function Welcome(){

    const [records, setRecords] = useState([]);
    const [isLoading, setLoading] = useState(true);

useEffect(() => {
    document.title = 'Admin: Courses';
  }, []);

  useEffect(() => {
    // Make an HTTP GET request to fetch records from the server
    axios.get('http://localhost:3000/fetchCourse') // Assumes your React app is hosted on the same server as Express.js
      .then((response) => {
        setRecords(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching records:', error);
        setLoading(false)
      });
  },);
   
    return(

        <div className=''>
            <Head/>
           
    <div className='container col-lg-10 mt-5'>
    <h1 className='text-center bg-light'>Our Courses</h1>
       <div className="row">
        {isLoading ? (<div className='container text-center'><img src='images/loader.gif' width="200" alt='' /><p>Loading data</p></div>) 
        :(records.length >0 ? (records.map(datas =>(
            <div key={datas.course_id} className="col-md-4 mt-2 mb-2">
                <div className="card border shadow">
                    <div className="card-body">                     
                        
                        <div className="text-start">
                        <b>Course Title:</b> {datas.course_title} <br/>
                        <b>Course code:</b> {datas.course_code} <br/>
                        <b>Semester:</b> {datas.semester} <br/>
                        <b>Level:</b> {datas.level} <br/>
                        </div>
                       
                        <hr/>
   
                        <div className='text-center'>
                            <Link to="/Login" className='btn btn-success'>Take a Evalution</Link>
                        </div>
                    </div>
                </div> 
            </div>
        ))) : (<h4 className='text-center text-danger'>No Available courses</h4>))}
            
                
            </div>
        
            </div>
            <Feedback/>
            {/* <img src="images/section_bg02.png" alt=''/> */}
            <div className='text-center mt-5 mb-5'>
              <Link to="./admin/login" className='btn btn-warning'>Admin Login</Link>
            </div>
        </div>
    );
}

export default Welcome;
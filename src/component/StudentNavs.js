import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function StudentNav(){
  const navigate = useNavigate(); 
  const handleLogout = () => {
    // Display a confirmation dialog when the user clicks the logout button
    const confirmLogout = window.confirm('Are you sure you want to log out?');

    // If the user confirms the logout, perform the logout action
    if (confirmLogout) {
      navigate('/'); 
      // Perform your logout action here (e.g., clear user data, redirect to login page, etc.)
      // For example, you can clear user data from state or localStorage
      // Redirect the user to the login page or perform any necessary actions
    }
  };
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="page">
        <img
          src="images/kasulogo.png"
          alt=""
          width={30}
          className="mx-1 border border-dark border-1 rounded"
        />
          CourseEval
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Dashboard" className="nav-link active text-white" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Course">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              {/* Link to "My Evaluations" page */}
              <Link className="nav-link text-white" to="/myEvalution">
               My Evaluations
              </Link>
            </li>
            <li className="nav-item">
              {/* Link to "My Evaluations" page */}
              <Link className="nav-link text-white" to="/Profile">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              {/* Logout functionality */}
              <button className="nav-link text-white" onClick={handleLogout} >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  

</>
    )
}
export default StudentNav
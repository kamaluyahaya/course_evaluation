import React from 'react';
import { Link } from 'react-router-dom';
import kasuLogo from '../images/kasulogo.png';

const Head = () => (
    <section className="jumbotron jumbotron-fluid text-white" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(images/h1_hero.png)', height:'60vh', backgroundSize: 'cover'}}>
      <div className="container text-center  d-flex align-items-center flex-column">
        <div className="overflow-hidden mb-0 mx-auto">
          <img
            src={kasuLogo}
            alt="Kaduna State University Logo"
            width={200}
            height={200}
          />
        </div>
        <h1 className="display-4 font-weight-bold">
          Empowering Education Through <mark>Feedback</mark>
        </h1>
        <p className="lead">
          Welcome to the Course Evaluation System at Kaduna State University, your gateway to meaningful educational improvement.
        </p>
        
    {/* Login Form */}
    
        <p className="mt-3">
          <Link to="/SignUp"> 
          <button type="submit" className="btn btn-dark btn-lg btn-block" style={{fontsize: '1rem'}}>
            Get started</button>
          </Link>
        </p>
      </div>
      
    </section>
  );

  export default Head
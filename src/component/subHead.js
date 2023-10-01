import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer, } from 'react-bootstrap';



function ToastMessage({ show, onClose, message }) {
    return (
      <Toast show={show} onClose={onClose}>
        <Toast.Header>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    );
  }

  
  function ToastMsg({message}) {
    const [showToast, setShowToast] = useState(false);
  
    const handleCloseToast = () => {
      setShowToast(false);
    };
  
    const showToastMessage = (message) => {
      setShowToast(true);
  
      // Automatically hide the toast after a specified duration (e.g., 3000 milliseconds or 3 seconds)
      const duration = 3000; // Adjust the duration as needed
      setTimeout(() => {
        handleCloseToast();
      }, duration);
    };
  
    // Use useEffect to automatically display the toast when the component renders
    useEffect(() => {
      // Your condition for displaying the toast goes here
      const conditionToDisplayToast = true; // Change this condition as needed
  
      if (conditionToDisplayToast) {
        showToastMessage('Login Successfully');
      }
    }, ); // The empty dependency array ensures this effect runs once when the component mounts
  
    return (
      <div>
        {/* Other content of your app */}
        {/* The button is not needed in this case */}
        
        <ToastContainer position="top-end">
          <ToastMessage show={showToast} onClose={handleCloseToast} message={message} />
        </ToastContainer>
      </div>
    );
  }
  
  export default ToastMsg;
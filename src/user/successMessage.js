import React, { useState } from 'react';

function SuccessMessage({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the message after a few seconds
  setTimeout(() => {
    setIsVisible(false);
  }, 5000); // Hide after 3 seconds (adjust the duration as needed)

  return (
    isVisible && (
      <div className="alert alert-success text-center">
        {message}
      </div>
    )
  );
}
export default SuccessMessage
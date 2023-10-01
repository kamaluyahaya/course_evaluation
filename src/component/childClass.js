// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  // Access the data passed from the parent component via props
  const receivedData = props.propValue;

  return (
    <div>
      <p>Data received from parent: {receivedData}</p>
    </div>
  );
}

export default ChildComponent;

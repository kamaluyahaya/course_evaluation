// ParentComponent.js
import React from 'react';
import ChildComponent from './childClass';

function ParentComponent() {
  const dataToPass = "Hello from Parent";

  return (
    <div>
      <ChildComponent propValue={dataToPass} />
    </div>
  );
}

export default ParentComponent;

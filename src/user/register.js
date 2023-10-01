import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // Scenario 1: Component Did Mount (no dependencies)
  useEffect(() => {
    console.log('Component Did Mount');
    return () => {
      console.log('Component Will Unmount');
    };
  },);

  // Scenario 2: Component Did Update (with a dependency)
  useEffect(() => {
    console.log('Component Did Update');
  }, [count]);

  // Scenario 3: Component Will Unmount (cleanup)
  useEffect(() => {
    return () => {
      console.log('Cleanup Function (Component Will Unmount)');
    };
  }, []);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useEffect Example</h1>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default ExampleComponent;

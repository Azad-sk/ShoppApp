import React, { useState, useEffect } from 'react';

export default function Practice() {
    const [count, setCount] = useState(0);

    
    useEffect(() => {
     
      document.title = `You clicked ${count} times`;
      
    });
    
    const handleChange = () => {setCount(count + 1)}
    
    return (
        <div>
      <p>You clicked {count} times</p>
      <button onClick={handleChange}>
        Click me
      </button>  
            
        </div>
    );
}

import React, { useState } from 'react';
import './screens.css'

function Counter(props) {
    const [count, setCount] = useState(0);
    
    return (
        <div className = "makethedisplayflexandtextaligncenter"  >
            
            <button
                onClick={() => setCount(count - 1)}
                style={{
                    fontSize: '1.0rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    backgroundColor: '#61dafb',
                    color: 'white',
                    cursor: 'pointer',
                    margin: '0 0.5rem'
                }}
            >
                -
      </button>

            <p style={{ fontSize: '1rem' }}>{count}</p>

            <button
                onClick={() => setCount(count + 1)}
                style={{
                    fontSize: '1.0rem',
                    padding: '0.5rem 0.5rem',
                    borderRadius: '0.25rem',
                    border: 'none',
                    backgroundColor: '#61dafb',
                    color: 'white',
                    cursor: 'pointer',
                    margin: '0 0.5rem'
                }}
            >
                +
      </button>
            <p> ₹ {count * props.price}</p>
        </div>
    );
}

  


export default Counter;
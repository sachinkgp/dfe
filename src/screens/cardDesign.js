import './carddesign.css'
// import Counter from './counter';
import { useState } from 'react';
// variables
// 1. image
// 2. name of liquor
// 3. price

function Card(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <img src={props.image} alt="" className="daruimage" />
            <h5 className="card-title">{props.name}</h5>
            <div className="card-body">
                <div className="cardbody-left">     
                    <div className = 
                    "makethedisplayflexandtextaligncenter"  >
            
                        <button
                                onClick={() => setCount(count - 1)}
                                style={{ fontSize: '1.0rem', padding: '0.5rem 0.5rem', borderRadius: '0.25rem', border: 'none', backgroundColor: '#61dafb', color: 'white', cursor: 'pointer', margin: '0 0.5rem'
                                }}
                        >-
                        </button>

                        <p style={{ fontSize: '1rem' }}>{count}</p>

                        <button
                            onClick={() => setCount(count + 1)}
                            style={{fontSize: '1.0rem',padding: '0.5rem 0.5rem',borderRadius: '0.25rem',border: 'none',backgroundColor: '#61dafb',color: 'white',cursor: 'pointer',margin: '0 0.5rem'
                            }}
                        >+
                        </button>

                        <p> ₹ {count * props.price}</p>
        
                    </div>
                </div>
                    <button className='btn' onClick={props.sendtocart(props.name,count)}
                    > Order </button>
            </div>
        </div>
        )
}

export default Card;

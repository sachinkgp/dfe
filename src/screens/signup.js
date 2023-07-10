// LoginPage.js
import React, { useState } from 'react';
import './Login.css';
import './carddesign.css'
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [name,setName] = useState("");
  const [mobile_number,setMobile_number] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function gotosignin(){
    navigate('/login')
  }
  function Postdata(){
    // fetch("/signup",{
      fetch("https://dbekgp.onrender.com/signup",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email,
            password,
            name,
            mobile_number
        })

    })
    M.toast({html: "User Signed Up successfully",classes:"#c62828 red darken-3"})
    // alert(`${name} ${email} ${password} ${mobile_number}`)
    navigate('/login')
  }

  return (
    <div className="login-container">
        <h2>Signup</h2>

        <div className="input-container">
          <label>
            {/* Name: */}
            <input type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>

        <div className="input-container">
          <label>
            {/* Mo Number: */}
            <input type="text" placeholder='Mobile Number' value={mobile_number} onChange={e => setMobile_number(e.target.value)} />
          </label>
        </div>

        <div className="input-container">
          <label>
            {/* Email ID: */}
            <input type="text" value={email} placeholder="Email ID" onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        
        <div className="input-container">
          <label>
            {/* Password: */}
            <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </label>
        </div>

        <button width="50%" onClick={Postdata} className='btn'>
          Submit
        </button>
        <button onClick={gotosignin} className='btn'>
          Already a User? Sign IN
        </button>
    </div>
  );
}

export default Signup;

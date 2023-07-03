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
    M.toast({html: "fetched it bro",classes:"#c62828 red darken-3"})
    // alert(`${name} ${email} ${password} ${mobile_number}`)
    navigate('/login')
  }

  return (
    <div className="login-container">
        <h2>Signup</h2>

        <div className="input-container">
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>

        <div className="input-container">
          <label>
            Mobile Number:
            <input type="text" value={mobile_number} onChange={e => setMobile_number(e.target.value)} />
          </label>
        </div>

        <div className="input-container">
          <label>
            Email ID:
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
        
        <div className="input-container">
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>

        <button width="50%" onClick={Postdata}>
          Submit
        </button>
        <div onClick={gotosignin}>
          Already a User? Sign IN
        </div>
    </div>
  );
}

export default Signup;

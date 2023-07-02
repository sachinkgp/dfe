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
    // console.log("here")
    fetch("/signup",{
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
    alert(`${name} ${email} ${password} ${mobile_number}`)

    // .then(res=>res.json())
    // .then(data=>{
    //   console.log(`reached here`)
        
    // })
  }

  return (
    <div className="card">
        <h2>Login</h2>

        <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />

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

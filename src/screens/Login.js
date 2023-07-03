// LoginPage.js
import React, { useState } from 'react';
import './Login.css';
import M from 'materialize-css'
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function gotosignup(){
    navigate('/signup')
  }
  //toekn : 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
  function Postdata2(){
    fetch("/login",{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email:username,
            password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.savedUser){
          M.toast({html:"user logeed in"})
          localStorage.setItem("id",data.savedUser._id)      
        localStorage.setItem('name',data.savedUser.name)  
        navigate('/homepage')
        }else{
          M.toast({html:data.message,classes:"red"})
        }
    })
    

  } 

  return (
    <div className="login-container">
        <h2>Login</h2>
        {/* <input className="input-container"
            type="text"
            placeholder="email"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
        /> */}

        <div className="input-container">
          <label>
            email:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
        </div>

        <div className="input-container">
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>

        <button onClick={Postdata2}>
        submit
        </button> 
        <div onClick={gotosignup}>
          New User? Sign UP
        </div>
    </div>
  );
}

export default LoginPage;

import React, { useState } from 'react'
import style from '../css/signup.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

const signup = () => {

  
  const[email,setEmail] = useState('')
  const[password, setPassword] = useState('')

    const createUser = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Account created successfully, redirecting to login page') 
          window.location="login"
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Bad Credentials or account already exists')
          setEmail('')
          setPassword('')
        });
    
    }


  return (
    <>
       <div className={style.container}>
            <div className={style.main}>
                <h1>Signup Form</h1>
                <input 
                type="email" 
                placeholder='Enter your email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <input 
                type="password" 
                placeholder='Enter your password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={createUser}>Signup</button>

                <Link to="/login">Already registered? Login</Link>
            </div>
       </div>
    </>
  )
}

export default signup
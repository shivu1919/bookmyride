import React from 'react'
import { Link } from 'react-router-dom'
import style from "../css/login.module.css"
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'


const login = () => {

    const loginUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert('Valid user, redirecting to home page')
          window.location="home"
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Bad credentials or account does not exist')
          setEmail('')
          setPassword('')
        });
    
    }

    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')
  return (
    <>
       <div className={style.container}>
            <div className={style.main}>
                <h1>Login Form</h1>
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
                <button onClick={loginUser}>Signup</button>

                <Link to="/">Not a registered user? Signup</Link>
            </div>
       </div>
    </>
  )
}

export default login
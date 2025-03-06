import React, { useState } from 'react'
import style from '../css/bookticket.module.css'

function BookTicket() {

    const[name, setName] = useState('')
    const[mob, setMob] = useState('')
    const[email, setEmail] = useState('')
    const[age, setAge] = useState('')

  return (
    <>
        <div className={style.main}>

            <div className={style.form}>
                    <h1>Book your ticket</h1>
                    <input 
                    placeholder='Write your full name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <input 
                    placeholder='Write your mobile number'
                    value={mob}
                    onChange={(e)=>setMob(e.target.value)}
                    />

                    <input 
                    placeholder='Write your Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

                    <input 
                    placeholder='Write your Age'
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    />

                    <button className={style.btn}>Book Ticket</button>
            </div>
        </div>
    </>
  )
}

export default BookTicket
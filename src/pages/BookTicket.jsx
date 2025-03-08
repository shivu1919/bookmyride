import React, { useState } from 'react'
import style from '../css/bookticket.module.css'
import axios from "axios"

function BookTicket() {

    const[name, setName] = useState('')
    const[mob, setMob] = useState('')
    const[email, setEmail] = useState('')
    const[age, setAge] = useState('')

    const[object, setObject] = useState({
      "mob":mob,
      "source":"Hyderabad",
      "destination":"",
      "date":"",
      "name":name,
      "email":email,
      "age":age
    })

    const bookTicket = () =>{
      if(object.destination=="Bengluru"){
        axios.post("http://localhost:8080/book_to_blr",object)
        .then((data)=>{
          alert('Ticket booked successfully')
          window.location="/home"
        })
      }

      else if(object.destination=="Vizag"){
        axios.post("http://localhost:8080/book_to_vzg",object)
        .then((data)=>{
          alert('Ticket booked successfully')
          window.location="/home"
        })
      }

      else{
        axios.post("http://localhost:8080/book_to_gtr",object)
        .then((data)=>{
          alert('Ticket booked successfully')
          window.location="/home"
        })
      }
       
    }

  return (
    <>
        <div className={style.main}>

            <div className={style.form}>
                    <h1>Book your ticket</h1>
                    <input 
                    placeholder='Write your full name'
                    value={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                      object.name=e.target.value
                    }}
                    />

                    <input 
                    placeholder='Write your mobile number'
                    value={mob}
                    onChange={(e)=>{
                      setMob(e.target.value)
                      object.mob=e.target.value
                    }}
                    />

                    <input 
                    placeholder='Write your Email'
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                      object.email=e.target.value
                    }}
                    />

                    <input 
                    placeholder='Write your Age'
                    value={age}
                    onChange={(e)=>{
                      setAge(e.target.value)
                      object.age=e.target.value
                    }}
                    />

                    <button className={style.btn} onClick={bookTicket}>Book Ticket</button>
            </div>
        </div>
    </>
  )
}

export default BookTicket
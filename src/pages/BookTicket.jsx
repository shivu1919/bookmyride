import React, { useState } from 'react'
import style from '../css/bookticket.module.css'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import {jsPDF} from "jspdf"
import { useNavigate } from 'react-router-dom'

function BookTicket() {

    const[name, setName] = useState('')
    const[mob, setMob] = useState('')
    const[email, setEmail] = useState('')
    const[age, setAge] = useState('')
    const location = useLocation();
    const{destination,date} = location.state || {}
    const navigate = useNavigate()


    const[object, setObject] = useState({
      mob,
      "source":"Hyderabad",
      destination,
      date,
      name,
      email,
      age
    })

    const downloadTicket = ()=>{
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Venkat tour & travels",20,10)
        doc.text("Bus ticket confirmation",20,20)
        doc.text(`Name: ${object.name}`,20,40)
        doc.text(`Mobile: ${object.mob}`,20,50)
        doc.text(`Email: ${object.email}`,20,60)
        doc.text(`Age: ${object.age}`,20,70)
        doc.text(`Source: Hyderabad`,20,80)
        doc.text(`Destination: ${object.destination}`,20,90)
        doc.text(`Date: ${object.date}`,20,100)
        doc.save("Ticket.pdf")
        navigate("/home")
    }

    const bookTicket = () =>{
      if(object.destination=="Bengluru"){
        axios.post("http://localhost:8080/book_to_blr",object)
        .then((data)=>{
          alert('Ticket booked successfully')
         
        })
      }

      else if(object.destination=="Vizag"){
        axios.post("http://localhost:8080/book_to_vzg",object)
        .then((data)=>{
          alert('Ticket booked successfully')
          
        })
      }

      else{
        axios.post("http://localhost:8080/book_to_gtr",object)
        .then((data)=>{
          alert('Ticket booked successfully')
         
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


            <button onClick={downloadTicket} className={style.btn}>Download Ticket</button>
        </div>
      
    </>
  )
}

export default BookTicket
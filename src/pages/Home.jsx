import React, { useEffect, useState } from 'react'
import style from '../css/home.module.css'
import axios  from 'axios'
import BookTicket from './BookTicket'

function Home() {

    const[fromCity, setFromCity] = useState('')
    const[toCity, setToCity] = useState([])
    const[source, setSource] = useState('Hyderabad')
    const[destination, setDestination] = useState('')
    const[date, setDate] = useState('')

    const[data, setData] = useState({
        "source":'Hyderabad',
        "destination":'',
        "date":''
    })

    const ticket = () =>{
        return data;
    }

    const fetchFromCity = () =>{
        fetch("http://localhost:8080/from-city")
        .then((response)=>response.json())
        .then((data)=>{
            setFromCity(data[0].name)
        })
    }

    const fetchToCity = () =>{
        fetch("http://localhost:8080/to-city")
        .then((response)=>response.json())
        .then((data)=>{
           
            setToCity(data)
            console.log(toCity)
        })
    }

    const searchTicket = () =>{

        if(date==''){
            alert("Please select date")
        }
        else{
            if(destination=="Guntur"){
                axios.post("http://localhost:8080/bookToGtr",data)
                
                .then((data)=>{
                   if(data.data){
                        window.location="/bookTicket"
                   }
                   else{
                    alert('No ticket available on the selected date.')
                   }
                })
    
            }
            else if(destination=="Vizag"){
                axios.post("http://localhost:8080/bookToVzg",data)
                
                .then((data)=>{
                   if(data.data){
                        window.location="/bookTicket"
                   }
                   else{
                    alert('No ticket available on the selected date.')
                   }
                })
    
            }
            else if(destination=="Bengluru"){
                axios.post("http://localhost:8080/bookToBlr",data)
                
                .then((data)=>{
                   if(data.data){
                        window.location="/bookTicket"
                   }
                   else{
                    alert('No ticket available on the selected date.')
                   }
                })
            }
        }

        
    }

    useEffect(fetchFromCity,[])
    useEffect(fetchToCity,[])


  return (
   <>
        <div className={style.container}>
            <h1 className={style.heading}>Book My Ride</h1>

            <div className={style.cities}>
            <div>
                    <label>From</label>
                    <br/>
                    <select>
                        <option>{fromCity}</option>
                    </select>
            </div>
            
        
                <div>
                    <label>To</label>  
                    <br/>  
                    <select onChange={(e)=>{
                        setDestination(e.target.value)
                        data.destination=e.target.value
                        
                    }}>
                        <option value="">Select your destination</option>
                        {toCity.map((city,index)=><option key={index}>{city.name}</option>)}
                    </select>
                </div> 

                <div>
                    <br/>
                    <input type="date" onChange={(e)=>{
                        setDate(e.target.value);
                        data.date=e.target.value;
                    }}></input>
                </div>
            </div>

            <button onClick={searchTicket}>Search</button>
           
        </div>   


    </>
  )
}


export default Home
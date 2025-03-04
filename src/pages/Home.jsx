import React, { useEffect, useState } from 'react'
import style from '../css/home.module.css'

function Home() {

    const[fromCity, setFromCity] = useState('')

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
            console.log(data)
        })
    }

    useEffect(fetchFromCity,[])


  return (
   <>
        <div className={style.container}>
            <h1 className={style.heading}>Book My Ride</h1>
            <div>
                <label>From</label>
                <br/>
                <select>
                    <option>{fromCity}</option>
                </select>
            </div>
            
            <button onClick={fetchToCity}>ToCity</button>
        </div>   


    </>
  )
}

export default Home
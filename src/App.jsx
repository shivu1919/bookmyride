import React from 'react'
import Signup from './pages/signup'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/Home'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
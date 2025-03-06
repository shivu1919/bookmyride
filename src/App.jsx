import React from 'react'
import Signup from './pages/signup'
import {Routes,Route, BrowserRouter} from "react-router-dom"
import Login from './pages/login'
import Home from './pages/Home'
import BookTicket from './pages/BookTicket'

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home/>} />
              <Route path='/BookTicket' element={<BookTicket/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
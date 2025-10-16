import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom" 
import Login from './Components/Login'
import Home from './Components/Home'
import Watch from './Components/Watch'
import User from './Components/User'
import About from './Components/About'
import Community from './Components/Community'



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/watch' element={<Watch/>}/>
    <Route path='/user' element={<User/>}/> 
    <Route path='/about' element={<About/>}/> 
    <Route path='/community' element={<Community/>}/> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
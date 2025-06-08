import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import Signup from './Auth/Signup'
import About from './Components/About'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="*" element={<div>Page Not Found</div>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

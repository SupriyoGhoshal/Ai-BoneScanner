import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'
import Signup from './Auth/Signup'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="*" element={<div>Page Not Found</div>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/register' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

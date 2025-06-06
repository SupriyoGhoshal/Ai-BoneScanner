import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home'

function App() {

  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="*" element={<div>Page Not Found</div>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

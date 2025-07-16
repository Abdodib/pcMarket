import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/app.css'
import Navbar from './component/navbar'
import Home from './component/home'
import Products from './component/products'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/app.css'
import Navbar from './component/navbar'
import Home from './component/home'
import Products from './component/products'
import Build from './component/build'
import SupportPage from './component/support'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/build' element={<Build />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>
    </Router>
  )
}

export default App

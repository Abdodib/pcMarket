import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/styles/App.css'
import Navbar from './component/navbar'
import Home from './component/home'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

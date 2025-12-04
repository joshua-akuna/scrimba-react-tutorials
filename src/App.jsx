import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ReactFacts from '../pages/ReactFacts'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/react-facts" element={<ReactFacts />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SzkoleniePage } from './pages/SzkoleniePage'
import { WdrozeniaPage } from './pages/WdrozeniaPage'
import './App.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/training" element={<SzkoleniePage />} />
        <Route path="/implementations" element={<WdrozeniaPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

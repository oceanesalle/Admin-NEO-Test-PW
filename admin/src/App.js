import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './admin/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/neo-login" element={<Login />}/>
    </Routes>
  )
}

export default App

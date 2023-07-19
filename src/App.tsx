import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wizard from './pages/wizard';
import Resumen from './pages/resumen';

function App() {
  

  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Wizard />} />
        <Route path='/resumen' element={<Resumen />} />
      </Routes>
    </Router>
  )
}

export default App

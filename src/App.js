import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import StudentLobby from './Pages/StudentLobby';
import StudentPanel from './Pages/StudentPanel';

function App() {
  return (
    <>
      <Router>
        <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/lobby' element={<StudentLobby />} />
        <Route path='/class' element={<StudentPanel />} />

        <Route path='*' element={<Home />} />

        </Routes>
      </Router> 
    </>
  );
}

export default App;

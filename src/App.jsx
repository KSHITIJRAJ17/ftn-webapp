// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import ApplyLeave from './pages/ApplyLeave.jsx';
import FeedbackPage from './pages/FeedBack.jsx';
import SuccessReg from './pages/SucessRegistration.jsx';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path='/success' element={<SuccessReg />} />
        <Route path="/home" element={<Home />} />
        <Route path="/applyleave" element={<ApplyLeave />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;

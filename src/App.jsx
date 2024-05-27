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
        <Route path="/ftn-webapp/" element={<Login />} />
        <Route path="/ftn-webapp/login" element={<Login />} />
        <Route path="/ftn-webapp/registration" element={<Register />} />
        <Route path='/ftn-webapp/success' element={<SuccessReg />} />
        <Route path="/ftn-webapp/home" element={<Home />} />
        <Route path="/ftn-webapp/applyleave" element={<ApplyLeave />} />
        <Route path="/ftn-webapp/feedback" element={<FeedbackPage />} />
      </Routes>
    </>
  );
}

export default App;

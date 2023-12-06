import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginWindow from './pages/LoginWindow/LoginWindow';
import Dashboard from './pages/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginWindow />}/>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

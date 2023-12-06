import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginWindow from './pages/LoginWindow/LoginWindow';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { getProfile } from './store/auth/actionCreators';


function App() {
     
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);



  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<LoginWindow />}/>
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

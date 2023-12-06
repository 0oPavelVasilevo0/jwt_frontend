import React from 'react'
import './login_window.css'
import Login from './components/Login/Login'
import { IRootState, useAppDispatch } from '../../store';
import { getProfile, logoutUser } from '../../store/auth/actionCreators';
import { useSelector } from 'react-redux';

const LoginWindow = () => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успушно авторизовались, {profile}</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <button onClick={() => dispatch(getProfile())}>update profile</button>
    </div>
  );

  return (
    <div>
      <h1>Login Window</h1>
      {isLoggedIn ? renderProfile() : <Login />}
    </div>
  );
}

export default LoginWindow
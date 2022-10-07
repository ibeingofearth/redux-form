import React from 'react'
import { logout } from './userSlice';
import { useDispatch } from 'react-redux';
import { Button } from 'antd';

function Logout() {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logout({
        user: null,
        loggedOut: true,
    }));
    }
  return (
    <div className='login-sec'>
      <h1>welcome To the  WebSite</h1>
      <Button type="primary" danger className='logout-btn'
      onClick={(e) => handleLogout(e)}>Logout</Button>
    </div>
  )
}
export default Logout;
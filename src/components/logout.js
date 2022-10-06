import React from 'react'
import { logout } from './userSlice';
import { useDispatch } from 'react-redux';
import {useRef} from 'react'

function Logout() {
    const dispatch = useDispatch();
 const emailRef = useRef();
    const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logout({
        user: null,
        loggedOut: true,
    }));
    }
  return (
    <div className='login-sec'>
      <h1>welcome :<span className='user' ref={emailRef}> </span></h1>
      <button className='logout-btn'
      onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}
export default Logout;
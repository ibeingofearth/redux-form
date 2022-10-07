import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { Button } from 'antd';

function Logout() {
  const navigate = useNavigate ()
  const[logout] = React.useState()
  
  React.useEffect(()=>{if(!localStorage.getItem('auth')) navigate('/')},[logout]);

    const dispatch = useDispatch();

    const handleLogout = (e) => {
    console.log('Failed:');
    e.preventDefault()
    localStorage.removeItem('auth')
    navigate('/')

    dispatch(logout({
        user: null,
        logout: true,
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
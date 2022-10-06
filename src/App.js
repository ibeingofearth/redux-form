import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less
import Login from './components/login';
import { useSelector } from 'react-redux';
import { selectUser } from './components/userSlice'
import Logout from './components/logout';
import React from 'react';

function App() {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
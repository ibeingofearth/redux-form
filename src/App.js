import './App.css';
import 'antd/dist/antd.min.css';
import Login from './components/login';
import { useSelector } from 'react-redux';
import { selectUser } from './components/userSlice'
import Logout from './components/logout';


function App() {
  const user = useSelector(selectUser);
  
  return (
    <div>
      {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
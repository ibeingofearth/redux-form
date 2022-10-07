import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { Button, Card, Form, Input } from 'antd';
import app from '../firebase/config';
import { useNavigate } from "react-router-dom";


function Login() { 
 

  const auth = getAuth(app);
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{if(localStorage.getItem('auth')) navigate('/Logout')},[])
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
 
    }
  })
 
   const signIn = () => {

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem('auth', true)
        navigate('/Logout') 
        // alert("User Has Successfully Signed In")
        dispatch(login({
          user: email,
          loggedIn: true,
      })
      );        
    })
    .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
    });
   }
   const signUp = () => { 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("successfully created an account")
      })
      localStorage.setItem('auth', true)    
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
      localStorage.setItem('auth', true)
      navigate.push('./Logout')
   }    
   
return(
  <>
  <div className="form1">
 
  <Card
        className="login-sec">
          <div className="card1">
            
   <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 6,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
<h3>REACT-REDUX-FIREAUTH</h3>

        <Form.Item
          label="Email"
          name="Email"
          wrapperCol={{
            offset: 0,
            span: 6,
          }}
          type={"email"}
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
          ]}
        >
          <Input onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          wrapperCol={{
            offset: 0,
            span: 6,
          }}
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

       
        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
        <Button type="primary" htmlType="submit" onClick={signUp}>
            SignUp
          </Button>  
      
          </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 3,
            span: 16,
          }}
        >
              <Button type="primary" htmlType="submit" onClick={signIn}>
            LogIn
          </Button>       
        </Form.Item>
      </Form>
      </div>
    </Card   >
    </div>
    </>
    );
}
export default Login;
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import {useRef} from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Checkbox, Form, Input } from 'antd';
import app from '../firebase/config'


function Login() {
  const auth = getAuth(app);
  const onFinish = (values) => {
    console.log('Success:', values);
    
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("This User Has Successfully Signed In")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
    });
   }
   const signUp = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("successfully created an account")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        alert(errorCode)
      });
   } 

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

 const [ email, setEmail ] = useState("");
 const [ password, setPassword ] = useState("");
 const emailRef = useRef();
 const passwordRef = useRef();

 const dispatch = useDispatch();
 

 const handlesubmit =(e) => {
  console.log(emailRef.current.value, passwordRef.current.value);
    e.preventDefault()

    dispatch(login({
        email: email,
        password: password,
        loggedIn: true,
    })
    );
 }
    return(
    <div className="login-sec">
         <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      autoSave="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input type="email"  onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
          
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button  type="primary" onClick={signUp}>
          Sign Up
        </Button><br/>
        
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
       
        <Button type="primary" htmlType="submit" onClick={signIn}>
          LogIn
        </Button>
      </Form.Item>
    </Form>
    </div>
    );
    
}
export default Login;

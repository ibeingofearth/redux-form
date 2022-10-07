import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "./userSlice";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Card, Checkbox, Form, Input } from 'antd';
import app from '../firebase/config';




function Login() { 
 

  const auth = getAuth(app);
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const dispatch = useDispatch();


   const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("User Has Successfully Signed In")
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
    localStorage.setItem('auth', true)  
   }
   const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("successfully created an account")
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });
   }    
   
return(
  <>
  <div className="form1">
 
  <Card
        className="login-sec">
   <Form
        name="basic"
        labelCol={{
          span: 9,
        }}
        wrapperCol={{
          span: 16,
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
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <Button type="primary" htmlType="submit" onClick={signUp}>
            SignUp
          </Button>  
      
          </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
              <Button type="primary" htmlType="submit" onClick={signIn}>
            LogIn
          </Button>       
        </Form.Item>
      </Form>
    </Card   >
 
    </div>
    </>
    );
}
export default Login;
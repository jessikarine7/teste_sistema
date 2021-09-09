import React from 'react';
import { Formik, Form, Field } from 'formik';
import *as yup from 'yup';
import './Login2.css';
import axios from 'axios';
import { history } from '../../history';

const Login = () => {
  
  const handleSubmit = values => {
    
    const USER_TOKEN = '8de13d32f0e5752b1e1ffdc2ef9347c614d1d82a'
    const AuthStr = 'Token '.concat(USER_TOKEN)
    const URL = 'http://localhost:8000/api/v1/usuarios/'
    const headers = { headers: { Authorization: AuthStr } } 

    axios
      .get(URL,
        headers,
        values)
      .then(resp => {
        const { data } = resp
        if (data) {
          localStorage.setItem('app-token', data)
          history.push('/Relatorio')
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error))
      })  
    
  }

  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  return(
    <>
      <h1>Login</h1>
      <Formik 
        initialValues={{}} 
        onSubmit={handleSubmit} 
        validationSchema={validations}
      >
        <Form className="Login">

          <div className="Login-Group">
            <Field name="email" className="Login-Field"/>
          </div>

          <div className="Login-Group">
            <Field name="password" className="Login-Field"/>
          </div>

          <button className="Login-Btn" type="submit">Login</button>
          
        </Form>
      </Formik>
    </>
  )
}

export default Login
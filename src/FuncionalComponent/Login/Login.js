import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// import { isEmail } from 'validator';
// import styled from "styled-component";
// import { Container } from './styled';
// import { Form } from './styled';
// import { Form } from './Login.css';
import axios from 'axios';
import './Login.css';
import *as yup from 'yup';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setUsers] = useState([]);
  


    // const handleSubimit = value => console.log(value) 
    //   const validacao = yup.object().shape({
    //     email: yup.string().email().required(),
    //     password: yup.string().min(6).required()
    //   })
    // console.log(validacao);
    // setEmail(email);
    // setPassword(password);
    


    useEffect(() => {
      
      const cunsultaUsers = async () => {
        const USER_TOKEN = '8de13d32f0e5752b1e1ffdc2ef9347c614d1d82a'
        const AuthStr = 'Token '.concat(USER_TOKEN)
        const URL = 'http://localhost:8000/api/v1/usuarios/'
        
        axios
        .get(URL,
          { headers: { Authorization: AuthStr } })
          .then(response => {
            console.log(response.data)
            setUsers(response.data)
          })
          .catch((error) => {
            console.log(error)
          })
          
        }
        cunsultaUsers();
       
        
      //--------------------- consultar -------------------------
           
    });


  return (

    <div className="container">

      <div id='tela_de_login'>
        
        <div id='fundo'>
          <img className='poligono'src="/img/POLIGONO.svg"/>
          <h2 className='fundo'></h2>
        </div>
        
        <form >
            <span className='content-email,label-email'>Email</span>
          <div id="email">
            <button className='email'>
              <input className='email-I' type="email" name='email' required placeholder="seu e-mail"/>
            </button>    
            <div>
              <button className='circulo-1'></button>
              <img className='arroba'src="/img/ARROBA.svg"/>
            </div>
          </div>

          <div id="senha">
            <button className='senha'>
              <input className='password' type="password" name='senha' value={password} onChange={e => setPassword(e.target.value)} placeholder="sua senha"/>
            </button>
            <button className='circulo-2'></button>
            <img className='cadeado'src="/img/CADEADO.svg"/>
          </div>

        </form>

        <div id='esqueceu'>
          <button className='esqueceu'></button>
          <h2 className='esqueceu-N'>ESQUECEU A SENHA?</h2>
        </div>

        <Link to={"/Relatorio"} id="login">
          <button type='submit' className='login'></button>
          <h2 className='login-N'>LOGIN</h2>
        </Link>

        <div id='solicitar'>
          <button className='solicitar'></button>
          <h2 className='solicitar-N'>SOLICITAR ACESSO</h2>
        </div>

        <h1 className='titulo'>ÁREA DE LOGIN</h1>
        
      </div>
    </div>

  );
}
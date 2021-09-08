import React, { useCallback, useState } from 'react';
import axios from 'axios';
import './Pedidos.css';
import { Link } from 'react-router-dom';



const acessoToken = '8de13d32f0e5752b1e1ffdc2ef9347c614d1d82a'
const URL = 'http://localhost:8000/api/v1/pedidos/';

const authAxios = axios.create ({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${acessoToken}`
  }
})



export default function Pedidos() {

  const [users, setUsers] = useState([]);
  const [requestError, setRequestError] = useState();
  
  const criar_Pedidos = useCallback(async () => {
    try{
      const resultado = await authAxios.post(URL);
      setUsers(resultado.data);

    } catch (err) {
      setRequestError(err.message);
    }

  });

  return(
    <div className='botoes'>
      <Link to={"/Pedidos"} className='executar' type='button' onClick={() => criar_Pedidos()}>
        {users.map(pedido => {
          return <p key={pedido.id}>{pedido.name}</p>
        })}
        {requestError && <p className="error">{requestError}</p>}
        <img className='icone-E' src="/img/EXECUTAR1.svg" />
        <span>EXECUTAR AGORA</span>
      </Link>
    </div>
  )
}


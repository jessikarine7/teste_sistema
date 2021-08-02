import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import './Relatorio.css';

export default function Relatorio() {

  const [cidades, setUsers]= useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {

    const loadUsers = async () => {
  
      const USER_TOKEN = '8de13d32f0e5752b1e1ffdc2ef9347c614d1d82a'
      const AuthStr = 'Token '.concat(USER_TOKEN)
      const URL = 'http://localhost:8000/api/v1/cidades/'
          
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
    loadUsers();
  }, [])


  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }

  const onChangeHandler = (text) => {
    let filtro = []

    if (text.length>0){
      filtro = cidades.filter(usr=>{
        const regex = new RegExp(`${text}`, "gi");
        return usr.municipio_uf.match(regex)
      })
    }

    console.log('filtro', filtro)
    setSuggestions(filtro)
    setText(text)
  }


  // handleClick{(

  //   let clear = document.querySelector('suggestion input2');
  //   let input = document.querySelector('input2');
  //   clear.useState('click',() => {
  //     input.forEach(input => input.value= '');
  //   })
  // )};

  // let clear = document.querySelector('suggestion input2');
  // let input = document.querySelector('input2');

  // clear.addEventListener('click', () => {
  //   input.forEach(input => input.value= '');
  // });


  return (
    <div className='fundo1' id='scroll'>
    
      <div className='container2'>
        <button className='icone2'>
          <img className='icone-P' src="/img/procurar.svg"/>
        </button>
            
        <div id="cidades" className='cidade'>
          <label htmlFor="cidade"></label>
          <input className='input2'
            type="text" 
            id="cidade" 
            maxLength="40"
            placeholder="Pesquise a cidade aqui..."
            onChange={e=>onChangeHandler(e.target.value)}
            value={text}
            onBlur={() =>{
              setTimeout(() => {
                setSuggestions([])
              }, 100); 
              }}
          />
        </div>
      </div>

      <div >
        {suggestions && suggestions.map((suggestion,i)=>
          <div  key={i} className="suggestion input2"
            onClick={()=>onSuggestHandler(suggestion.municipio_uf)}
          >{suggestion.municipio_uf} </div>
          )}
      </div>

      <div className='resultado'>
        <button className='cidade-p'>
          <span className='nome2'>{text}</span>
        </button>
        <button className='cancelar'>
          <img className='icone-C' src="/img/delete.svg"/>
        </button>
      </div>
        
      <div className='botoes'>
        <div className='executar' type='button'>
          <img className='icone-E' src="/img/EXECUTAR1.svg" />
          <span>EXECUTAR AGORA</span>
        </div>
      </div>

    </div>

  );
  
}

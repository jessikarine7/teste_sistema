// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Relatorio() {

//   const [cidades, setUsers]= useState([]);
//   const [text, setText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {

//     const loadUsers = async () => {
  
//       const USER_TOKEN = '8de13d32f0e5752b1e1ffdc2ef9347c614d1d82a'
//       const AuthStr = 'Token '.concat(USER_TOKEN)
//       const URL = 'http://localhost:8000/api/v1/cidades/'
          
//       axios
//         .get(URL,
//           { headers: { Authorization: AuthStr } })
//         .then(response => {
//           console.log(response.data)
//           setUsers(response.data)
//         })
//         .catch((error) => {
//           console.log(error)
//         })
//     }
//     loadUsers();
//   }, [])


//   const onSuggestHandler = (text) => {
//     setText(text);
//     setSuggestions([]);
//   }

//   const onChangeHandler = (text) => {
//     let filtro = []

//     if (text.length>0){
//       filtro = cidades.filter(usr=>{
//         const regex = new RegExp(`${text}`, "gi");
//         return usr.municipio_uf.match(regex)
//       })
//     }

//     console.log('filtro', filtro)
//     setSuggestions(filtro)
//     setText(text)
//   }
// }
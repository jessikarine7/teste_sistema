import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './FuncionalComponent/Login/Login';
import Relatorio from './FuncionalComponent/Relatorio/Relatorio';
import Pedidos from './FuncionalComponent/Pedidos/Pedidos';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Login" component={Login}/>
        <Route path={"/Relatorio"} component={Relatorio}/>
        <Route path={"/Pedidos"} component={Pedidos}/>
      </Switch>
    </BrowserRouter>
  );
}


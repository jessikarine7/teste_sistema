import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './FuncionalComponent/Login/Login';
import Relatorio from './FuncionalComponent/Relatorio/Relatorio';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/Login" component={Login}/>
        <Route path={"/Relatorio"} component={Relatorio}/>
        <Route path={"/Relatorio2"} component={Relatorio}/>
      </Switch>
    </BrowserRouter>
  );
}


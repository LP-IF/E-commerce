import './App.css';
import React, { useState } from 'react';

import CadastroCliente from './components/form/CadastroCliente'
import Login from './components/form/Login';
import CadastroProd from './components/form/CadastroProd';

export default (props) => (
  <div className="App">

    {/* <Login/> */}
    <CadastroCliente/> 
    {/* <CadastroProd/>  */}

  </div>
)


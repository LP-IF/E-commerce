import './App.css';
import React, { useState } from 'react';

import CadastroCliente from './components/form/CadastroCliente';
import Login from './components/form/Login';
import CadastroProd from './components/form/CadastroProd';
import Categoria from './components/form/Categoria';
import CompraFalta from './components/form/CompraFalta';
import ProdutoRecebido from './components/form/ProdutosRecebidos';
import ProblemaVenda from './components/form/ProblemaVenda';
import CadastrarCartao from './components/form/CadastrarCartao';
import CadastroAdmin from './components/form/CadastroAdmin';
import CadastroPF from './components/form/CadastroPF';
import CadastroPJ from './components/form/CadastroPJ';


export default (props) => (
  <div className="App">

     <Login/> 
    {/* <CadastroCliente/> */}
    {/* <CadastroProd/> */}
    {/* <Categoria/>  */}
    {/* <CompraFalta/> */}
     {/* <ProdutosRecebidos/> */}
    {/* <ProblemaVenda/> */}
    {/* <CadastrarCartao/> */}
     {/* <CadastroAdmin/> */}
     {/*<CadastroPF/>*/}
     {/* <CadastroPJ/> */}
     

  </div>
)


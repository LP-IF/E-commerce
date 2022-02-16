import './App.css';
import React, { useState } from 'react';

import Login from './components/form/Login';
import CadastroCliente from './components/form/CadastroCliente';
import CadastroProd from './components/form/CadastroProd';
import Categoria from './components/form/Categoria';
import ProdutoFalta from './components/form/ProdutoFalta';
import ProdutosRecebidos from './components/form/ProdutosRecebidos';
import ProblemaVenda from './components/form/ProblemaVenda';
import CadastrarCartao from './components/form/CadastrarCartao';
import CadastroAdmin from './components/form/CadastroAdmin';
import CadastroPF from './components/form/CadastroPF';
import CadastroPJ from './components/form/CadastroPJ';
import Relatorio from './components/Relatorio';


export default (props) => (
  <div className="App">

     {/*  <Login/>  */} 
     {/* <CadastroCliente/>  */}
    {/* <CadastroProd/>  */}
    {/* <Categoria/> */}
    {/* <ProdutoFalta/> */}
    {/* <ProdutosRecebidos/> */}
    {/* <ProblemaVenda/> */}
    {/* <CadastrarCartao/> */}
    {/*  <CadastroAdmin/> */}
    {/*  <CadastroPF/> */}
     {/* <CadastroPJ/> */}
     <Relatorio/>
     

  </div>
)


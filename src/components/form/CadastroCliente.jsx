import React, { useState } from 'react';

import Campos from './Campos';
import CadastroProd from './CadastroProd';
import Botao from './Botao';
import Stack from '@mui/material/Stack';

import './CadastroCliente.css'


export default (props) => (
  <div>
    
    <Campos></Campos>
    

    <div className="botoes-salvar">

    <Stack spacing='2' direction="row">
    <div className="salvar"><Botao nome="Salvar"/></div>
    <div className="cadastrar-cartao"><Botao nome="Salvar e Cadastrar Cartão"/></div>
    </Stack>

    </div>
    
    

  </div>
)

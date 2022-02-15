import React, { useState } from 'react';

import Campos from './Campos';
import Botao from './Botao';
import Stack from '@mui/material/Stack';
import './CadastroCliente.css'


export default (props) => (
  <div>
    <div className='cadPF'>
      <span>Cadastro Pessoa Física</span>
    </div>
    <Campos></Campos>
    <div className="botao-salvar">

      <Stack spacing='2' direction="row">
        <div className="salvar"><Botao nome="Salvar" /></div>
      </Stack>

    </div>


  </div>

)

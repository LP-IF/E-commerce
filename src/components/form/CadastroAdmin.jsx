import React, { useState } from 'react';

import Campos from './Campos';
import Botao from './Botao';
import Stack from '@mui/material/Stack';

import './CadastroAdmin.css'

export default (props) => (
  <div>
   <Campos></Campos>

    <div className="botao-salvar">

      <Stack spacing='2' direction="row">
        <div className="salvar"><Botao nome="Salvar" /></div>
      </Stack>

    </div>
    

  </div>

)

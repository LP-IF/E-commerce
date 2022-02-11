import React, { useState } from 'react';

import Campos from './Campos';
import BotaoSubmit from './BotaoSubmit';
import Stack from '@mui/material/Stack';

import './CadastroCliente.css'

export default (props) => (
  <div>
   <Campos></Campos>
    
    <div className="botoes-salvar">


    <Stack spacing='2' direction="row">
    <div className="salvar"><BotaoSubmit nome="Salvar"/></div>
    <div className="cadastrar-cartao"><BotaoSubmit nome="Salvar e Cadastrar Cartão"/></div>
    </Stack>

    </div>
    
    

  </div>

)

import React, { useState } from 'react';

import Campos from './Campos'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Botao from './Botao';
import Stack from '@mui/material/Stack';

import './CadastrarCartao.css'

export default (props) => (
  
  <div>
    <Box
      className='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '50ch', height:'3ch', left:'20%'},
      }}
      autoComplete="off"
      
    >
      <div>
      <TextField
          id="nomeTitular"
          label="Nome do Titular:"
          variant="standard"
          size="small"

        />
      </div>
      <div>
      <TextField
          id="numeroCartao"
          label="Número do Cartão"
          variant="standard"
          size="small"

        />
      </div>
      <div>
      <TextField
          id="validade"
          label="Validade"
          variant="standard"
          size="small"

        />
      </div>
      <div>
      <TextField
          id="cvv"
          label="CVV"
          variant="standard"
          size="small"

        />
      </div>

    </Box>
    <div className="botao-salvar">

    <Stack spacing='2' direction="row">
    <div className="salvar"><Botao nome="Salvar"/></div>
    </Stack>

    </div>

  </div>

)

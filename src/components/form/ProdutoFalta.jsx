import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Campos from './Campos';
import FornecedoresNomes from './FornecedoresNomes';
import ProdutosNomes from './ProdutosNomes';

import Botao from './Botao';
import './ProdutoFalta.css';

  export default (props) => (
  <div>
    <Box
      className='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '45ch', height: '1ch' },
      }}
      autoComplete="off"

    >
      <div className='prodFalta'>
        <span>Produto Falta</span>
      </div>

      <div>
        <FornecedoresNomes></FornecedoresNomes>
      </div>

      <div>
        <ProdutosNomes></ProdutosNomes>
      </div>


      <div>
        <TextField
          id="Quantidade"
          label="Quantidade"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="Para que dia deve ser entregue"
          label="Para que dia deve ser entregue"
          variant="standard"
          size="small"
        />
      </div>
    </Box>
    <div className="falta">

      <Stack spacing='2' direction="row">
        <div className="salvar-falta"><Botao nome="Salvar" /></div>
      </Stack>
    </div>
  </div>
)

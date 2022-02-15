import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import Especificacao from './Especificacao'
import Botao from './Botao'

import './ProdutosRecebidos.css'


export default function Form(props) {

  return (
    <Box
      className='box'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '45ch', height:'1ch'},
      }}
      autoComplete="off"
      
    >
      <div className='prodRec'> 
    <span>Produto Recebido</span> 
    </div>

      <div>
      <TextField
          id="Produto"
          label="Produto"
          variant="standard"
          size="small"
        />
      </div>

      <div className='info'>
      <Especificacao></Especificacao>
      </div>


      <div className='calc'>
        <TextField
          id="Cálculo"
          label="Cálculo"
          variant="standard"
          size="small"
        />
      </div>

    <div className="salvar">
      <Stack spacing='2' direction="row">
      <div><Botao nome="Salvar"/></div>
      </Stack>
    </div>
    
    </Box>

  )
}
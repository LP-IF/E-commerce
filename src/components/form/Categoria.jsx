import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import './Categoria.css'
import Botao from './Botao';


export default (props) =>
  <div>
  <div className='logx'> 
  <span>Categoria</span> 
  </div>
 
    <section class="container flex">

      <div class="item">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Categoria" variant="outlined" />
        </Box>
      </div>  

    </section>

    <Botao nome="Salvar" class="salvar">Salvar</Botao>

  </div>
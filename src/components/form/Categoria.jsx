import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import './Categoria.css'
import Botao from './Botao';


export default (props) =>
  <div>
  <div className='cat'> 
  <span>Categoria</span> 
  </div>
 
    <section className="container">

      <div className="item">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Categoria" variant="outlined" />

         <div className='salvar'> <Botao nome="Salvar">Salvar</Botao></div>

        </Box>
        
      </div>  

    </section>

    

  </div>
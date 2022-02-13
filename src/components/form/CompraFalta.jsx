import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import CadastroProd from './CadastroProd.css'

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
      <div>
      <TextField
          id="Fornecedor"
          label="Fornecedor"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="Produto"
          label="Produto"
          variant="standard"
          size="small"
        />
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
          id="Data"
          label="Data"
          variant="standard"
          size="small"
        />
      </div>

      <div className='salva'>
        <button>Salvar</button>
      </div>
    </Box>

  )
}
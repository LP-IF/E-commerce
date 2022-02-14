import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CadastroProd from './CadastroProd.css'

import FornecedoresNomes from './FornecedoresNomes'
import ProdutosNomes from './ProdutosNomes'



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

      <div className='salva'>
        <button>Salvar</button>
      </div>
    </Box>

  )
}
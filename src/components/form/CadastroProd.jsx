import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import Pagamento from './Pagamento'
import Imagem from './Imagem'
import Tamanho from './Tamanho'
import Cor from './Cor'
import Especificacao from './Especificacao'
import Botao from './Botao';

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
          id="Nome"
          label="Nome"
          variant="standard"
          size="small"

        />
        <TextField
          id="Preço"
          label="Preço"
          variant="standard"
          size="small"
        />
      </div>

      <div className='Categoria'>
        <TextField
          id="Categoria"
          label="Categoria"
          variant="standard"
          size="small"
        />
      </div>

      <div className='pag'>
        <Pagamento></Pagamento>
      </div>

      <div>
        <Imagem></Imagem>
      </div>

      <div>
        <TextField
          id="Quantidade em estoque"
          label="Quantidade em Estoque"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="Estoque mínimo"
          label="Estoque mínimo"
          variant="standard"
          size="small"

        />
        <TextField
          id="Ponto de ressuprimento"
          label="Ponto de ressuprimento"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="Estoque máximo"
          label="Estoque máximo"
          variant="standard"
          size="small"

        />
      </div>
      <div className='tamanho'>
      <p>Opções de tamanho:</p>
        <Tamanho></Tamanho>
      </div>

      <div className='cor'>
      <p>Opções de cor:</p>
        <Cor></Cor>
      </div>

      <div className='espc'>
      <p>Especificaçãoo:</p>
        <Especificacao></Especificacao>
      </div>

      <div className='salva'>
        <Botao nome="Salvar"></Botao>
      </div>
    </Box>

  )
}
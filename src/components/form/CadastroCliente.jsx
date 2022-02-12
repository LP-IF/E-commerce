import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Botao from './Botao';
import Stack from '@mui/material/Stack';
import CampoSelect from './CampoSelect.jsx'


import './CadastroCliente.css'



export default (props) => (
  <div className='corpo'>
    
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
          id="Sobrenome"
          label="Sobrenome"
          variant="standard"
          size="small"
        />
      </div>

      <div className='logradouro'>
        <TextField
          id="logradouro"
          label="Logradouro"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="numero"
          label="Número"
          variant="standard"
          size="small"

        />
        <TextField
          id="bairro"
          label="Bairro"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <CampoSelect></CampoSelect>
      </div>

      <div>
        <TextField
          id="complemento"
          label="Complemento"
          variant="standard"
          size="small"

        />
        <TextField
          id="cep"
          label="CEP"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="telefone"
          label="Telefone"
          variant="standard"
          size="small"

        />
        <TextField
          id="cpf"
          label="CPF"
          variant="standard"
          size="small"
        />
      </div>

      <div>
        <TextField
          id="email"
          label="E-mail"
          variant="standard"
          size="small"

        />
        <TextField
          id="emailConfirm"
          label="Insira novamente o e-mail"
          variant="standard"
          size="small"
        />
      </div>

      <div>
      <TextField
          id="Senha"
          label="Senha"
          type="password"
          variant="standard"
          size="small"
        />
        <TextField
          id="SenhaConfirm"
          label="Insire novamente a Senha"
          type="password"
          variant="standard"
          size="small"
        />
      </div>
    </Box>
    

    <div className="botoes-salvar">

    <Stack spacing='2' direction="row">
    <div className="salvar"><Botao nome="Salvar"/></div>
    <div className="cadastrar-cartao"><Botao nome="Salvar e Cadastrar Cartão"/></div>
    </Stack>

    </div>
    
    

  </div>
)

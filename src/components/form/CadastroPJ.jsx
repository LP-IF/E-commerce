import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import CampoSelect from './CampoSelect.jsx'
import Botao from './Botao';


import './CadastroPJ.css'

export default (props) => (
  <div>

    <div className="campos">
      <div className="cadPJ">
        <span>Cadastro Pessoa Jurídica</span>
      </div>
      <Box
        className='box'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 4, width: '45ch', height: '1ch' },
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

        <div className='estado-cidade'>
          <CampoSelect></CampoSelect>

          <div className="cidade">
            <TextField
              id="cidade"
              label="Cidade"
              variant="standard"
              size="small"
            />
          </div>
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

        <div className="pf">
          <span>Pessoa Física Representante</span>
        </div>

        <div>
          <TextField
            id="nomePF"
            label="Nome"
            variant="standard"
            size="small"

          />
          <TextField
            id="cpfPF"
            label="CPF"
            variant="standard"
            size="small"
          />
        </div>

        <div>
          <TextField
            id="emailPF"
            label="E-mail"
            variant="standard"
            size="small"

          />
          <TextField
            id="telefonePF"
            label="Telefone"
            variant="standard"
            size="small"
          />
        </div>

      </Box>
    </div>

    <div className="botao-salvar">

      <Stack spacing='2' direction="row">
        <div className="salvar"><Botao nome="Salvar" /></div>
      </Stack>

    </div>


  </div>

)

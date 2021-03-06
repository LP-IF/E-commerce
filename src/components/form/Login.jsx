import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Icone from './Icone';
import Senha from './Senha';
import Botao from './Botao';

import './Login.css'

export default (props) =>
  <div>
    <Box
      className='boxlog'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 4, width: '45ch', height:'1ch'},
      }}
      autoComplete="off"
      
    >
      <div className='logx'> 
      <span>Login</span> 
      </div>

      <Icone/>
      <div>
        <TextField
          id="email"
          label="E-mail"
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
      </div>
    </Box>

      <Senha/>
{/* 
      <div className="entrar"><Botao nome="Entrar"/></div>

      <div className='logx'> 
    <span>Cadastro Cliente</span> 
    </div> */}

  </div>
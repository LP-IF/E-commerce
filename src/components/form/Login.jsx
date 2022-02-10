import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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

  </div>
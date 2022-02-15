import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import ProblemaVenda from './ProblemaVenda.css'
import Botao from './Botao';

export default (props) =>
<div>

  <div className='logx'> 
    <span>Problemas Venda</span> 
    </div>
    <div className='prod'>
    <p>Produto:</p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Produto" variant="outlined" />
    </Box>
    </div>

    <div className='prod'>
    <p>Número do pedido: </p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Número do pedido" variant="outlined" />
    </Box>
    </div>

    <div className='prod'>
    <p>Motivo da devolução: </p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Motivo da Devolução" variant="outlined" />
    </Box>
    </div>

    <div className="falta">

  <Stack spacing='2' direction="row">
  <div className="salvar-falta"><Botao nome="Salvar"/></div>
  </Stack>
  </div>

</div>
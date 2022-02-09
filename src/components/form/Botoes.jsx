import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import './Botoes.css';

export default function ContainedButtons() {
  return (
    
   <div className='botoes-salvar'>
    <Box>
    <Stack direction="row" spacing={45}>
      <Button variant="contained" size="small">Salvar</Button>
      <Button variant="contained" size="small">Salvar e Cadastrar Cartão</Button>
    </Stack>
    </Box>
    </div>
  );
}

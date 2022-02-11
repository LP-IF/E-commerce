import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Azul</Button>
      <Button>Roxo</Button>
      <Button>Preto</Button>
      <Button>Adicionar</Button>
    </ButtonGroup>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import './CampoSelect.css'

export default function Form(props) {

  const estados = [
    {
      value: 'Acre',
    },
    {
      value: 'Alagoas',
    },
    {
      value: 'Amapa',
    },
    {
      value: 'Amazonas',
    },
    {
      value: 'Bahia',
    },
    {
      value: 'Ceara',
    },
    {
      value: 'Espirito Santo',
    },
    {
      value: 'Goias',
    },
    {
      value: 'Maranhao',
    },
    {
      value: 'Mato Grosso',
    },
    {
      value: 'Mato Grosso do Sul',
    },
    {
      value: 'Minas Gerais',
    },
    {
      value: 'Paraiba',
    },
    {
      value: 'Parana',
    },
    {
      value: 'Pernanbuco',
    },

    {
      value: 'Piaui',
    },
    {
      value: 'Rio de Janeiro',
    },
    {
      value: 'Rio Grande do Norte',
    },
    {
      value: 'Rio Grande do Sul',
    },
    {
      value:'Rondonia',
    },
    {
      value: 'Roraima',
    },
    {
      value: 'Santa Catarina',
    },
    {
      value: 'Sao Paulo',
    },
    {
      value: 'Sergipe',
    },
    {
      value: 'Tocantins',
    },
  ];

  const [estado, setEstado] = React.useState('EUR');

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <Box
      className='box-select'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 5, width: '20ch', height:'0ch'},
      }}
      autoComplete="off"
      
    >
    <div>
    <TextField
      id="estado"
      select
      label="Estado"
      value={estado}
      onChange={handleChange}
      variant="standard"
      size="small"
      helperText="Selecione o seu Estado"
    >{estados.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.value}
      </MenuItem>
    ))}
    </TextField>
  </div>
  </Box>
  )
}
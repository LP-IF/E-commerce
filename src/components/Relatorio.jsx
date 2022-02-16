import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
/* import DatePicker from '@mui/lab/DatePicker'; */

import './Relatorio.css'

export default function Relatorio (props) { 
  const estados = [
    {
      value: ' 1 dia',
    },
    {
      value: ' 3 dias',
    },
    {
      value: ' 7 dias',
    },
    {
      value: ' 2 semanas',
    },
    {
      value: ' 1 mês',
    },
    {
      value: ' 3 meses',
    },
  ];

  const [periodo, setPeriodo] = React.useState('');

  const [value, setValue] = React.useState(new Date());


  const handleChange = (event) => {
    setPeriodo(event.target.value);
  };

    return (
      <div>
       
       
      <div className='tempo'>
        <p className="textoTempo">Selecione um período de tempo pré definido<br/>ou insira o intervalo desejado:</p>
        
        <Box
          className='box-select'
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 5, width: '26ch', height:'0ch'},
          }}
          autoComplete="off"
          
        >
        <div>
        {/* <DatePicker
          openTo="year"
          views={['year', 'month', 'day']}
          label="Year, month and date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        /> */}
        <TextField
          id="periodo"
          select
          label="Selecione um período de tempo:"
          value={periodo}
          onChange={handleChange}
          variant="standard"
          size="medium"
          helperText="Contagem regressiva a partir da data atual"
        >{estados.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
        </TextField>
      </div>
      </Box>
      </div>
    </div>
  )
}
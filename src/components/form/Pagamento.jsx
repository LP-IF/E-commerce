import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Formas de Pagamento</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Cartão de Crédito"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Cartão de Crédito" control={<Radio />} label="Cartão de Crédito"/>
        <FormControlLabel value="Cartão de Débito" control={<Radio />} label="Cartão de Débito"/>
        <FormControlLabel value="Boleto Bancário" control={<Radio />} label="Boleto Bancário"/>
        <FormControlLabel value="PIX" control={<Radio />} label="PIX"/>
        <FormControlLabel value="Carteira Digital" control={<Radio />} label="Carteira Digital"/>
      </RadioGroup>
    </FormControl>
  );
}
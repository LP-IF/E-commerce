import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Formas de Pagamento</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Cartão de Crédito"
        name="radio-buttons-group"
      >
        <FormControlLabel control={<Checkbox />} label="Cartão de Crédito"/>
        <FormControlLabel control={<Checkbox />} label="Cartão de Débito"/>
        <FormControlLabel control={<Checkbox />} label="Boleto Bancário"/>
        <FormControlLabel control={<Checkbox />} label="PIX"/>
        <FormControlLabel control={<Checkbox />} label="Carteira Digital"/>
      </RadioGroup>
    </FormControl>
  );
}
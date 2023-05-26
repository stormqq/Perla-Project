import { styled } from '@mui/system';
import { useState } from 'react';
import { Input } from '@mui/material';

const InputHours = styled(Input)({
  width: '80px',
  height: '44px',
  padding: '12px 16px',
  fontSize: '16px',
  border: '1px solid #A5A5A5',
  borderRadius: '15px',
  fontFamily: 'Commissioner, sans-serif',
  color: '#A5A5A5',
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
});

function WorkingHoursInput(props) {
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <InputHours
      value={value}
      onInput={handleInput}
      inputProps={{ min: 0, max: 24 }}
      disableUnderline={true}
      {...props}
      endAdornment='h'
    />
  );
}

export default WorkingHoursInput;

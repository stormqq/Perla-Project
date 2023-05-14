import { styled } from '@mui/system';
import { useState } from 'react';

const InputHours = styled('input')({
  width: '80px',
  height: '44px',
  padding: '12px 16px',
  fontSize: '16px',
  border: '1px solid #A5A5A5',
  borderRadius: '15px',
  fontFamily: 'Commissioner, sans-serif',
  color: '#A5A5A5',
});

function WorkingHoursInput(props) {
  return <InputHours {...props}></InputHours>;
}
export default WorkingHoursInput;

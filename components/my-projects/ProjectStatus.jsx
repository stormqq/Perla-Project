import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { StyledSelect } from './Dropdowm';
import MenuItem from '@mui/material/MenuItem';

function ProjectStatus() {
  const [status, setStatus] = useState('');
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Show</InputLabel>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        id='status-select'
        value={status}
        onChange={handleChangeStatus}
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline':
            {
              border: 'none',
              boxShadow: ' 0px 4px 8px rgba(209, 209, 209, 0.15)',
              borderRadius: '25px',
            },
          ' .MuiMenu-paper': {
            transitionDuration: '3s !important',
          },
          width: '203px',
        }}
      >
        <MenuItem value='All'>All</MenuItem>
        <MenuItem value='In progress'>In progress</MenuItem>
        <MenuItem value='Completed'>Completed</MenuItem>
      </StyledSelect>
    </FormControl>
  );
}

export default ProjectStatus;

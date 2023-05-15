import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { StyledSelect } from '../my-projects/Dropdowm';
import MenuItem from '@mui/material/MenuItem';

function ProjStat({ value1, value2, value3 = null }) {
  const [status, setStatus] = useState(value1);
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
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
          border: '1px solid #A5A5A5',
          borderRadius: '20px',
          width: '160px',
        }}
      >
        <MenuItem value={value1} defaultValue={value1}>
          {value1}
        </MenuItem>
        <MenuItem value={value2}>{value2}</MenuItem>
        {value3 ? <MenuItem value={value3}>{value3}</MenuItem> : null}
      </StyledSelect>
    </FormControl>
  );
}

export default ProjStat;

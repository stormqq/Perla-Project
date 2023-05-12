import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import { StyledSelect } from './Dropdowm';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';

function UserFormControl() {
  const [employee, setEmployee] = useState('');
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>
        <img
          src='https://example.com/john-doe.jpg'
          style={{ marginRight: 10 }}
        />
        John Doe - Developer
      </InputLabel>
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        id='employee-select'
        value={employee}
        onChange={handleChange}
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
          width: '232px',
        }}
      >
        <MenuItem value='my-profile '>My Profile</MenuItem>
        <MenuItem value='plan&payment'>Plan & payment</MenuItem>
        <MenuItem value='Log out'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Plan & payment
            <LogoutIcon />
          </Box>
        </MenuItem>
      </StyledSelect>
    </FormControl>
  );
}

export default UserFormControl;

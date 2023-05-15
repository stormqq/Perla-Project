import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import { StyledSelect } from './Dropdowm';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Typography } from '@mui/material';
function UserFormControl() {
  const [employee, setEmployee] = useState('user');
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
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
          height: '50px',
          boxShadow: 0,
          shadows: 'none',
        }}
      >
        <MenuItem sx={{ d: 'flex' }} value='user'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <img
              src='https://randomuser.me/api/portraits/men/58.jpg'
              style={{
                marginRight: 10,
                width: '36px',
                height: '36px',
                borderRadius: '50%',
              }}
            />
            <Box>
              <Typography sx={{ color: '#303030', fontSize: '16px' }}>
                John Doe
              </Typography>
              <Typography sx={{ color: '#686868', fontSize: '14px' }}>
                HR Manager
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem value='my-profile'>My Profile</MenuItem>
        <MenuItem value='plan&payment'>Plan & payment</MenuItem>
        <MenuItem value='Log out'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Log out
            <LogoutIcon />
          </Box>
        </MenuItem>
      </StyledSelect>
    </FormControl>
  );
}

export default UserFormControl;

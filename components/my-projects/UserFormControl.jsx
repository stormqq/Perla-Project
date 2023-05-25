import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormControl from '@mui/material/FormControl';
import { StyledSelect } from './Dropdowm';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import icon from '../../public/usericon.png';
import Image from 'next/image';
function UserFormControl() {
  const { data: session } = useSession();
  const [employee, setEmployee] = useState('user');
  const handleChange = (event) => {
    setEmployee(event.target.value);
  };

  const userEmail = session?.user?.email;
  const userEmailName = userEmail?.substring(0, userEmail.indexOf('@'));
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
            <Image src={icon} alt='user icon' width={36} height={36} style={{borderRadius: '50%'}}/>
            <Box>
              <Typography sx={{ color: '#303030', fontSize: '16px' }}>
                {userEmailName}
              </Typography>
              <Typography sx={{ color: '#686868', fontSize: '14px' }}>
                User
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem disabled value='my-profile'>My Profile</MenuItem>
        <MenuItem disabled value='plan&payment'>Plan & payment</MenuItem>
        <MenuItem onClick={
          () => signOut()
        } value='Log out'>
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

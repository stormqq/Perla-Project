// import { useState } from 'react';
'use client';
import LandingLogo from '@/components/landing/LandingLogo';
import UserFormControl from '@/components/my-projects/UserFormControl';
import { Box } from '@mui/material';
import PersonalProjectTitle from '@/components/new-project/PersonalProjectTitle';
import BackBtn from '@/components/new-project/BackBtn';
import App from '@/components/new-project/ControlledCalendar';
import FirstComponent from '@/components/new-project/MuiDatePicker';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from '../page';
function NewProject() {
  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '13px 30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LandingLogo />
          <UserFormControl></UserFormControl>
        </Box>
        <Box sx={{ display: 'flex', gap: '325px' }}>
          <BackBtn />
          <PersonalProjectTitle text='New personal project' />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
            borderRadius: '20px',
          }}
        >
          <Box
            component='img'
            sx={{
              height: 196,
              width: 196,
              borderRadius: '50%',
            }}
            alt='The house from the offer.'
            src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
          />
        </Box>
        <FirstComponent></FirstComponent>
      </Box>
    </MuiThemeProvider>
  );
}

export default NewProject;

'use client'

import React, { useState } from 'react';
import { Box} from '@mui/material';

import LandingLogIn from '@/components/landing/LandingLogIn';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import NavText from '@/components/landing/NavText';
import LandingLogo from '@/components/landing/LandingLogo';
import LandingMainTitle from '@/components/landing/LandingMainTitle';
import LandingDescription from '@/components/landing/LandingDescription';
import LandingMainBtn from '@/components/landing/LandingMainBtn';
import Login from '@/components/landing/Login';
import Signup from '@/components/landing/Signup';



export default function Landing() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);



  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '19px 30px',
        }}
      >
        <LandingLogo />
        <Stack direction='row' spacing={'80px'}>
          <NavText text='About'></NavText>
          <NavText text='Tutorials'></NavText>
          <NavText text='Contacts'></NavText>
        </Stack>

        <LandingLogIn onClick={handleLoginOpen} sx={{ marginLeft: '589px' }}>
          Log in
        </LandingLogIn>
        
        <Login open={loginOpen} onClose={handleLoginClose} handleLoginClose={handleLoginClose} handleSignupOpen={handleSignupOpen} />
        <Signup open={signupOpen} onClose={handleSignupClose} handleSignupClose={handleSignupClose} handleLoginOpen={handleLoginOpen} />
        
      </Box>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box sx={{ display: 'flex', gap: '243px', m: '173px 0 100px 120px' }}>
          <Box>
            <LandingMainTitle></LandingMainTitle>
            <LandingDescription></LandingDescription>
            <LandingMainBtn></LandingMainBtn>
          </Box>
          <Box>
            <Box
              sx={{
                width: '660px',
                height: '562px',
                border: '1px solid black',
                borderRadius: ' 25px 0px 0px 25px',
              }}
            />
          </Box>
        </Box>
      </Box>
      </>
  );
}

'use client';
import React, { useState } from 'react';
import { Box, FormControlLabel, Typography } from '@mui/material';
import PopupTextfield from '@/components/landing/PopupTextField';
import AuthorBtn from '@/components/landing/AuthorisationBtn';
import LandingLogIn from '@/components/landing/LandingLogIn';
import LandinAuthorisationPopup from '@/components/landing/LandingDialog';
import PopupTitle from '@/components/landing/LandingDialogTitle';
import LandingDialogLabel from '@/components/landing/LandingDialogInputLabel';
import LandingDialogSupportLabel from '@/components/landing/LangingDialogLabelSupport';
import CLosePopupIcon from '@/components/landing/ClosePopupIcon';
import PopupCheckbox from '@/components/landing/PopupCheckbox';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import NavText from '@/components/landing/NavText';
import LandingLogo from '@/components/landing/LandingLogo';
import LandingMainTitle from '@/components/landing/LandingMainTitle';
import LandingDescription from '@/components/landing/LandingDescription';
import LandingMainBtn from '@/components/landing/LandingMainBtn';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ABAFB0', // This is an orange looking color
    },
  },
  typography: {
    fontFamily: 'Commissioner, sans-serif', // Set the global font family to Commissioner
    fontWeight: 500,
  },
});

export default function Landing() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    handleLoginClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    handleSignupClose();
  };

  return (
    <MuiThemeProvider theme={theme}>
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
        <LandinAuthorisationPopup open={loginOpen} onClose={handleLoginClose}>
          <Box sx={{ display: 'flex' }}>
            <PopupTitle sx={{ margin: '40px auto' }}>Log in</PopupTitle>
            <CLosePopupIcon onClick={handleLoginClose} />
          </Box>
          <Box sx={{ margin: '0 auto' }}>
            <form onSubmit={handleLoginSubmit}>
              <LandingDialogLabel>Email</LandingDialogLabel>
              <PopupTextfield
                sx={{ margin: '10px 0 40px 0' }}
                placeholder='Your email address'
                type='email'
                value={username}
                onChange={handleUsernameChange}
              />
              <LandingDialogLabel>Password</LandingDialogLabel>
              <PopupTextfield
                sx={{ margin: '10px 0 40px 0' }}
                placeholder='Your Password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
              />
            </form>
            <AuthorBtn onClick={handleLoginSubmit} text='Log in'></AuthorBtn>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                m: '20px 0 40px 0',
              }}
            >
              <LandingDialogSupportLabel>
                Forgot password?
              </LandingDialogSupportLabel>
              <LandingDialogSupportLabel
                onClick={() => {
                  handleLoginClose();
                  handleSignupOpen();
                }}
              >
                Don’t have an account?
              </LandingDialogSupportLabel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <LandingDialogSupportLabel>
                Log in With{' '}
              </LandingDialogSupportLabel>
            </Box>
          </Box>
        </LandinAuthorisationPopup>
        <LandinAuthorisationPopup open={signupOpen} onClose={handleSignupClose}>
          <Box sx={{ display: 'flex' }}>
            <PopupTitle sx={{ margin: '40px auto' }}>Sign up</PopupTitle>
            <CLosePopupIcon onClick={handleSignupClose} />
          </Box>
          <Box sx={{ m: '0 auto' }}>
            <form onSubmit={handleSignupSubmit}>
              <LandingDialogLabel>Email</LandingDialogLabel>
              <PopupTextfield
                sx={{ margin: '10px 0 40px 0' }}
                placeholder='Your email address'
                type='email'
                value={username}
                onChange={handleUsernameChange}
              />
              <LandingDialogLabel>Password</LandingDialogLabel>
              <PopupTextfield
                sx={{ margin: '10px 0 40px 0' }}
                placeholder='Your Password'
                type='password'
                value={password}
                onChange={handlePasswordChange}
              />
              <Box sx={{ marginBottom: '20px' }}>
                <FormControlLabel
                  control={<PopupCheckbox></PopupCheckbox>}
                  label={
                    <Typography variant='body1'>
                      I agree with
                      <strong> Terms of use</strong>
                    </Typography>
                  }
                />
              </Box>
            </form>
            <AuthorBtn onClick={handleSignupSubmit} text='Sign up'></AuthorBtn>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                m: '20px 0 40px 0',
              }}
            >
              <LandingDialogSupportLabel
                onClick={() => {
                  handleSignupClose();
                  handleLoginOpen();
                }}
              >
                Already have an account?
              </LandingDialogSupportLabel>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <LandingDialogSupportLabel>
                Sign up With{' '}
              </LandingDialogSupportLabel>
            </Box>
          </Box>
        </LandinAuthorisationPopup>
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
    </MuiThemeProvider>
  );
}

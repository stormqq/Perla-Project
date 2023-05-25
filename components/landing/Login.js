import React, { useState } from 'react';
import LandingLogIn from '@/components/landing/LandingLogIn';
import LandinAuthorisationPopup from '@/components/landing/LandingDialog';
import PopupTitle from '@/components/landing/LandingDialogTitle';
import PopupTextfield from '@/components/landing/PopupTextField';
import LandingDialogLabel from '@/components/landing/LandingDialogInputLabel';
import AuthorBtn from '@/components/landing/AuthorisationBtn';
import LandingDialogSupportLabel from '@/components/landing/LangingDialogLabelSupport';
import CLosePopupIcon from '@/components/landing/ClosePopupIcon';
import { Box } from '@mui/material';
import { signIn, useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';


export default function Login({ open, onClose, handleLoginClose, handleSignupOpen }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("You clicked SIGN IN BUTTON")
    console.log('Email:', email);
    console.log('Password:', password);
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      if (!data.error) {
        router.push("/my-projects");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LandinAuthorisationPopup open={open} onClose={onClose}>
      <Box sx={{ display: 'flex' }}>
        <PopupTitle sx={{ margin: '40px auto' }}>Log in</PopupTitle>
        <CLosePopupIcon onClick={onClose} />
      </Box>
      <Box sx={{ margin: '0 auto' }}>
        <form onSubmit={handleLoginSubmit}>
          <LandingDialogLabel>Email</LandingDialogLabel>
          <PopupTextfield
            sx={{ margin: '10px 0 40px 0' }}
            placeholder='Your email address'
            type='email'
            value={email}
            onChange={handleEmailChange}
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
          <LandingDialogSupportLabel onClick={() => {
                  handleLoginClose();
                  handleSignupOpen();
                }}>
            Don’t have an account?
          </LandingDialogSupportLabel>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LandingDialogSupportLabel>Log in With{' '}</LandingDialogSupportLabel>
        </Box>
      </Box>
    </LandinAuthorisationPopup>
  );
}

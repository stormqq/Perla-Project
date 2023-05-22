import React, { useState } from "react";
import LandinAuthorisationPopup from "@/components/landing/LandingDialog";
import PopupTitle from "@/components/landing/LandingDialogTitle";
import PopupTextfield from "@/components/landing/PopupTextField";
import LandingDialogLabel from "@/components/landing/LandingDialogInputLabel";
import AuthorBtn from "@/components/landing/AuthorisationBtn";
import LandingDialogSupportLabel from "@/components/landing/LangingDialogLabelSupport";
import CLosePopupIcon from "@/components/landing/ClosePopupIcon";
import { Box, FormControlLabel, Typography } from "@mui/material";
import PopupCheckbox from "./PopupCheckbox";
import axios from "axios";

export default function Signup({
  open,
  onClose,
  handleSignupClose,
  handleLoginOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/register', { email, password })
      console.log(data)
  } catch (error) {
      console.log("Register error:", error)
  }
    onClose();
  };

  return (
    <LandinAuthorisationPopup open={open} onClose={onClose}>
      <Box sx={{ display: "flex" }}>
        <PopupTitle sx={{ margin: "40px auto" }}>Sign up</PopupTitle>
        <CLosePopupIcon onClick={onClose} />
      </Box>
      <Box sx={{ margin: "0 auto" }}>
        <form onSubmit={handleSignupSubmit}>
          <LandingDialogLabel>Email</LandingDialogLabel>
          <PopupTextfield
            sx={{ margin: "10px 0 40px 0" }}
            placeholder="Your email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <LandingDialogLabel>Password</LandingDialogLabel>
          <PopupTextfield
            sx={{ margin: "10px 0 40px 0" }}
            placeholder="Your Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Box sx={{ marginBottom: "20px" }}>
            <FormControlLabel
              control={<PopupCheckbox></PopupCheckbox>}
              label={
                <Typography variant="body1">
                  I agree with
                  <strong> Terms of use</strong>
                </Typography>
              }
            />
          </Box>
        </form>
        <AuthorBtn onClick={handleSignupSubmit} text="Sign up"></AuthorBtn>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "20px 0 40px 0",
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <LandingDialogSupportLabel>Sign up With </LandingDialogSupportLabel>
        </Box>
      </Box>
    </LandinAuthorisationPopup>
  );
}

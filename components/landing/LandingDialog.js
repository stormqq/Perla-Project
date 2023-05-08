import { styled } from '@mui/system';
import { Dialog } from '@mui/material';
const LandingDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: '50px',
    width: '100%',
    maxWidth: '875px', // Set your width here
    height: '660px',
  },
  backdropFilter: 'blur(5px)',
});
function LandinAuthorisationPopup(props) {
  return <LandingDialog {...props}></LandingDialog>;
}
export default LandinAuthorisationPopup;

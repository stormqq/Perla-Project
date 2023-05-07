import { styled } from '@mui/system';
import { InputLabel } from '@mui/material';
const LandingDialogInputLabel = styled(InputLabel)({
  fontSize: '20px',
});
function LandingDialogLabel(props) {
  return <LandingDialogInputLabel {...props}></LandingDialogInputLabel>;
}
export default LandingDialogLabel;

import { styled } from '@mui/system';
import { InputLabel } from '@mui/material';
const LandingDialogLabelSupport = styled(InputLabel)({
  fontSize: '16px',
  cursor: 'pointer',
});
function LandingDialogSupportLabel(props) {
  return <LandingDialogLabelSupport {...props}></LandingDialogLabelSupport>;
}
export default LandingDialogSupportLabel;

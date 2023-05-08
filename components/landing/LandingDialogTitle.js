import { styled } from '@mui/system';
import { DialogTitle } from '@mui/material';
const LandingDialogTitle = styled(DialogTitle)({
  fontVariant: 'h5',
  padding: '0px',
  fontSize: '32px',
  letterSpacing: '0%',
  fontWeight: 'bold',
  color: '#303030',
});
function PopupTitle(props) {
  return <LandingDialogTitle {...props}></LandingDialogTitle>;
}
export default PopupTitle;

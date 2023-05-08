import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const LandingTitle = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '64px',
  width: '417px',
  height: '192px',
  lineHeight: '100%',
});
function LandingMainTitle() {
  return <LandingTitle>Project Management System</LandingTitle>;
}
export default LandingMainTitle;

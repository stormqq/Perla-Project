import { styled } from '@mui/system';
import { Typography } from '@mui/material';
const LandingDesc = styled(Typography)({
  fontVariant: 'h1',
  color: '#6B6B6B',
  fontSize: '24px',
  margin: '30px 0 60px 0',
});
function LandingDescription() {
  return <LandingDesc>Manage your projects with Perla</LandingDesc>;
}

export default LandingDescription;

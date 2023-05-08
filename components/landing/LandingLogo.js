import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Link from 'next/link';
const Landinglogo = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '28px',
  fontWeight: 500,
  cursor: 'pointer',
});
function LandingLogo() {
  return (
    <Landinglogo>
      <Link href='/'>Perla</Link>
    </Landinglogo>
  );
}
export default LandingLogo;

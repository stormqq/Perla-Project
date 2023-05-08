import { styled } from '@mui/system';
import Link from 'next/link';

const LandingStartBtn = styled('button')({
  fontWeight: 500,
  fontFamily: 'Commissioner, sans-serif',
  fontSize: '20px',
  color: '#FFF',
  padding: '16.5px 176.5px',
  backgroundColor: '#656565',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
});

function LandingMainBtn() {
  return (
    <LandingStartBtn>
      <Link href='/myprojects'>Start</Link>
    </LandingStartBtn>
  );
}

export default LandingMainBtn;

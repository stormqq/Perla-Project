import { styled } from '@mui/system';

const LandinglogIn = styled('button')({
  fontWeight: 500,
  fontFamily: 'Commissioner, sans-serif',
  fontSize: '20px',
  color: '#FFF',
  padding: '8px 38.5px',
  backgroundColor: '#656565',
  borderRadius: '20px',
  border: 'none',
  cursor: 'pointer',
});
function LandingLogIn(props) {
  return <LandinglogIn {...props}></LandinglogIn>;
}
export default LandingLogIn;

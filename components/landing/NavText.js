import { styled } from '@mui/system';
import { Typography } from '@mui/material';
const Navtext = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '20px',
  fontWeight: 500,
  cursor: 'pointer',
});
function NavText({ text }) {
  return <Navtext>{text}</Navtext>;
}
export default NavText;

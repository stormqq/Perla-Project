import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '48px',
  lineHeight: '58px',
  fontWeight: 'bold',
});
function PersonalProjectTitle(props) {
  return <Title>{props.text}</Title>;
}
export default PersonalProjectTitle;

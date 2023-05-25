import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '48px',
  lineHeight: '58px',
  fontWeight: '500',
});
function PersonalProjectTitle(props) {
  return <Title>{props.text}</Title>;
}
export default PersonalProjectTitle;

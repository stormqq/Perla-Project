import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title = styled(Typography)({
  color: '#303030',
  fontSize: '20px',
  lineHeight: '24px',
  marginBottom: '20px',
  fontWeight: '500',
});
function DaysOfWeek(props) {
  return <Title>{props.text}</Title>;
}
export default DaysOfWeek;

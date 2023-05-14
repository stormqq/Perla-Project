import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '24px',
  lineHeight: '29px',
});
function WorkingDaysTitle(props) {
  return <Title {...props}>{props.text}</Title>;
}
export default WorkingDaysTitle;

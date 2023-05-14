import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Title = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '20px',
  lineHeight: '24px',
});
function ProjectDescriptionText(props) {
  return <Title>{props.text}</Title>;
}
export default ProjectDescriptionText;

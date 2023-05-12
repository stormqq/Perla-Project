import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const CardDescription = styled(Typography)({
  color: '#6B6B6B',
  fontSize: '16px',
  lineHeight: '19px',
});
function ProjectsHeadTitle(props) {
  return <CardDescription {...props}>{props.title}</CardDescription>;
}
export default ProjectsHeadTitle;

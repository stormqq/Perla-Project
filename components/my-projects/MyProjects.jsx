import { styled } from '@mui/system';
import { Typography } from '@mui/material';
const MyProjects = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '36px',
  color: '#6B6B6B',
});
function MyProjectsTitle() {
  return <MyProjects>My Projects</MyProjects>;
}
export default MyProjectsTitle;

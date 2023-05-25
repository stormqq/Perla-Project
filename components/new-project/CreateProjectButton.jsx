import { styled } from '@mui/system';

const CreateNewProjectButton = styled('button')({
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
function CreateProjectButton(props) {
  return <CreateNewProjectButton {...props}></CreateNewProjectButton>;
}
export default CreateProjectButton;

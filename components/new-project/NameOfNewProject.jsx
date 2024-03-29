import { styled } from '@mui/system';

const TextField = styled('input')({
  width: '500px',
  padding: '12.6px 16px',
  fontSize: '16px',
  border: '1px solid #969696',
  borderRadius: '20px',
  fontFamily: 'Commissioner, sans-serif',
  color: '#969696',
});

function NameOfNewProject({project, setProject, ...props}) {
  return <TextField onChange={(e) => setProject({...project, projectName: e.target.value})
} {...props}></TextField>;
}
export default NameOfNewProject;

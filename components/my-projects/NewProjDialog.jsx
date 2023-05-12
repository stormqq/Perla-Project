import { styled } from '@mui/system';
import { Dialog } from '@mui/material';
const NewProjDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: '50px',
    height: '588px',
    width: '100%',
    maxWidth: '850px', // Set your width here
  },
  backdropFilter: 'blur(5px)',
});
function NewProjectsPopup(props) {
  return <NewProjDialog {...props}></NewProjDialog>;
}
export default NewProjectsPopup;

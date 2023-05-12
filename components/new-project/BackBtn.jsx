import { styled } from '@mui/system';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Btn = styled('button')({
  fontWeight: 500,
  fontFamily: 'Commissioner, sans-serif',
  fontSize: '20px',
  color: '#6B6B6B',
  backgroundColor: '#C4C4C4',
  borderRadius: '50px',
  padding: '0 27.5px',
  border: 'none',
  cursor: 'pointer',
});
function BackBtn() {
  return (
    <Btn>
      <KeyboardBackspaceIcon sx={{ marginRight: '10px' }} />
      Back
    </Btn>
  );
}
export default BackBtn;

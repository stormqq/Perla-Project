import { styled } from '@mui/system';

const PopupTextField = styled('input')({
  width: '428px',
  padding: '16px',
  fontSize: '16px',
  border: '1px solid #A5A5A5',
  borderRadius: '20px',
  fontFamily: 'Commissioner, sans-serif',
  color: '#303030',
});

function PopupTextfield(props) {
  return <PopupTextField {...props}></PopupTextField>;
}
export default PopupTextfield;

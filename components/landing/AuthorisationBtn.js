import { styled } from '@mui/system';

const AuthorisationBtn = styled('button')({
  fontSize: '24px',
  backgroundColor: '#656565',
  fontFamily: 'Commissioner, sans-serif',
  borderRadius: '20px',
  color: '#FFFFFF',
  border: 'none',
  padding: '16.5px 19px',
  width: '460px',
  cursor: 'pointer',
});

function AuthorBtn(props) {
  return <AuthorisationBtn {...props}>{props.text}</AuthorisationBtn>;
}
export default AuthorBtn;

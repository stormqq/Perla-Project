import { styled } from '@mui/system';

const SearchField = styled('input')({
  width: '272px',
  padding: '12.5px 50px 12.5px 16px',
  fontSize: '16px',
  border: '1px solid  #E3E3E3',
  borderRadius: '15px',
  fontFamily: 'Commissioner, sans-serif',
  color: '#969696',
});

function MyProjectSearchField(props) {
  return <SearchField {...props}></SearchField>;
}
export default MyProjectSearchField;

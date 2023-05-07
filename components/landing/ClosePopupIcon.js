import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

const CLosePopupIc = styled(CloseIcon)({
  cursor: 'pointer',
  position: 'absolute',
  right: '4%',
  top: '4%',
  fontSize: '26.37px',
});
function CLosePopupIcon(props) {
  return <CLosePopupIc {...props}></CLosePopupIc>;
}
export default CLosePopupIcon;

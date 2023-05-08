import { styled } from '@mui/system';
import { Checkbox } from '@mui/material';
const PopupCheck = styled(Checkbox)({
  color: '#A5A5A5',
  '&.Mui-checked': {
    color: '#A5A5A5',
  },
});
function PopupCheckbox() {
  return <PopupCheck></PopupCheck>;
}
export default PopupCheckbox;

import { styled } from '@mui/material';
import Select from '@mui/material/Select';
export const StyledSelect = styled(Select)({
  position: 'relative',
  '& .MuiSelect-icon': {
    transition: 'transform 0.25s ease',
    transformOrigin: 'center',
    animation: '$rotate 1s infinite linear',
  },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

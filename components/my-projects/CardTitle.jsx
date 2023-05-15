import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Check } from './AddCircleIcon';

const CardTitle = styled(Typography)({
  color: '#1F1F1F',
  fontSize: '24px',
  lineHeight: '100%',
});
const CardSubTitle = styled(Typography)({
  color: '#1F1F1F',
  fontSize: '36px',
  lineHeight: '100%',
});
const CardDescription = styled(Typography)({
  color: '#1F1F1F',
  fontSize: '16px',
  lineHeight: '100%',
});
function CardMainTitle({ title, price, cardDesctiption }) {
  return (
    <Box sx={{ padding: '40px' }}>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle margin={'15px 0 36px 0'}>{price}</CardSubTitle>
      {title === 'Teamwork' ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Check />
          <CardDescription>{cardDesctiption}</CardDescription>
        </Box>
      ) : null}
    </Box>
  );
}
export default CardMainTitle;

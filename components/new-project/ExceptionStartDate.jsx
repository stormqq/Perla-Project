import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ExceptionStartDate({exception, setException}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker 
        sx={{
          '&.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-notchedOutline':
            {
              borderRadius: '15px',
            },
          ' .MuiMenu-paper': {
            transitionDuration: '3s !important',
          },
          width: '367px',
        }}
        color='secondary'
        value={exception.date}
        onChange={
          (newValue) => {
            setException({...exception, date: newValue});
          } 
        }
      />
    </LocalizationProvider>
  );
}

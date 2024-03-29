import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({project, setProject}) {

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
        value={project.startDate}
        onChange={
          (newValue) => {
            setProject({...project, startDate: dayjs(newValue).format('DD-M-YYYY')});
          }
        }
      />
    </LocalizationProvider>
  );
}

import React, { useState } from 'react';
import { Box } from '@mui/material';
import DaysOfWeek from '@/components/new-project/DaysOfWeek';
import WorkingHoursInput from '@/components/my-projects/WorkingHoursInput';

function WorkingDaysAndHours({ project, setProject }) {
  const { workingDays } = project;
  console.log(workingDays);
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '15px',
      }}
    >
      <Box sx={{ padding: '20px 50px' }}>
        <DaysOfWeek text='Monday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.monday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, monday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Tuesday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.tuesday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, tuesday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Wednesday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.wednesday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, wednesday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Thursday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.thursday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, thursday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Friday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.friday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, friday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Saturday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.saturday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, saturday: e.target.value } })
          }
        />
      </Box>
      <Box sx={{ padding: '20px 50px', borderLeft: '1px solid #cccccc' }}>
        <DaysOfWeek text='Sunday' />
        <WorkingHoursInput
          type='number'
          min={0}
          max={24}
          value={workingDays.sunday}
          onChange={(e) =>
            setProject({ ...project, workingDays: { ...workingDays, sunday: e.target.value } })
          }
        />
      </Box>
      {/* Repeat the same pattern for other days */}
    </Box>
  );
}

export default WorkingDaysAndHours;
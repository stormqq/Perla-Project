// import { useState } from 'react';
'use client';
import { useState } from 'react';
import LandingLogo from '@/components/landing/LandingLogo';
import UserFormControl from '@/components/my-projects/UserFormControl';
import { Box } from '@mui/material';
import PersonalProjectTitle from '@/components/new-project/PersonalProjectTitle';
import BackBtn from '@/components/new-project/BackBtn';
import StartDate from '@/components/new-project/StartDate';
import FinishDate from '@/components/new-project/FinishDate';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from '../page';
import ProjectDescriptionText from '@/components/new-project/ProjectDesciptionText';
import ProjectStatus from '@/components/my-projects/ProjectStatus';
import NameOfNewProject from '@/components/new-project/NameOfNewProject';
import ProjectCurrency from '@/components/new-project/ProjectCurrency';
import ProjStat from '@/components/new-project/ProjectStatus';
import WorkingDaysTitle from '@/components/new-project/WorkingDaysTitle';
import { BorderRight } from '@mui/icons-material';
import DaysOfWeek from '@/components/new-project/DaysOfWeek';
import WorkingHoursInput from '@/components/my-projects/WorkingHoursInput';

function NewProject() {
  const [monday, setMonday] = useState(0);
  const [Tuesday, setTuesday] = useState(0);
  const [Wednesday, setWednesday] = useState(0);
  const [Thursday, setThursday] = useState(0);
  const [Friday, setFriday] = useState(0);
  const [Saturday, setSaturday] = useState(0);
  const [Sunday, setSunday] = useState(0);

  return (
    <MuiThemeProvider theme={theme}>
      <Box
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '13px 30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <LandingLogo />
          <UserFormControl></UserFormControl>
        </Box>
        <Box sx={{ display: 'flex', gap: '325px', marginTop: '47px' }}>
          <BackBtn />
          <PersonalProjectTitle text='New personal project' />
        </Box>
        <Box
          sx={{
            backgroundColor: '#F3F3F3',
            borderRadius: '20px',
            padding: '40px',
            marginTop: '30px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px',
            }}
          >
            <Box
              component='img'
              sx={{
                height: 196,
                width: 196,
                borderRadius: '50%',
              }}
              alt='The house from the offer.'
              src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
            />
            <Box display='flex' gap={'60px'}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <ProjectDescriptionText text='Name' />
                  <NameOfNewProject placeholder='Name of the project' />
                </Box>
                <Box display={'flex'} gap={'160px'}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <ProjectDescriptionText text='Project currency' />
                    <ProjectCurrency
                      value1={'In progress'}
                      value2={'Completed'}
                    ></ProjectCurrency>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <ProjectDescriptionText text='Project status' />
                    <ProjStat value1={'UAH'} value2='EUR' value3={'USD'} />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <ProjectDescriptionText text='Start date' />
                  <StartDate />
                </Box>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                >
                  <ProjectDescriptionText text='Finish date' />
                  <FinishDate />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box marginTop={'91px'}>
            <WorkingDaysTitle
              text='Working days and hours'
              sx={{ marginBottom: '30px' }}
            />
            <Box
              sx={{
                display: 'flex',
                backgroundColor: 'white',
                borderRadius: '15px',
              }}
            >
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Monday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={monday}
                  onChange={(e) => setMonday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Tuesday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Tuesday}
                  onChange={(e) => setTuesday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Wednesday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Wednesday}
                  onChange={(e) => setWednesday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Thursday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Thursday}
                  onChange={(e) => setThursday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Friday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Friday}
                  onChange={(e) => setFriday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Saturday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Saturday}
                  onChange={(e) => setSaturday(e.target.value)}
                />
                h
              </Box>
              <Box sx={{ padding: '20px 47px' }}>
                <DaysOfWeek text='Sunday' />
                <WorkingHoursInput
                  type='number'
                  min={0}
                  max={23}
                  value={Sunday}
                  onChange={(e) => setSunday(e.target.value)}
                />
                h
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default NewProject;

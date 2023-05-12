'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LandingLogo from '@/components/landing/LandingLogo';
import MyProjectsTitle from '@/components/my-projects/MyProjects';
import Modal from '@/components/my-projects/Modal';
import UserFormControl from '@/components/my-projects/UserFormControl';
import ProjectsHeadTitle from '@/components/my-projects/ProjectsHeadTitle';
import MyProjectSearchField from '@/components/my-projects/MyProjectSearchField';
import ProjectStatus from '@/components/my-projects/ProjectStatus';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from '../page';

function MyProjects() {
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
  };
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
        <Box
          sx={{
            marginTop: '56px',
            display: 'flex',
            alignItems: 'center',
            gap: '555px',
          }}
        >
          <MyProjectsTitle></MyProjectsTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '37px' }}>
            <Modal />
            <ProjectStatus></ProjectStatus>
            <form onSubmit={handleSubmit}>
              <MyProjectSearchField
                placeholder='Search'
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
              <SearchIcon
                onClick={handleSubmit}
                sx={{
                  marginLeft: '-35px',
                  color: '#6B6B6B',
                  cursor: 'pointer',
                }}
              ></SearchIcon>
            </form>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: '25px',
            width: '1370px',
            height: '100vh',
            bgcolor: '#F3F3F3',
            borderRadius: '20px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '200px', padding: '20px 40px' }}>
            <ProjectsHeadTitle title='Name' sx={{ marginRight: '110px' }} />
            <ProjectsHeadTitle title='From' sx={{ marginRight: '-50px' }} />
            <ProjectsHeadTitle title='To' />
            <ProjectsHeadTitle title='Status' />
            <ProjectsHeadTitle title='Team lead' />
          </Box>
          <Box
            sx={{
              width: '1370px',
              border: '1px solid #BBBBBB',
            }}
          ></Box>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}

export default MyProjects;

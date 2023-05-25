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
import useSWR from 'swr'
import fetcher from '@/config/fetcher';
import ProjectsList from '@/components/my-projects/ProjectsList';
function MyProjects() {
  const { data, error, isLoading } = useSWR('/api/projects', fetcher)
  console.log(data);
  const [project, setProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(project);
  };
  return (
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
            <ProjectStatus
              value1={'All'}
              value2='In progress'
              value3={'Completed'}
            ></ProjectStatus>
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
          <Box sx={{ display: 'flex', padding: '20px 40px', justifyContent: 'space-between', borderBottom: '1px solid #A5A5A5' }}>
            <ProjectsHeadTitle title='Name' sx={{ marginRight: '110px' }} />
            <Box sx={{
              display: 'flex',
              gap: '230px',
              marginRight: '360px'
            }}>
            <ProjectsHeadTitle title='From'/>
            <ProjectsHeadTitle title='To' />
            </Box>
          </Box>
          {
            isLoading && <div>Loading...</div>
          }

          <ProjectsList projects={data?.userProjects} />
        </Box>
      </Box>
  );
}

export default MyProjects;

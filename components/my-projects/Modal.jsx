import React, { useState } from 'react';
import { Box } from '@mui/material';
import CLosePopupIcon from '../../components/landing/ClosePopupIcon';
import NewProjectsPopup from './NewProjDialog';
import { AddIcon } from './AddCircleIcon';
import PopupTitle from '../landing/LandingDialogTitle';
import CardMainTitle from './CardTitle';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Modal() {
  const router = useRouter();
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  return (
    <>
      <AddIcon onClick={handleLoginOpen} />
      <NewProjectsPopup open={loginOpen} onClose={handleLoginClose}>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <PopupTitle sx={{ margin: '50px auto' }}>
              Create new project
            </PopupTitle>
            <CLosePopupIcon onClick={handleLoginClose} />
          </Box>
          <Box
            sx={{ display: 'flex', gap: '60px', margin: '0 60px 60px 60px' }}
          >
            <Box
              sx={{
                width: '335px',
                height: '360px',
                borderRadius: '50px',
                backgroundColor: '#DFDFDF',
                cursor: 'pointer',
              }}
              onClick={() => router.push('/new-project')}
            >
              <CardMainTitle title={'Personal use'} price={'0$'} />
            </Box>
            <Box
              sx={{
                width: '335px',
                height: '360px',
                borderRadius: '50px',
                backgroundColor: '#4C5B69',
                cursor: 'pointer',
              }}
            >
              <CardMainTitle
                title={'Teamwork'}
                price={'25$'}
                cardDesctiption={'add members to the project'}
              />
            </Box>
          </Box>
        </Box>
      </NewProjectsPopup>
    </>
  );
}

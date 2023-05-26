'use client';
import React, { useState } from 'react';
import { Box, Drawer, Stack } from '@mui/material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import UserFormControl from '@/components/my-projects/UserFormControl';
import LandingLogo from '@/components/landing/LandingLogo';

export const toolsbtn = [
  {
    iconSrc: '/wbs-icon',
    altText: 'WBS Icon',
    buttonText: 'WBS',
  },
  {
    iconSrc: '/gannt-icon',
    altText: 'Gannt Icon',
    buttonText: 'Gannt',
  },
  {
    iconSrc: '/evm-icon',
    altText: 'EVM Icon',
    buttonText: 'EVM',
  },
];
export const otherbtn = [
  {
    iconSrc: '/tickets-icon',
    altText: 'Tickets Icon',
    buttonText: 'Tickets',
  },
  {
    iconSrc: '/resourses-icon',
    altText: 'Resources Icon',
    buttonText: 'Resources',
  },
  {
    iconSrc: '/reports-icon',
    altText: 'Reports Icon',
    buttonText: 'Reports',
  },
  {
    iconSrc: '/settings-icon',
    altText: 'Settings Icon',
    buttonText: 'Settings',
  },
];

export default function Layout({ children, text }) {
  const [activeButton, setActiveButton] = useState(text || 'WBS');
  return (
    <>
      <Box display={'flex'} gap='300px'>
        <Drawer
          variant='permanent'
          anchor='left'
          PaperProps={{
            sx: {
              width: '230px',
              backgroundColor: '#A3A2A2',
              color: '#F8F8FA',
              paddingLeft: '30px',
              paddingTop: '22px',
            },
          }}
        >
          <Box>
            <Stack spacing={'30px'}>
              <LandingLogo />
              <Link href={'my-projects'}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  gap='15px'
                  cursor='pointer'
                >
                  <Image
                    src='/my-project-icon.svg'
                    alt='My Project Icon'
                    width={24}
                    height={24}
                  />
                  <Typography
                    variant='h6'
                    fontFamily={'Commissioner'}
                    fontSize='18px'
                  >
                    {'My projects'}
                  </Typography>
                </Box>
              </Link>
              <Typography
                variant='h6'
                color={'#6B6B6B'}
                fontFamily={'Commissioner'}
                fontSize='16px'
              >
                {'Tools'}
              </Typography>
              <Stack
                paddingRight={'10px'}
                direction={'column'}
                spacing={'30px'}
              >
                {toolsbtn.map((button, index) => (
                  <ButtonComponent
                    key={index}
                    iconSrc={button.iconSrc}
                    altText={button.altText}
                    buttonText={button.buttonText}
                    isActive={activeButton === button.buttonText}
                    onClick={setActiveButton} // Pass setActiveButton function
                  />
                ))}
              </Stack>
              <Typography
                variant='h6'
                color={'#6B6B6B'}
                fontFamily={'Commissioner'}
                fontSize='16px'
              >
                {'Other'}
              </Typography>
              <Stack
                paddingRight={'10px'}
                direction={'column'}
                spacing={'30px'}
              >
                {otherbtn.map((button, index) => (
                  <ButtonComponent
                    key={index}
                    iconSrc={button.iconSrc}
                    altText={button.altText}
                    buttonText={button.buttonText}
                    isActive={activeButton === button.buttonText}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Drawer>
        <Box
          sx={{
            width: '425px',
            padding: '12px 26px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <img
            src='https://cdn.pixabay.com/photo/2017/04/05/01/15/ocean-2203720_1280.jpg'
            alt='Domenic Ventris'
            width={28}
            height={28}
            style={{
              borderRadius: '50%',
              boxShadow: '0px 4px 8px rgba(209, 209, 209, 0.15)',
            }}
          />
          <Typography variant='h5' fontFamily={'Commissioner'}>
            {'Marketing'}
          </Typography>
        </Box>
        <Box marginLeft='200px'>
          <UserFormControl />
        </Box>
      </Box>
      <Box marginLeft={100}>{children}</Box>
    </>
  );
}
export const ButtonComponent = ({
  iconSrc,
  altText,
  buttonText,
  isActive,
  onClick,
}) => {
  const activeIconSrc = isActive ? `${iconSrc}-active.svg` : `${iconSrc}.svg`;

  return (
    <Link href={`project-view/${buttonText.toLowerCase()}`}>
      <Box
        display={'flex'}
        alignItems={'center'}
        gap='15px'
        sx={{
          cursor: 'pointer',
          backgroundColor: isActive ? 'white' : 'transparent',
          transition: 'background-color 0.3s ease',
          borderRadius: '20px',
          padding: '12px 15px',
        }}
        onClick={() => onClick(buttonText)} // Add onClick event handler
      >
        <Image src={activeIconSrc} alt={altText} width={24} height={24} />
        <Typography
          color={isActive ? '#303030' : '#F8F8FA'}
          variant='h5'
          fontFamily={'Commissioner'}
          fontSize='18px'
        >
          {buttonText}
        </Typography>
      </Box>
    </Link>
  );
};

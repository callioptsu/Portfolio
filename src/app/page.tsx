'use client'
import React from 'react'

// Material UI
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';

// React Icons
import { FaReact, FaDocker, FaJava } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

// Components
import HeaderComponent from '@/components/@custom-header/HeaderComponent';

// Style
import './page.css'

export default function Home() {
  const stackIcons: { [key: string]: React.JSX.Element } = {
    react: <FaReact />,
    'next.js': <RiNextjsFill />,
    typescript: <SiTypescript />,
    devops: <FaDocker />,
    java: <FaJava />,
  }

  const renderStacks = (value: string, idx: number) => {
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1)

    return (
      <List
        key={value}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '6px',
          padding: '4px 8px 4px 8px',
          borderRadius: '20px',
          border: '1px solid rgb(40, 40, 43)',
          opacity: '0',
          animation: `fadeIn 1s ease-in-out ${idx * 0.5}s forwards`,
          color: 'rgb(40, 40, 43)',
          transition: 'border 0.2s ease-out',
          '&:hover': {
            border: '1px solid blue',
          },
        }}
      >
        {stackIcons[value]}
        <Typography
          sx={{
            margin: '4px',
          }}
          variant="subtitle2"
          fontFamily="Poppins"
          fontWeight="500"
        >
          {capitalizedValue}
        </Typography>
      </List>
    )
  }

  return (
    <>
      <Box sx={{ height: '7.5vh' }} />
      <HeaderComponent />
      <Box
        sx={{
          position: 'fixed',
          backgroundColor: 'black',
          bottom: '40vh',
          right: '160vh',
          width: '80vh',
          height: '80vh',
          borderRadius: '50%',
          filter: 'blur(0px)',
          animation: 'circleAnimation 15s ease-in-out infinite',
          opacity: '0.2',
        }}
      />
      <Box
        sx={{
          position: 'fixed',
          backgroundColor: 'black',
          top: '65vh',
          left: '180vh',
          width: '50vh',
          height: '50vh',
          borderRadius: '50%',
          filter: 'blur(0px)',
          opacity: '0.2',
        }}
      />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 64px)',
          justifyContent: 'center',
        }}
      >
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            fontFamily="Poppins"
            fontWeight="bold"
            sx={{
              opacity: '0',
              animation: 'fadeIn 1s ease-out forwards',
              textShadow: `
                2px 0 0 rgb(40, 40, 43, 0.4)
              `,
              color: 'rgb(40, 40, 43)',
            }}
          >
            ANTONIO SANTANA
          </Typography>
          <Typography
            variant="h4"
            fontFamily="Poppins"
            fontWeight="bold"
            sx={{
              opacity: '0',
              animation: 'fadeIn 1s ease-out forwards',
              textShadow: ` 
                2px 0 0 rgb(40, 40, 43, 0.4)
              `,
              color: 'rgb(40, 40, 43)',
            }}
          >
            SOFTWARE ENGINEER {'</>'}
          </Typography>
        </Box>
        <Box
          component="section"
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {['react', 'next.js', 'typescript', 'devops', 'java'].map(
            (value, idx) => {
              return renderStacks(value, idx)
            },
          )}
        </Box>
      </Box>
    </>
  )
}

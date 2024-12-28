'use client'
import React from 'react'

// Material UI
import { Box, List, Typography } from '@mui/material'

// React Icons
import { FaReact, FaDocker, FaJava } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

// Components
import { HeaderComponent } from '@/components'

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
          border: '1px solid black',
          opacity: '0',
          animation: `fadeIn 1s ease-in-out ${idx * 0.5}s forwards`,
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
      <HeaderComponent />
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
              backgroundImage:
                'linear-gradient(to right, rgb(0, 0, 0), #4B0082)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              opacity: '0',
              animation: 'fadeIn 1s ease-out forwards',
            }}
          >
            ANTONIO SANTANA
          </Typography>
          <Typography
            variant="h4"
            fontFamily="Poppins"
            fontWeight="bold"
            sx={{
              backgroundImage:
                'linear-gradient(to right, rgb(0, 0, 0), #4B0082)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              opacity: '0',
              animation: 'fadeIn 1s ease-out forwards',
            }}
          >
            SOFTWARE DEVELOPER
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

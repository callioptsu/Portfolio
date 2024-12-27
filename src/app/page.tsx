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

export default function Home() {
  const stackIcons: { [key: string]: React.JSX.Element } = {
    react: <FaReact />,
    'next.js': <RiNextjsFill />,
    typescript: <SiTypescript />,
    devops: <FaDocker />,
    java: <FaJava />,
  }

  const renderStacks = (value: string) => {
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
        }}
      >
        {stackIcons[value]}
        <Typography
          sx={{ margin: '5px' }}
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
          border: '2px solid red',
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
          <Typography variant="h3" fontFamily="Poppins" fontWeight="bold">
            ANTONIO SANTANA
          </Typography>
          <Typography variant="h4" fontFamily="Poppins" fontWeight="bold">
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
          {['react', 'next.js', 'typescript', 'devops', 'java'].map((value) => {
            return renderStacks(value)
          })}
        </Box>
      </Box>
    </>
  )
}

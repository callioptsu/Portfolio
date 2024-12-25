'use client'
import React from 'react'

// Material UI
import { Box, List } from '@mui/material'

// React Icons
import { FaReact, FaDocker, FaJava } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiTypescript } from 'react-icons/si'

// Components
import { HeaderComponent, TypographyComponent } from '@/components'

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
      <List key={value}>
        {stackIcons[value]}
        <TypographyComponent
          component="h3"
          fontFamily="Poppins"
          text={capitalizedValue}
        />
      </List>
    )
  }

  return (
    <>
      <HeaderComponent />
      <Box component="main">
        <Box component="section">
          <TypographyComponent
            component="h1"
            fontFamily="Poppins"
            text="ANTONIO SANTANA"
          />
          <TypographyComponent
            component="h2"
            fontFamily="Poppins"
            text="SOFTWARE DEVELOPER"
          />
        </Box>
        <Box component="section">
          {['react', 'next.js', 'typescript', 'devops', 'java'].map((value) => {
            return renderStacks(value)
          })}
        </Box>
      </Box>
    </>
  )
}

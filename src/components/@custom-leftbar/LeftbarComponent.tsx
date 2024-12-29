import React, { Dispatch } from 'react'

// Material UI
import { Divider, Drawer, List, ListItem } from '@mui/material'

// React Icons
import { SiGmail } from 'react-icons/si'
import { FaFolderTree } from 'react-icons/fa6'
import { BsPersonWorkspace } from 'react-icons/bs'

// Custom
import LinkComponent from '../@custom-links/LinkComponent'

// Style
import './LeftbarComponent.css'

interface LeftbarComponentProps {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function LeftbarComponent({
  isOpen,
  setIsOpen,
}: LeftbarComponentProps) {
  const renderIcons = (value: string) => {
    if (value === 'sobre mim') {
      return <BsPersonWorkspace color="white" />
    } else if (value === 'projetos') {
      return <FaFolderTree color="white" />
    } else if (value === 'contatos') {
      return <SiGmail color="white" />
    }
  }

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: 'rgb(27, 18, 18)',
        },
      }}
    >
      <List>
        {['sobre mim', 'projetos', 'contatos'].map(
          (value: string, idx: number) => {
            return (
              <ListItem
                key={idx}
                sx={{
                  marginBottom: '10px',
                  marginTop: '10px',
                  ':hover': {
                    animation: 'scalingIn 0.2s ease-in forwards',
                  },
                  ':not(:hover)': {
                    animation: 'scalingOut 0.2s forwards',
                  },
                }}
              >
                {renderIcons(value)}
                <LinkComponent
                  url={value.replace(' ', '-')}
                  fontFamily="Poppins"
                  text={value.slice(0, 1).toUpperCase() + value.slice(1)}
                />
              </ListItem>
            )
          },
        )}
        <Divider />
      </List>
    </Drawer>
  )
}

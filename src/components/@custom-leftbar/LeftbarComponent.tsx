import React, { Dispatch } from 'react'

// Material UI
import { Divider, Drawer, Link, List, ListItem } from '@mui/material'

// React Icons
import { SiGmail } from 'react-icons/si'
import { FaFolderTree } from 'react-icons/fa6'
import { BsPersonWorkspace } from 'react-icons/bs'

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
      return <BsPersonWorkspace color="white" style={{ marginRight: '10px' }} />
    } else if (value === 'projetos') {
      return <FaFolderTree color="white" style={{ marginRight: '10px' }} />
    } else if (value === 'contatos') {
      return <SiGmail color="white" style={{ marginRight: '10px' }} />
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
                    animation: 'hoverIn 0.2s ease-in forwards',
                  },
                  ':not(:hover)': {
                    animation: 'hoverOut 0.2s forwards',
                  },
                }}
              >
                <Link
                  href={value.replace(' ', '-')}
                  fontFamily="Poppins"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white',
                    margin: '10px',
                    textDecoration: 'none',
                    cursor: 'default',
                  }}
                >
                  {renderIcons(value)}
                  {value.slice(0, 1).toUpperCase() + value.slice(1)}
                </Link>
              </ListItem>
            )
          },
        )}
        <Divider />
      </List>
    </Drawer>
  )
}

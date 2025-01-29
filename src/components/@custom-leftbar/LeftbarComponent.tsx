import React, { Dispatch } from 'react'

// Material UI
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

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
  const navIcons: { [key: string]: React.JSX.Element } = {
    'sobre mim': (
      <BsPersonWorkspace color="white" style={{ marginRight: '10px' }} />
    ),
    projetos: <FaFolderTree color="white" style={{ marginRight: '10px' }} />,
    contatos: <SiGmail color="white" style={{ marginRight: '10px' }} />,
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
              <Link
                key={idx}
                href={value.replace(' ', '-')}
                fontFamily="Poppins"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: 'white',
                  margin: '10px',
                  textDecoration: 'none',
                  cursor: 'default',
                  marginBottom: '10px',
                  marginTop: '10px',
                }}
              >
                <ListItem
                  sx={{
                    padding: '20px',
                    ':hover': {
                      animation: 'hoverIn 0.2s ease-in forwards',
                    },
                    ':not(:hover)': {
                      animation: 'hoverOut 0.2s forwards',
                    },
                  }}
                >
                  {navIcons[value]}
                  {value.slice(0, 1).toUpperCase() + value.slice(1)}
                </ListItem>
              </Link>
            )
          },
        )}
        <Divider />
      </List>
    </Drawer>
  )
}

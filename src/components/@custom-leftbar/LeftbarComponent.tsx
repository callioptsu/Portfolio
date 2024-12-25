import React, { Dispatch } from 'react'

// Material UI
import { Drawer, List, ListItem } from '@mui/material'
import { Contacts, Folder, Person } from '@mui/icons-material'

// Custom
import LinkComponent from '../@custom-links/LinkComponent'

interface LeftbarComponentProps {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export default function LeftbarComponent({
  isOpen,
  setIsOpen,
}: LeftbarComponentProps) {
  const renderIcons = (value: string) => {
    if (value === 'sobre-mim') {
      return <Person sx={{ color: 'purple' }} />
    } else if (value === 'projetos') {
      return <Folder sx={{ color: 'purple' }} />
    } else if (value === 'contatos') {
      return <Contacts sx={{ color: 'purple' }} />
    }
  }

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      <List>
        {['sobre-mim', 'projetos', 'contatos'].map(
          (value: string, idx: number) => {
            return (
              <ListItem key={idx}>
                {renderIcons(value)}
                <LinkComponent
                  url={value}
                  fontFamily="Poppins"
                  text={value.slice(0, 1).toUpperCase() + value.slice(1)}
                />
              </ListItem>
            )
          },
        )}
      </List>
    </Drawer>
  )
}

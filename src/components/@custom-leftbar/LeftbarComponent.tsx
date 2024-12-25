import React, { Dispatch } from 'react'

// Material UI
import { Drawer, List, ListItem } from '@mui/material'

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
  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
      <List>
        {['Projetos', 'Sobre-mim', 'Contatos'].map((values, idx) => {
          return (
            <ListItem key={idx}>
              <LinkComponent
                url={values.toLowerCase()}
                fontFamily="Poppins"
                text={values}
              />
            </ListItem>
          )
        })}
      </List>
    </Drawer>
  )
}

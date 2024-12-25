// Material Ui
import { Link } from '@mui/material'

interface LinkComponentProps {
  url: string
  fontFamily: string
  text: string
}

export default function LinkComponent({
  url,
  fontFamily,
  text,
}: LinkComponentProps) {
  return (
    <Link
      href={url}
      fontFamily={fontFamily}
      sx={{
        color: 'blue',
        margin: '10px',
        textDecoration: 'none',
      }}
    >
      {text}
    </Link>
  )
}

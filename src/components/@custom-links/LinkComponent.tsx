// Material Ui
import { Link } from '@mui/material'

interface ILinkComponent {
  url: string
  fontFamily: string
  text: string
}

export default function LinkComponent({
  url,
  fontFamily,
  text,
}: ILinkComponent) {
  return (
    <Link
      href={url}
      fontFamily={fontFamily}
      sx={{
        color: 'white',
        margin: '10px',
        ':hover': {
          textDecoration: 'none',
        },
      }}
    >
      {text}
    </Link>
  )
}

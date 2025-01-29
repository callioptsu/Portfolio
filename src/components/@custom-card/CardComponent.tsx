// Interfaces
import { IProject } from '@/interfaces'

// MUI UI
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

// MUI UI Icons
import GitHubIcon from '@mui/icons-material/GitHub'

// Helpers
import { dateTimeFormat } from '@/utils/helpers'

// Dotenv
import dotenv from 'dotenv'

dotenv.config()

const GITHUB_USER = process.env.GITHUB_USER

interface Props {
  repo: IProject
}

export default function CardComponent({ repo }: Props) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        minWidth: '380px',
        maxWidth: '380px',
        minHeight: '450px',
        maxHeight: '450px',
        transition: 'transform 0.2s ease',
        ':hover': {
          transform: 'scale(1.01)',
        },
      }}
    >
      <CardHeader
        sx={{
          '.css-16xl4zq-MuiTypography-root': {
            fontFamily: 'Poppins',
            fontSize: '1rem',
            fontWeight: 'bold',
          },
        }}
        title={repo.name.replace(/-/g, ' ').toUpperCase()}
      />

      <CardContent
        sx={{
          padding: '0 0 0 16px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '0.85rem' }}>
          Contribuidores:
        </Typography>
        {repo.contributorsAvatars.map((url, idx) => {
          return (
            <CardMedia
              key={idx}
              component="img"
              height={50}
              width={50}
              image={url}
              alt={repo.name}
              sx={{
                width: '10%',
                height: 'auto',
                borderRadius: '16px',
                objectFit: 'contain',
                marginLeft: '10px',
              }}
            />
          )
        })}
      </CardContent>

      <CardMedia
        component="img"
        height="200"
        image={repo.image || '/img/placeholder.png'}
        alt={repo.name}
        sx={{ objectFit: 'cover' }}
      />

      <CardContent sx={{ maxHeight: '0px' }}>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '.85rem',
            color: 'text.secondary',
          }}
        >
          {repo.description ? repo.description : 'Sem descrição...'}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '95%',
          marginTop: '40px',
        }}
      >
        <Link
          href={`https://github.com/${GITHUB_USER}/${repo.name}`}
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            textDecoration: 'none',
            fontSize: '.90rem',
            ':hover': { cursor: 'pointer', color: 'primary.main' },
          }}
          rel="noreferrer"
        >
          <GitHubIcon sx={{ marginRight: 1 }} />
          Ver mais
        </Link>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: '.75rem',
            color: 'text.secondary',
          }}
        >
          Ultima atualização: {dateTimeFormat(repo.updated_at)}
        </Typography>
      </CardActions>
    </Card>
  )
}

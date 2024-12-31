import Image from 'next/image'

// Material UI
import { Box, Divider, Link, Typography } from '@mui/material'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'

// React Icons
import { IoMdDownload } from 'react-icons/io'

// Custom
import { HeaderComponent } from '@/components'

export default function AboutMe() {
  return (
    <>
      <Box sx={{ height: '8vh' }} />
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="section">
          <Image
            src="/img/photo.jpg"
            alt="antonio santana"
            width={200}
            height={200}
            style={{
              borderRadius: '100%',
              border: '2px solid rgb(0, 0, 0, 0.5)',
              margin: '8vh',
            }}
            priority
          />
        </Box>
        <Box component="section">
          <Link
            href="/antonio-santana-cv.pdf"
            target="_blank"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50px',
              color: 'rgb(40, 40, 43)',
              backgroundColor: 'rgb(27, 18, 18, 0.2)',
              fontWeight: 'bold',
              marginBottom: '20px',
              border: '1px solid rgb(40, 40, 43)',
              transition: 'background-color 0.2s ease-in',
              '&:hover': {
                backgroundColor: 'rgb(27, 18, 18, 0.25)',
              },
            }}
            download
          >
            <IoMdDownload style={{ margin: '4px' }} />
            BAIXAR CV
          </Link>
        </Box>
        <Box
          component="section"
          sx={{
            width: '60%',
          }}
        >
          <Typography
            fontFamily="Montserrat"
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              textAlign: 'justify',
              color: 'rgb(40, 40, 43)',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Desde os 16 anos apaixonado por tecnologia. Ao longo dos anos me
            dediquei a expandir meus conhecimentos em busca de novas
            oportunidades que me permitissem crescer profissionalmente. Tenho
            experiência em desenvolvimento front-end com React, bem como em
            back-end com Node.js e Java. Meu foco é o aprendizado contínuo que
            me fará contribuir em inúmeros projetos inovadores.
          </Typography>
        </Box>
        <Box
          component="section"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            margin: '10vh 0 10vh 0',
          }}
        >
          <Box component="section" sx={{ width: '30%' }}>
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.wyden.com.br/unidades/unifacid"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">
                      Faculdade UniFacid Wyden
                    </Typography>
                  </Link>
                  <Typography variant="caption">2024 (3° Período)</Typography>
                  <Link href="" target="_blank" rel="noreferrer">
                    <Typography variant="caption">
                      Análise e Desenvolvimento de Sistemas
                    </Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Timeline position="left">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.cre8language.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">Cre8 Language</Typography>
                  </Link>
                  <Typography variant="caption">2024 (Em andamento)</Typography>
                  <Link href="" target="_blank" rel="noreferrer">
                    <Typography variant="caption">Inglês A2</Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.betrybe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">Trybe</Typography>
                  </Link>
                  <Typography variant="caption">2023 (115 horas)</Typography>
                  <Link
                    href="https://www.credential.net/dfef7fa4-706f-4be1-a218-e92997eed83b"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">Aceleração Java</Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Timeline position="left">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.dio.me/en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">DIO</Typography>
                  </Link>
                  <Typography variant="caption">2023 (115 horas)</Typography>
                  <Link
                    href="https://www.dio.me/certificate/0C110A01/share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">Java + Angular</Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.betrybe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">Trybe</Typography>
                  </Link>
                  <Typography variant="caption">2023 (1500 horas)</Typography>
                  <Link
                    href="https://www.credential.net/0ae6637f-e78e-4494-b43d-8390ceccedfd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">
                      Desenvolvimento Web
                    </Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
          <Box component="section" sx={{ width: '40%' }}>
            <Timeline position="right">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                </TimelineSeparator>
                <TimelineContent
                  sx={{ display: 'flex', flexDirection: 'column' }}
                >
                  <Link
                    href="https://www.betrybe.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">
                      Armazém Paraíba LTDA
                    </Typography>
                  </Link>
                  <Typography variant="caption">(Dezembro - 2025)</Typography>
                  <Link
                    href="https://www.credential.net/0ae6637f-e78e-4494-b43d-8390ceccedfd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption">
                      Estágio em Desenvolvimento de Sistemas
                    </Typography>
                  </Link>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Box>
    </>
  )
}

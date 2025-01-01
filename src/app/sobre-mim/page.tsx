'use client'

import Image from 'next/image'

// Material UI
import { Box, keyframes, Link, Typography } from '@mui/material'

// React Icons
import { IoMdDownload } from 'react-icons/io'

// Custom
import { HeaderComponent, TimelineComponent } from '@/components'

// Data
import { data } from './data'

const animationDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`

export default function AboutMe() {
  const { courses } = data

  return (
    <>
      <Box sx={{ height: '7.5vh' }} />
      <HeaderComponent />
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="section"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Image
            src="/img/photo.jpg"
            alt="antonio santana"
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              border: '1px solid rgb(0, 0, 0, 0.5)',
              margin: '8vh',
            }}
            priority
          />
        </Box>
        <Box
          component="section"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
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
              fontWeight: 'bold',
              marginBottom: '20px',
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
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '2.5vh',
            backgroundColor: 'rgb(27, 18, 18)',
          }}
        >
          <Box
            sx={{
              position: 'fixed',
              animation: `${animationDown} 1s ease-in-out infinite`,
              fontSize: '30px',
              transform: 'rotate(90deg)',
              backgroundColor: 'rgb(100, 149, 237, 0.4)',
              color: 'rgb(27, 18, 18)',
              bottom: '10%',
              border: '2px solid rgb(27, 18, 18)',
              borderRadius: '50px',
              zIndex: '1',
            }}
          >
            &#8595;
          </Box>
          <Typography
            fontFamily="Montserrat"
            variant="subtitle1"
            sx={{
              fontWeight: '600',
              textAlign: 'center',
              padding: '25px',
              borderRadius: '5px',
              width: '60%',
              color: 'rgb(237,229, 222)',
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
          <Box component="section" sx={{ width: '50%' }}>
            {courses.map(
              ({
                id,
                isFinished,
                courseUrl,
                institution,
                name,
                finishedDate,
                certificateUrl,
              }) => {
                const position: 'left' | 'right' =
                  id % 2 === 0 ? 'right' : 'left'

                return (
                  <TimelineComponent
                    key={id}
                    position={position}
                    isFinished={isFinished}
                    courseUrl={courseUrl}
                    institution={institution}
                    name={name}
                    finishedDate={finishedDate}
                    certificateUrl={certificateUrl}
                  />
                )
              },
            )}
          </Box>
          {/** <Box component="section" sx={{ width: '40%' }}>
            {courses.map(
              ({
                id,
                isFinished,
                courseUrl,
                institution,
                name,
                finishedDate,
                certificateUrl,
              }) => {
                const position: 'left' | 'right' =
                  id % 2 === 0 ? 'right' : 'left'

                return (
                  <TimelineComponent
                    key={id}
                    position={position}
                    isFinished={isFinished}
                    courseUrl={courseUrl}
                    institution={institution}
                    name={name}
                    finishedDate={finishedDate}
                    certificateUrl={certificateUrl}
                  />
                )
              },
            )}
          </Box>**/}
        </Box>
      </Box>
    </>
  )
}

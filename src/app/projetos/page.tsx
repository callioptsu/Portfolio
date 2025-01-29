/* eslint-disable @stylistic/multiline-ternary */
'use client'
import { useEffect } from 'react'

// Hooks
import useProjectsState from './hooks/useProjectsState'

// Material UI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'

// Components
import HeaderComponent from '@/components/@custom-header/HeaderComponent'
import CardComponent from '@/components/@custom-card/CardComponent'

// Interfaces
import { IProject } from '@/interfaces'

export default function Projects() {
  const { dataSet, isLoading, fetchRepositories } = useProjectsState()

  useEffect(() => {
    fetchRepositories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderCardComponent = (repo: IProject) => {
    return (
      <Grid key={repo.id}>
        <CardComponent repo={repo} />
      </Grid>
    )
  }

  return (
    <>
      <Box sx={{ height: '10vh' }} />
      <HeaderComponent />
      <Box component="main">
        {!isLoading ? (
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ justifyContent: 'center', margin: '50px' }}
          >
            {dataSet.length >= 0 ? (
              dataSet.map((repo) => renderCardComponent(repo))
            ) : (
              <Typography>Nenhum projeto encontrado</Typography>
            )}
          </Grid>
        ) : (
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ justifyContent: 'center', margin: '50px' }}
          >
            {Array.from(new Array(6)).map((_, idx) => {
              return (
                <Skeleton
                  key={idx}
                  variant="rectangular"
                  width={380}
                  height={450}
                  sx={{
                    borderRadius: '4px',
                  }}
                />
              )
            })}
          </Grid>
        )}
      </Box>
    </>
  )
}

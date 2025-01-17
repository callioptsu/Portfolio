'use client'
import { useEffect } from 'react'

// Actions
import getGithubProjects from './actions/getGithubProjects'

// Hooks
import useProjectsState from './hooks/useProjectsState'

// Material UI
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'

// Components
import HeaderComponent from '@/components/@custom-header/HeaderComponent'
import CardComponent from '@/components/@custom-card/CardComponent'
import Skeleton from '@mui/material/Skeleton'

export default function Projects() {
  const { dataSet, setDataSet, isLoading, setIsLoading } = useProjectsState()

  const fetchRepositories = async () => {
    const { data } = await getGithubProjects()

    setDataSet(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchRepositories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            {dataSet.map((repo, idx) => (
              <Grid key={repo.id}>
                <CardComponent repo={repo} />
              </Grid>
            ))}
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

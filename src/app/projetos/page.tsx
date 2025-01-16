'use client'
import { useEffect } from 'react'

// Actions
import getGithubProjects from './actions/getGithubProjects'

// Hooks
import useProjectsState from './hooks/useProjectsState'

// Material UI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Components
import HeaderComponent from '@/components/@custom-header/HeaderComponent'

export default function Projects() {
  const { dataSet, setDataSet } = useProjectsState()

  const fetchRepositories = async () => {
    const { data } = await getGithubProjects()

    setDataSet(data)
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
        {dataSet.map((repo) => (
          <Typography key={repo.id}>{repo.name}</Typography>
        ))}
      </Box>
    </>
  )
}

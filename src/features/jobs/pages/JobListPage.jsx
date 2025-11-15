import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'
import JobList from '../components/JobList'
import { useJobs } from '../hooks/useJobs'

function JobListPage() {
  const navigate = useNavigate()
  const { jobsQuery } = useJobs()

  const jobs = jobsQuery.data || [
    // Demo data
    { id: '1', name: 'Sync user data', type: 'CRON', schedule: '*/5 * * * *', status: 'RUNNING' },
    { id: '2', name: 'Recalculate credit limit', type: 'ON_DEMAND', schedule: '-', status: 'IDLE' }
  ]

  const handleRowClick = (job) => {
    navigate(`/jobs/${job.id}`)
  }

  const handleCreateClick = () => {
    navigate('/jobs/create')
  }

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h5">Jobs</Typography>
        <Button variant="contained" onClick={handleCreateClick}>
          Create job
        </Button>
      </Stack>
      <JobList jobs={jobs} onRowClick={handleRowClick} />
    </Box>
  )
}

export default JobListPage

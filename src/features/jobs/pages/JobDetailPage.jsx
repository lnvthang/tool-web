import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Button, Stack } from '@mui/material'
import JobDetailView from '../components/JobDetailView'
import { useJob } from '../hooks/useJobs'

function JobDetailPage() {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const { data: jobFromApi } = useJob(jobId)

  const job = jobFromApi || {
    id: jobId,
    name: 'Demo job',
    type: 'CRON',
    schedule: '*/5 * * * *',
    status: 'RUNNING',
    payloadRepo: 'https://github.com/your-org/job-repo'
  }

  const handleEdit = () => {
    navigate(`/jobs/${jobId}/edit`)
  }

  return (
    <Box>
      <Stack direction="row" justifyContent="flex-end" sx={{ mb: 2 }}>
        <Button variant="outlined" onClick={handleEdit}>
          Edit
        </Button>
      </Stack>
      <JobDetailView job={job} />
    </Box>
  )
}

export default JobDetailPage

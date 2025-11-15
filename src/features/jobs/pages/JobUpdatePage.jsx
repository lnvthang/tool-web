import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import JobForm from '../components/JobForm'
import { useJob, useJobs } from '../hooks/useJobs'

function JobUpdatePage() {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const { data: jobFromApi } = useJob(jobId)
  const { updateJobMutation } = useJobs()

  const initialValue =
    jobFromApi || {
      id: jobId,
      name: 'Demo job',
      type: 'CRON',
      schedule: '*/5 * * * *',
      payloadRepo: 'https://github.com/your-org/job-repo'
    }

  const handleSubmit = async (form) => {
    try {
      await updateJobMutation.mutateAsync({ id: jobId, payload: form })
      navigate('/jobs')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Update job failed', error)
    }
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Edit job
      </Typography>
      <JobForm initialValue={initialValue} onSubmit={handleSubmit} isSubmitting={updateJobMutation.isPending} />
    </Box>
  )
}

export default JobUpdatePage

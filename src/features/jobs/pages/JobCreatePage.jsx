import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import JobForm from '../components/JobForm'
import { useJobs } from '../hooks/useJobs'

function JobCreatePage() {
  const navigate = useNavigate()
  const { createJobMutation } = useJobs()

  const handleSubmit = async (form) => {
    try {
      await createJobMutation.mutateAsync(form)
      navigate('/jobs')
    } catch (error) {
      console.error('Create job failed', error)
    }
  }

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Create job
      </Typography>
      <JobForm onSubmit={handleSubmit} isSubmitting={createJobMutation.isPending} />
    </Box>
  )
}

export default JobCreatePage

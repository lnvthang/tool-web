import React from 'react'
import { Paper, Typography, Stack, Chip } from '@mui/material'

function JobDetailView({ job }) {
  if (!job) return null

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {job.name}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={job.type} size="small" />
        <Chip label={job.status} size="small" />
      </Stack>
      <Typography variant="body2" color="text.secondary">
        Schedule: {job.schedule || 'N/A'}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Payload repo: {job.payloadRepo || 'N/A'}
      </Typography>
    </Paper>
  )
}

export default JobDetailView

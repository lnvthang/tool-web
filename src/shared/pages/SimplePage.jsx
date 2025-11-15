import React from 'react'
import { Typography, Paper } from '@mui/material'

function SimplePage({ title }) {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        This is a placeholder page. Replace this content with your actual implementation.
      </Typography>
    </Paper>
  )
}

export default SimplePage

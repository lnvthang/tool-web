import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'

function DashboardPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Jobs summary</Typography>
          <Typography variant="body2" color="text.secondary">
            Quick overview of total jobs, running jobs, and failed jobs.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">System health</Typography>
          <Typography variant="body2" color="text.secondary">
            Show worker node status and queue metrics here.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6">Recent activity</Typography>
          <Typography variant="body2" color="text.secondary">
            Display recent job executions, alerts or configuration changes.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default DashboardPage

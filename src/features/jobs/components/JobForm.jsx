import React from 'react'
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Stack
} from '@mui/material'

const DEFAULT_FORM = {
  name: '',
  type: 'CRON',
  schedule: '',
  payloadRepo: '',
  isActive: true
}

function JobForm({ initialValue = DEFAULT_FORM, onSubmit, isSubmitting }) {
  const [form, setForm] = React.useState(initialValue)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit?.(form)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>
      <Stack spacing={2}>
        <TextField
          label="Job name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          select
          label="Type"
          name="type"
          value={form.type}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="CRON">CRON</MenuItem>
          <MenuItem value="INTERVAL">INTERVAL</MenuItem>
          <MenuItem value="ON_DEMAND">ON_DEMAND</MenuItem>
        </TextField>
        <TextField
          label="Schedule (cron / ms)"
          name="schedule"
          value={form.schedule}
          onChange={handleChange}
          fullWidth
          helperText="e.g. */5 * * * * for every 5 minutes"
        />
        <TextField
          label="Job payload repo URL"
          name="payloadRepo"
          value={form.payloadRepo}
          onChange={handleChange}
          fullWidth
          helperText="Repo that contains the actual job implementation"
        />
        <Box>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            Save
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default JobForm

import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from '@mui/material'

function JobList({ jobs = [], onRowClick }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Schedule</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <TableRow
              key={job.id}
              hover
              sx={{ cursor: 'pointer' }}
              onClick={() => onRowClick?.(job)}
            >
              <TableCell>{job.name}</TableCell>
              <TableCell>{job.type}</TableCell>
              <TableCell>{job.schedule}</TableCell>
              <TableCell>
                <Chip
                  size="small"
                  label={job.status}
                  color={
                    job.status === 'RUNNING'
                      ? 'primary'
                      : job.status === 'FAILED'
                        ? 'error'
                        : 'default'
                  }
                />
              </TableCell>
            </TableRow>
          ))}
          {jobs.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No jobs yet. Create your first job.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default JobList

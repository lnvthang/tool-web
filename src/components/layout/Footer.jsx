import React from 'react'
import { Box, Typography } from '@mui/material'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper'
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Job Runner Console 
        <br/> Version: v1.0.0
      </Typography>
    </Box>
  )
}

export default Footer

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Toolbar, Container } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const drawerWidth = 260

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          minHeight: '100vh',
          ml: isSidebarOpen ? `${drawerWidth}px` : 0,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen
            }),
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ py: 3, flexGrow: 1 }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </Box>
  )
}

export default Layout

import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import DashboardPage from '../features/dashboard/pages/DashboardPage'
import JobListPage from '../features/jobs/pages/JobListPage'
import JobDetailPage from '../features/jobs/pages/JobDetailPage'
import JobCreatePage from '../features/jobs/pages/JobCreatePage'
import JobUpdatePage from '../features/jobs/pages/JobUpdatePage'
import SimplePage from '../shared/pages/SimplePage'

export function AppRoutes() {
  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <DashboardPage /> },
        { path: 'jobs', element: <JobListPage /> },
        { path: 'jobs/create', element: <JobCreatePage /> },
        { path: 'jobs/:jobId', element: <JobDetailPage /> },
        { path: 'jobs/:jobId/edit', element: <JobUpdatePage /> },

        // System group
        { path: 'system/overview', element: <SimplePage title="System Overview" /> },
        { path: 'system/nodes', element: <SimplePage title="Worker Nodes" /> },
        { path: 'system/queues', element: <SimplePage title="Message Queues" /> },
        { path: 'system/logs', element: <SimplePage title="System Logs" /> },
        { path: 'system/alerts', element: <SimplePage title="Alerts" /> },

        // Admin group
        { path: 'admin/users', element: <SimplePage title="User Management" /> },
        { path: 'admin/roles', element: <SimplePage title="Role Management" /> },
        { path: 'admin/apikeys', element: <SimplePage title="API Keys" /> },
        { path: 'admin/audit', element: <SimplePage title="Audit Logs" /> },
        { path: 'admin/config', element: <SimplePage title="Configuration" /> }
      ],
    },
  ])

  return element
}

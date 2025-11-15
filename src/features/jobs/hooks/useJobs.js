import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { jobApi } from '../api/jobApi'

export function useJobs() {
  const queryClient = useQueryClient()

  const jobsQuery = useQuery({
    queryKey: ['jobs'],
    queryFn: jobApi.getJobs
  })

  const createJobMutation = useMutation({
    mutationFn: jobApi.createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    }
  })

  const updateJobMutation = useMutation({
    mutationFn: ({ id, payload }) => jobApi.updateJob(id, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    }
  })

  return {
    jobsQuery,
    createJobMutation,
    updateJobMutation
  }
}

export function useJob(jobId) {
  return useQuery({
    queryKey: ['jobs', jobId],
    queryFn: () => jobApi.getJobById(jobId),
    enabled: !!jobId
  })
}

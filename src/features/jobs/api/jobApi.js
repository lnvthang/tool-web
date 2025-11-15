import axiosClient from '../../../config/axiosClient'

export const jobApi = {
  getJobs: async () => {
    const response = await axiosClient.get('/jobs')
    return response.data
  },

  getJobById: async (id) => {
    const response = await axiosClient.get(`/jobs/${id}`)
    return response.data
  },

  createJob: async (payload) => {
    const response = await axiosClient.post('/jobs', payload)
    return response.data
  },

  updateJob: async (id, payload) => {
    const response = await axiosClient.put(`/jobs/${id}`, payload)
    return response.data
  }
}

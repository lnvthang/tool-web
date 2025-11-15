import axios from 'axios'
import { ENV } from './env'

const axiosClient = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient

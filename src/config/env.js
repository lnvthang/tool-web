const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost'
const API_PORT = import.meta.env.VITE_API_PORT || '8080'
const CORS_ORIGIN = import.meta.env.VITE_CORS_ORIGIN || 'http://localhost:5173'

export const ENV = {
  API_BASE_URL,
  API_PORT,
  API_URL: `${API_BASE_URL}:${API_PORT}`,
  CORS_ORIGIN
}

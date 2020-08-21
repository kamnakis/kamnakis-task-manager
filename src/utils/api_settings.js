const api_url = 'https://kamnakis-task-manager.herokuapp.com/api'

const headers = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
})

export { api_url, headers }
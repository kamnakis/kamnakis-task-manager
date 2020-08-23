import axios from 'axios'
import { api_url, headers } from './api_settings'

const USER_LOGIN = async ({ email, password }) => {
  const response = await axios.post(`${api_url}/users/login`, {
    email,
    password
  })

  return response.data
}

const SIGNUP_USER = async ({ fname, lname, email, password }) => {
  const response = await axios.post(`${api_url}/users`, {
    name: `${fname} ${lname}`,
    email,
    password
  })

  return response.data
}

const GET_PROFILE = async () => {
  console.log()
  const response = await axios.get(`${api_url}/users/me`, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })

  return response.data
}

const REMOVE_PROFILE = async () => {
  await axios.delete(`${api_url}/users/me`, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })
}

const UPDATE_PROFILE = async (updates) => {
  const response = await axios.patch(`${api_url}/users/me`, updates, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })

  return response.data
}

const USER_LOGOUT = async () => {
  await axios.post(`${api_url}/users/logoutAll`, {}, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })
}

const USER_LOGOUT_ALL = async () => {
  await axios.post(`${api_url}/users/logout`, {}, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })
}

const GET_TASKS = async (query) => {
  const response = await axios.get(`${api_url}/tasks?${query}`, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })

  return response.data
}

const ADD_TASK = async (task) => {
  const response = await axios.post(`${api_url}/tasks`, task, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })

  return response.data
}

const REMOVE_TASK = async (id) => {
  const response = await axios.delete(`${api_url}/tasks/` + id, {
    headers: headers(localStorage.getItem('taskManagerToken'))
  })

  return response.data
}

const UPDATE_TASK = async ({ _id, description, completed }) => {
  const response = await axios.patch(`${api_url}/tasks/` + _id,
    {
      description,
      completed
    },
    {
      headers: headers(localStorage.getItem('taskManagerToken'))
    })

  return response.data
}


const api = {
  USER_LOGIN,
  SIGNUP_USER,
  GET_PROFILE,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  USER_LOGOUT,
  USER_LOGOUT_ALL,
  GET_TASKS,
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK
}

export default api
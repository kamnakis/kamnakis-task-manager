const profile = {
  "age": 43,
  "_id": "5f428ab3554e9a0017a45fdf",
  "name": "Jason Smith",
  "email": "j.smith@demo.tm",
  "createdAt": "2020-08-23T17:00:17.522Z",
  "updatedAt": "2020-08-23T17:00:17.522Z",
  "__v": 6
}

let tasks = [
  {
    _id: '5f429ee7570e9a0017f65fec',
    completed: false,
    description: 'Task #1',
    owner: '5f428ab3570e9a0017f65fdf',
    createdAt: '2020-08-23T17:00:17.522Z',
    updatedAt: '2020-08-23T17:00:17.522Z',
    __v: 0
  },
  {
    _id: '5f429ee7570e9a0017f65feb',
    completed: false,
    description: 'Task #2',
    owner: '5f428ab3570e9a0017f65fdf',
    createdAt: '2020-08-22T17:00:17.522Z',
    updatedAt: '2020-08-22T17:00:17.522Z',
    __v: 0
  },
  {
    _id: '5f429ee7570e9a0017f65fea',
    completed: true,
    description: 'Task #3',
    owner: '5f428ab3570e9a0017f65fdf',
    createdAt: '2020-08-21T17:00:17.522Z',
    updatedAt: '2020-08-21T17:00:17.522Z',
    __v: 0
  }
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const GET_PROFILE = async () => {
  await sleep(500);
  return profile
}

const REMOVE_PROFILE = async () => {
  await sleep(500);
}

const UPDATE_PROFILE = async (updates) => {
  await sleep(500);
  return {
    ...profile,
    ...updates
  }
}

const USER_LOGOUT = async () => {
  await sleep(500);
}

const USER_LOGOUT_ALL = async () => {
  await sleep(500);
}

const GET_TASKS = async (query) => {

  await sleep(800);
  return tasks
}

const ADD_TASK = async (task) => {
  const newTask = {
    _id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 24),
    owner: '5f428ab3570e9a0017f65fdf',
    createdAt: new Date(),
    updatedAt: new Date(),
    __v: 0,
    ...task
  }

  tasks = [newTask, ...tasks]

  await sleep(500);
  return newTask
}

const REMOVE_TASK = async (id) => {
  const response = tasks.filter(task => task._id === id);

  await sleep(500);
  return response[0]
}

const UPDATE_TASK = async ({ _id, description, completed }) => {
  return {
    _id: '5f429ee7570e9a0017f65fea',
    completed: true,
    description: 'Task #4',
    owner: '5f428ab3570e9a0017f65fdf',
    createdAt: '2020-08-21T17:00:17.522Z',
    updatedAt: '2020-08-21T17:00:17.522Z',
    __v: 0
  }
}


const api = {
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
import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: process.env.REACT_APP_API_AUTH,
  },
})

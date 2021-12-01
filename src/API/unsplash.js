import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos?per_page=20/',
  headers: {
    Authorization: process.env.REACT_APP_API_AUTH,
  },
})

import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  params: {
    client_id: process.env.REACT_APP_API_AUTH,
    per_page: 20,
  },
})

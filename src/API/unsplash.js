import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0mlGfJe2iOXQowJaZLw_WV4bGqLIh9EKMcCDCc7CyAI',
  },
})

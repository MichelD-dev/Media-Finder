import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com/search/photos?per_page=20/',
  headers: {
    Authorization: 'Client-ID 0mlGfJe2iOXQowJaZLw_WV4bGqLIh9EKMcCDCc7CyAI',
  },
})

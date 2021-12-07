import axios from 'axios'
  
  const unsplash = (searchTerm) => axios('https://api.unsplash.com/search/photos', {
    params: {
      query: searchTerm,
      client_id: process.env.REACT_APP_API_AUTH,
      per_page: 20,
    },
  })

  export default unsplash
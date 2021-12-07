import axios from 'axios'

const youTube = searchTerm =>
  axios('https://www.googleapis.com/youtube/v3/search/', {
    params: {
      //FIXME 2 requetes why?
      q: searchTerm,
      part: 'snippet',
      maxResults: 5,
      key: process.env.REACT_APP_API_KEY,
    },
  })

export default youTube

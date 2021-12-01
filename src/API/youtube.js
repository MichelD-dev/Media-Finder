import axios from 'axios'

const KEY = 'AIzaSyAsL_z6raRHkvV49ZDBE-Vr-cv1-3pzMEk'

export default axios.create({
  baseURL: 'https://www.googeapis.com/youtube/v3/search/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
})

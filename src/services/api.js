import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cloud-files.herokuapp.com/',
});

export default api;
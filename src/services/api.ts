import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evosistema-rest-api.herokuapp.com'

})

export default api;

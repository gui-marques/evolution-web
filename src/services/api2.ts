import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evosistema-rest-api.herokuapp.com',

  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Authorization":" "+ localStorage.getItem('@EvoLogin:token')
},

})



export default api;

import axios from 'axios'

const HTTP = axios.create({
  baseURL: 'http://localhost:8081/',
  headers: { 
    // 'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})

// const domain = 'http://localhost:8081/'

HTTP.interceptors.response.use(response => {
  return response
}, error => { 
  //Put your logic here to manage the error message coming from BE
  if (error.response.status == 401) {
  	window.location.replace(domain + 'login');
  } else if (error.response.status == 400) {
    return error.response;
  }
  return Promise.reject(error);
})

export default HTTP
export const domain = 'http://localhost:8080/'
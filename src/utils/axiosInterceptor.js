import axios from 'axios'

const service = axios.create({
  baseURL:process.env.BASE_API,
  timeout:5000
})

//req拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default service

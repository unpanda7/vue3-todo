import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const VUE_APP_URL = process.env.VUE_APP_URL

const axiosConfig: AxiosRequestConfig = {
  baseURL: VUE_APP_URL,
  timeout: 20000,
  withCredentials: true,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-Width': 'XMLHttpRequest',
  },
}

const service = axios.create(axiosConfig)

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    if (error && error.response) {
      const RESPONSE_CODE = {
        400: '请求参数错误',
        403: '拒绝访问',
        404: '请求超时',
        500: '服务器内部错误',
        501: '服务未实现',
        502: '网关错误',
        503: '服务不可用',
        504: '网关超时',
        505: 'HTTP版本不受支持',
      }
      // error.message = RESPONSE_CODE[error.response.status] || "服务器开小差！！"
      error.message = '服务器开小差!!!'
    }
    return Promise.reject(error)
  }
)

export default service

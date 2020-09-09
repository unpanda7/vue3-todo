import { AxiosRequestConfig } from 'axios'
import axios from './config'
import { Toast } from 'vant'

export interface RespondData {
  code: number
  result: any
  timestamp: Date
  message: string
}

export default class Http {
  public static async request(params: AxiosRequestConfig) {
    const toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      message: '加载中...',
    })
    const res = await axios(params)
    console.log('答应请求值 =>', res.data)
    // close loading
    toast.close()
    return res.data as RespondData
  }

  public static get(url: string, params?: object, axiosConfig = {}) {
    return this.request({
      method: 'GET',
      url,
      params,
      ...axiosConfig,
    })
  }

  public static post(url: string, data?: object, axiosConfig = {}) {
    return this.request({
      method: 'POST',
      url,
      data,
      ...axiosConfig,
    })
  }

  public static delete(url: string, params?: object, axiosConfig = {}) {
    return this.request({
      method: 'DELETE',
      url,
      params,
      ...axiosConfig
    })
  }
}

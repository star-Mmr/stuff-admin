import CghRequest from './request'

import { BASE_URL, TIMEOUT } from './request/config'

const cghRequest = new CghRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  //单个实例对象的拦截器
  interceptors: {
    requestInterceptor: config => {
      //1、在发送网络请求时，在页面中间显示一个loadding组件

      //2、某一些请求需要用户携带token，如果没有携带，直接跳转到登录页面
      console.log('单个实例的请求拦截')

      //3、对params和data进行序列化操作

      return config
    },
    requestInterceptorCatch: err => {

      return err
    },
    responseInterceptor: res => {
      return res.data
    },
    responseInterceptorCatch: err => {
      return err
    }
  }
}) 


export default cghRequest

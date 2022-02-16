import axios from 'axios';

class CghRequest {
  constructor(config) {
    //创建axios实例
    this.instance = axios.create(config)
    //保存基本信息
    this.interceptors = config.interceptors


    //开始使用拦截器
    //针对单个实例对象的拦截器  从config中取出单个实例对象中的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //所有实例对象的拦截器
    this.instance.interceptors.request.use(
      config => {
        console.log('所有实例对象请求拦截')
        return config
      },
      err => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      }
    )
  }

  request(config) {
    return new Promise((resolve,reject) => {
        //单个请求 对config的处理（单个请求的拦截）
      if(config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance.request(config)
      .then(res => {
        //单个响应 对res的处理（单个响应的拦截）
        if(config.interceptors.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        // console.log(res)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
      
    })
  }

  get(config) {
    this.request({...config, method: 'GET'})
  }

  post(config) {
    this.request({...config, method: 'POST'})
  }

  delete(config) {
    this.request({...config, method: 'DELETE'})
  }

  put(config) {
    this.request({...config, method: 'PUT'})
  }

  patch(config) {
    this.request({...config, method: 'PATCH'})
  }


}

export default CghRequest
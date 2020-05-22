import axios from 'axios'
import { Message } from 'element-ui';


export function request(config) {
  // 1创建实例
  const instance=axios.create({
    baseURL : '/api',
    // baseURL : 'http://localhost:8088',
    timeout:5000
  })
  // 2.1axios请求拦截器
  instance.interceptors.request.use(config=>{
    // * 判断是否存在token，如果存在的话，则每个http header都加上token
    // * token会在登录之后存储在本地
    if (localStorage.token) {
      config.headers["Authorization"]  = `${localStorage.token}`;
      config.headers["userId"]  = `${localStorage.userId}`;
    }
    return config;
  },error => {
    console.log(error);
  })
  //2.2响应拦截,也要return出去
  //1、可以对数据进行处理
  instance.interceptors.response.use(res=>{

    let data = res.data;
    // * 正常返回数据
    if (res.status === 200) {
      // * 返回data
      return data
    }
    if (res.status === 500) {
      // console.log('')
      this.$message({
        message: '请校验输入内容',
        type: 'success'
      });
      // * 返回data
      return data
    }
    // * 如果code是1001 表示token未认证(后端定义的错误码)
    // * 跳转到login
    if (data.code === 1001) {
      router.replace('/login')
    }

    return  Promise.reject(data);
  },err=>{
    //请求失败提示
    Message({
      message: '请求失败',
      type: 'warning'
    });
  })

  //发送真正的网络请求
  return instance(config)
}

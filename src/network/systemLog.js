import {request} from "./request";

export function  systemLogFindAll() {
  return request({
    url:'/sysLog/findAll.do'
  })
}

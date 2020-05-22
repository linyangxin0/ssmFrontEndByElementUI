import {request} from "./request";

export function  deviceFindAll() {
  return request({
    url:'/device/findAll.do'
  })
}


export function  deviceSearch(searchText) {
  return request({
    url:'/device/findDeviceByName.do',
    params:{
      searchText
    }
  })
}

export function  addDevice(id,name,type,status) {
  return request({
    url:'/device/addDevice.do',
    params:{
      id,name,type,status
    }
  })
}

export function  delDevice(id) {
  return request({
    url:'/device/delDevice.do',
    params:{
      id
    }
  })
}


export function  findDeviceById(id) {
  return request({
    url:'/device/findDeviceById.do',
    params:{
      id
    }
  })
}

export function  editDevice(id,name,type,status) {
  return request({
    url:'/device/editDevice.do',
    params:{
      id,name,type,status
    }
  })
}

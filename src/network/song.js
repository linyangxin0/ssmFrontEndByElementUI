import {request} from "./request";

export function  songFindAll() {
  return request({
    url:'/song/findAll.do'
  })
}

export function  songSearch(searchText) {
  return request({
    url:'/song/findSongByName.do',
    params:{
      searchText
    }
  })
}

export function  addSong(name,info,author,updateTime,status) {
  return request({
    url:'/song/saveSong.do',
    // method:'POST',
    // headers:{'Content-Type':'application/x-www-form-urlencoded'},
    params: {
      name,info,author,updateTime,status
    }
  })
}

// export function  addSong(song) {
//   return request({
//     url:'/song/saveSong.do',
//     method:'POST',
//     // headers:{'Content-Type':'application/x-www-form-urlencoded'},
//     data: {
//       song
//     }
//   })
// }


export function  delASong(id) {
  return request({
    url:'/song/delASong.do',
    params:{
      id
    }
  })
}

export function  findSongById(id) {
  return request({
    url:'/song/findSongById.do',
    params:{
      id
    }
  })
}



export function  editSong(id,name,info,author,updateTime,status) {
  return request({
    url:'/song/editSong.do',
    params: {
      id,name,info,author,updateTime,status
    }
  })
}





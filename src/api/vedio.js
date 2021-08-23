import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/video/list',
    method: 'get',
    params: query
  })
}

export function fetchVideo(id) {
  return request({
    url: '/video/detail',
    method: 'get',
    params: { id }
  })
}

export function createVideo(data) {
  return request({
    url: '/video/add',
    method: 'post',
    data
  })
}

export function updateVideo(data) {
  return request({
    url: '/video/update',
    method: 'post',
    data
  })
}

export function deleteVideo(data) {
  return request({
    url: '/video/delete',
    method: 'post',
    data
  })
}

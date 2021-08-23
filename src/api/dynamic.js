import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/dynamic/list',
    method: 'get',
    params: query
  })
}

export function fetchDynamic(id) {
  return request({
    url: '/dynamic/detail',
    method: 'get',
    params: { id }
  })
}

export function createDynamic(data) {
  return request({
    url: '/dynamic/add',
    method: 'post',
    data
  })
}

export function updateDynamic(data) {
  return request({
    url: '/dynamic/update',
    method: 'post',
    data
  })
}

export function deleteDynamic(data) {
  return request({
    url: '/dynamic/delete',
    method: 'post',
    data
  })
}

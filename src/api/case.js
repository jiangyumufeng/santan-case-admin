import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/operationCase/list',
    method: 'get',
    params: query
  })
}

export function fetchCase(id) {
  return request({
    url: '/operationCase/detail',
    method: 'get',
    params: { id }
  })
}

export function createCase(data) {
  return request({
    url: '/operationCase/add',
    method: 'post',
    data
  })
}

export function updateCase(data) {
  return request({
    url: '/operationCase/update',
    method: 'post',
    data
  })
}

export function deleteCase(data) {
  return request({
    url: '/operationCase/delete',
    method: 'post',
    data
  })
}

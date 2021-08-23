import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/cityStat/list',
    method: 'get',
    params: query
  })
}

export function fetchInstallCity(id) {
  return request({
    url: '/cityStat/detail',
    method: 'get',
    params: { id }
  })
}

export function createInstallCity(data) {
  return request({
    url: '/cityStat/add',
    method: 'post',
    data
  })
}

export function updateInstallCity(data) {
  return request({
    url: '/cityStat/update',
    method: 'post',
    data
  })
}

export function deleteInstallCity(data) {
  return request({
    url: '/cityStat/delete',
    method: 'post',
    data
  })
}

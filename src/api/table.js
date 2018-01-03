import request from '@/utils/request'

export function getList(url,method,params) {
  return request({
    url: url,
    method: method,
    params
  })
}

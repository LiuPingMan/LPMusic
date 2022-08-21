import lpRequest from './request'

export function getBanners(params) {
  return lpRequest.get({
    url: '/banner',
    params
  })
}
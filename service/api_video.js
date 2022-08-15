import lpRequest from './request'

export function getTopMV(params) {
  return lpRequest.get({
    url: '/top/mv', 
    params
  })
}
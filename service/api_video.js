import lpRequest from './request'

export function getTopMV(params) {
  return lpRequest.get({
    url: '/top/mv', 
    params
  })
}

export function getMVURL(params) {
  return lpRequest.get({
    url: '/mv/url',
    params
  })
}

export function getMVDetail(params) {
  return lpRequest.get({
    url: '/mv/detail',
    params
  })
}

export function getRelatedVideo(params) {
  return lpRequest.get({
    url: '/related/allvideo',
    params
  })
}
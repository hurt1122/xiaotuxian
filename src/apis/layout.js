import request from '@/utils/request'

export const getLayoutHeaderInfo = () => {
  return request.get('/home/category/head')
}

export const getBannerInfo = (params = {}) => {
  const { distributionSite = '1' } = params
  return request.get('/home/banner',
    {
      params: {
        distributionSite
      }
    })
}

export const getNewList = () => {
  return request.get('/home/new')
}

export const getHotList = () => {
  return request.get('/home/hot')
}

export const getGoodsList = () => {
  return request.get('/home/goods')
}
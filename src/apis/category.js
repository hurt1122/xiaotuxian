import request from '@/utils/request'

export const getCategoryList = (id) => {
  return request.get('/category', {
    params: { id }
  })
}

export const getCategoryFilter = (id) => {
  return request.get('/category/sub/filter', {
    params: {
      id
    }
  })
}

export const getSubCategory = (data) => {
  return request.post('/category/goods/temporary', data)
}
import request from '@/utils/request'

export const getDetailsDate = (id) => {
  return request.get('/goods', {
    params: {
      id
    }
  })
}

export const getDetailsHot = ({ id, type, limit = 3 }) => {
  return request.get('/goods/hot', {
    params: {
      id,
      type,
      limit
    }
  })
}

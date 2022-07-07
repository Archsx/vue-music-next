import { get } from './base'

export function getRecommend<T = any>() {
  return get<T>('/api/getRecommend')
}

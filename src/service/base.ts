import axios from 'axios'

const baseURL = '/'

const ERR_OK = 0

const ERR_JUST_FOR_MOCK = 1

type IResponseCode = typeof ERR_OK | typeof ERR_JUST_FOR_MOCK

axios.defaults.baseURL = baseURL

export function get<T>(url: string, params?: any): Promise<T> {
  return axios
    .get<{
      code: IResponseCode
      result: T
      // 假设后端可能给我们errorMessage，比如参数传得不全啊之类的
      errorMessage?: string
    }>(url, {
      params,
    })
    .then((res) => {
      const serverData = res.data
      if (serverData.code === ERR_OK) {
        return serverData.result
      } else {
        return Promise.reject(res.data.errorMessage)
      }
    })
  // .catch((e:Error) => {
  //   return e.message
  // })
}

import axios from 'axios'
import { baseUrl, data } from './config'
const request = axios.create({
  timeout: 5000,
  withCredentials: true
})
// 获取banner
export const getBanner = () => {
  const url = baseUrl
  const getData = Object.assign({}, data)
  return request.get(url, {
    params: getData
  })
}

import axios from 'axios'
import { baseUrl, data } from './config'
const request = axios.create({
  timeout: 5000,
  withCredentials: true
})
// 获取banner图
export const getBanner = () => {
  const url = baseUrl
  const getData = Object.assign({}, data, {
    category: '组图'
  })
  return request.get(url, {
    params: getData
  })
}
// 获取热点新闻
export const getHotNews = (type) => {
  const url = baseUrl
  const getData = Object.assign({}, data, {
    category: 'news_hot'
  })
  return request.get(url, {
    params: getData
  })
}
import axios from 'axios'
const request = axios.create({
  timeout: 5000,
  withCredentials: true
})
// 获取banner
export const getBanner = () => {
  const url = '/api/titlist'
  const data = Object.assign({}, {
    articletype: 3,
    page: 1,
    rows: 20
  })
  return request.get(url, {
    params: data
  })
}

import { setCookie } from 'h3'

export default (_req, res) => {
  setCookie(res, 'github_token', '', { httpOnly: true, path: '/' })
  return true
}
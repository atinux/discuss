import { setCookie } from 'h3'

export default (req, res) => {
  setCookie(res, 'gh_token', '', { path: '/', httpOnly: true })
  return true
}
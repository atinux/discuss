import { useQuery, sendRedirect, setCookie } from 'h3'

export default async (req, res, next) => {
  const { code } = useQuery(req)

  if (!code) {
    return sendRedirect(res, '/')
  }
  const response: any = await $fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }
  })
  if (response.error) {
    return sendRedirect(res, '/')
  }
  setCookie(res, 'github_token', response.access_token, { path: '/', httpOnly: true })
  return sendRedirect(res, '/')
}
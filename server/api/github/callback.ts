const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event)

  if (!code) {
    return sendRedirect(event, '/')
  }
  const response: any = await $fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      body: {
        client_id: config.public.github.clientId,
        client_secret: config.github.clientSecret,
        code
      }
    }
  )
  if (response.error) {
    return sendRedirect(event, '/')
  }

  setCookie(event, 'gh_token', response.access_token, { path: '/' })

  return sendRedirect(event, '/')
})

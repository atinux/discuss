import defu from 'defu'
import { joinURL } from 'ufo'

export const useGitHub = () => {
  const { GITHUB_CLIENT_ID } = useRuntimeConfig()
  const token = useState('gh_token', () => '')
  const user = useState('gh_user', () => null)
  
  return {
    token,
    user,
    fetch: (path, options) => $fetch(joinURL('https://api.github.com', path), defu(options, {
      headers: { Authorization: `token ${token.value}` },
    })),
    login: () => window.location.replace(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=public_repo`),
    logout: () => {
      token.value = ''
      user.value = ''
      $fetch('/api/github/logout')
    },
  }
}

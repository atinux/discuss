import { joinURL } from 'ufo'

export const useGitHub = () => {
  const { GITHUB_CLIENT_ID } = useRuntimeConfig()
  const token = useState('gh_token', () => '')

  if (process.server) {
    token.value = useCookie('gh_token').value
  }
  
  return {
    apiUrl: (path: string) => joinURL('https://api.github.com', path),
    headers: () => ({ Authorization: `token ${token.value}` }),
    login: () => window.location.replace(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=public_repo`),
    logout: () => $fetch('/api/github/logout').then(() => {
      token.value = ''
      window.location.reload()
    })
  }
}

export default defineNuxtPlugin(async () => {
  const { token, user, fetch } = useGitHub()

  token.value = useCookie('github_token').value
  if (token.value) {
    user.value = await fetch(`/user`)
  }
})
<script setup>
const { login, hasToken, apiUrl, headers } = useGitHub()
useMeta({
  title: 'Discuss with Atinux',
})
const user = useState('user', () => null)
if (hasToken.value) {
  user.value = await $fetch(apiUrl('/user'), {
    headers: headers(),
  })
}
</script>

<template>
  <AppContainer>
    <h1 class="text-4xl flex items-center gap-2">
      Discuss with Atinux <i class="inline-flex i-carbon-chat text-black" />
    </h1>
    <User v-if="user" :user="user" />
    <button v-else @click="login" class="border rounded px-2 py-1">
      Login with GitHub
    </button>
    <NewMessage v-if="user" />
    <Messages v-if="user" />
  </AppContainer>
</template>

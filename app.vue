<script setup>
useMeta({
  title: 'Discuss with Atinux',
})
const { login, apiUrl, headers } = useGitHub()
const { data: user } = await useFetch(apiUrl('/user'), {
  headers: headers(),
  pick: ['login', 'avatar_url'],
})
</script>

<template>
  <AppContainer>
    <h1 class="text-4xl flex items-center gap-2">
      Discuss with Atinux <i class="inline-flex i-carbon-chat text-black" />
    </h1>
    <User v-if="user" :user="user" />
    <button v-else @click="login" class="border px-2 py-1 rounded">
      Login with GitHub
    </button>
    <NewMessage v-if="user" />
    <Messages v-if="user" />
  </AppContainer>
</template>

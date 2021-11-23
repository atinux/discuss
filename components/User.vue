<script setup>
const { user, login, logout } = useGitHub()
</script>

<template>
  <div>
    <div v-if="user" class="inline-flex items-center gap-2 p-5 bg-light-200">
      <img :src="user.avatar_url" class="rounded-full w-10 h-10 mr-2"/>
      <p>Welcome {{ user.login }}, nice to meet you!</p>
      <button @click="logout" class="border border-gray-600 rounded px-2 hover:border-black">Logout</button>
    </div>
    <button v-else @click="login" class="border border-gray-600 rounded px-2">Login with GitHub <i class="i-carbon-logo-github" /></button>
  </div>
</template>
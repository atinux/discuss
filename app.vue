<script setup>
const { GITHUB_CLIENT_ID } = useRuntimeConfig()
const loginUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
</script>

<template>
  <div>
    <h1>Discuss with Atinux <i class="i-carbon-chat w-4 h-4 text-black"/></h1>

    <a :href="loginUrl">Login with GitHub</a>
  </div>
</template>

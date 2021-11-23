<script setup>
const { user } = useGitHub()
</script>

<template>
  <div class="container mx-auto md:my-20 p-4 sm:p-10 md:px-20 shadow bg-light-50 flex flex-col gap-5">
    <h1 class="text-4xl flex items-center gap-2">Discuss with Atinux <i class="inline-flex i-carbon-chat text-black"/></h1>
    <User />
    <NewMessage v-if="user" />
    <Messages v-if="user" />
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
})
const logout = githubLogout
</script>

<template>
  <div class="inline-flex items-center gap-2 p-5 bg-light-200">
    <img :src="user.avatar_url" class="rounded-full w-10 h-10 mr-2" />
    <p>
      Welcome <strong>{{ user.login }}</strong
      >, nice to meet you!
    </p>
    <button
      @click="logout"
      class="border text-black border-gray-600 rounded px-2 hover:border-black"
    >
      Logout
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  user: {
    type: Object,
    required: true
  }
})
const logout = githubLogout
</script>

<template>
  <div class="flex items-center gap-2 justify-between bg-light-200">
    <div class="flex items-center">
      <img
        :src="user.avatar_url"
        :alt="user.login"
        class="rounded-full w-10 h-10 mr-2"
      >
      <p>
        Welcome <strong>{{ user.login }}</strong>, nice to meet you!
      </p>
    </div>
    <button
      class="border text-black border-gray-600 rounded px-2 hover:border-black"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

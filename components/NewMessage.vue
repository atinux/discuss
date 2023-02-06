<script setup>
const title = ref('')
const sending = ref(false)
const nuxtApp = useNuxtApp()
const postIssue = async () => {
  if (sending.value || !title.value.trim()) return
  sending.value = true
  // Call GitHub
  await githubFetch('/repos/atinux/discuss/issues', {
    method: 'POST',
    body: { title: title.value, },
  })
  sending.value = false
  title.value = ''
  nuxtApp.callHook('refresh:messages')
}
</script>

<template>
  <div>
    <h2 class="text-2xl">
      New Message
    </h2>
    <form
      class="mt-2 flex"
      @submit.prevent="postIssue"
    >
      <input
        v-model="title"
        type="text"
        required
        placeholder="Your message :)"
        class="flex-1 border px-2 py-1 rounded-l border-r-0"
      >
      <button
        type="submit"
        class="border px-2 py-1 rounded rounded-l-0"
      >
        {{ sending ? 'Sending...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import destr from 'destr'
import { UseTimeAgo } from '@vueuse/components'
const { fetch } = useGitHub()
const { data: issues } = await useAsyncData('issues', () => fetch(`/repos/atinux/discuss/issues`))
const timestamp = Date.now()

onMounted(() => {
  const eventSource = new EventSource('https://sdk.m.pipedream.net/pipelines/p_yKCzjK2/sse')
  eventSource.addEventListener('issues', (event) => {
    const issue = destr(event.data)
    if (issue.number && new Date(issue.created_at).getTime() > timestamp) {
      issues.value.unshift(issue)
    }
  })
})
</script>

<template>
  <h1 class="text-2xl">Messages</h1>
  <p v-if="!issues.length">No messages yet</p>
  <article v-for="issue of issues" class="flex flex-col border border-gray-200 p-4 gap-2">
    <a :href="`https://github.com/atinux/discuss/issues/${issue.number}`" target="_blank" class="text-xl font-semibold">{{ issue.title }}</a>
    <div class="flex gap-1 text-sm text-gray-500">By <a :href="`https://github.com/${issue.user.login}`" target="_blank" class="rounded inline-flex gap-1 text-black"><img class="h-5 w-5 rounded" :src="issue.user.avatar_url" /> {{ issue.user.login }}</a> <UseTimeAgo v-slot="{ timeAgo }" :time="issue.created_at">{{ timeAgo }}</UseTimeAgo></div>
  </article>
</template>
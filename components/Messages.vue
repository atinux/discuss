<script setup>
import { UseTimeAgo } from '@vueuse/components'
const { ISSUES_SSE_URL } = useRuntimeConfig()

const { data: issues } = await useAsyncData(
  'issues',
  () => githubFetch('/repos/atinux/discuss/issues'),
  { transform: issues => issues.filter(issue => issue.state === 'open') }
)

onMounted(() => {
  const date = new Date()
  const eventSource = new EventSource(ISSUES_SSE_URL)

  eventSource.addEventListener('issues', event => {
    const issue = JSON.parse(event.data)

    // If issue was before hydration
    if (new Date(issue.updated_at) < date) {
      return
    }

    // Remove it from the list
    if (issue.state !== 'open') {
      issues.value = issues.value.filter(i => i.id !== issue.id)
      return
    }
    // Update it
    const existingIssue = issues.value.find(i => i.id === issue.id)
    if (existingIssue) {
      existingIssue.title = issue.title
    } else {
      issues.value.unshift(issue)
    }
  })
})
</script>

<template>
  <h1 class="text-2xl">Messages</h1>
  <p v-if="!issues.length">No messages yet</p>
  <article
    v-for="issue of issues"
    class="flex flex-col border border-gray-200 p-4 gap-2"
  >
    <a
      :href="`https://github.com/atinux/discuss/issues/${issue.number}`"
      target="_blank"
      class="text-xl font-semibold"
      >{{ issue.title }}</a
    >
    <div class="flex gap-1 text-sm text-gray-500">
      By
      <a
        :href="`https://github.com/${issue.user.login}`"
        target="_blank"
        class="rounded inline-flex gap-1 text-black"
        ><img class="h-5 w-5 rounded" :src="issue.user.avatar_url" />
        {{ issue.user.login }}</a
      >
      <UseTimeAgo v-slot="{ timeAgo }" :time="issue.created_at">{{
        timeAgo
      }}</UseTimeAgo>
    </div>
  </article>
</template>

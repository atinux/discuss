<script setup>
import { UseTimeAgo } from '@vueuse/components'

const nuxtApp = useNuxtApp()
const { data: issues, refresh, pending } = await useAsyncData(
  'issues',
  () => githubFetch('/repos/atinux/discuss/issues'),
  { transform: (issues) => issues.filter((issue) => issue.state === 'open') }
)
nuxtApp.hook('refresh:messages', refresh)
</script>

<template>
  <h1 class="text-2xl flex items-center justify-between">
    Messages
    <Icon
      v-if="!pending"
      name="mdi:refresh"
      class="text-gray-500 cursor-pointer"
      @click="refresh"
    />
  </h1>
  <p v-if="!issues.length">
    No messages yet
  </p>
  <article
    v-for="issue of issues"
    :key="issue.id"
    class="flex flex-col border border-gray-200 p-4 gap-2"
  >
    <a
      :href="`https://github.com/atinux/discuss/issues/${issue.number}`"
      target="_blank"
      class="text-xl font-semibold"
    >{{ issue.title }}</a>
    <div class="flex gap-1 text-sm text-gray-500">
      By
      <a
        :href="`https://github.com/${issue.user.login}`"
        target="_blank"
        class="rounded inline-flex gap-1 text-black"
      ><img
         class="h-5 w-5 rounded"
         :src="issue.user.avatar_url"
       >
        {{ issue.user.login }}</a>
      <UseTimeAgo
        v-slot="{ timeAgo }"
        :time="issue.created_at"
      >
        {{ timeAgo }}
      </UseTimeAgo>
    </div>
  </article>
</template>

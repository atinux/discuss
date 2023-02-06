<template>
  <main class="md:my-20">
    <p class="mb-5 text-center text-sm text-gray-800 flex items-center gap-3 justify-center">
      <a
        href="https://github.com/atinux/discuss"
        class="hover:text-black hover:border-black border-b border-transparent inline-flex items-center gap-1"
      >
        <Icon name="fa-brands:github" />
        Source code
      </a>
      <a
        href="https://atinux.com"
        class="hover:text-black hover:border-black border-b border-transparent inline-flex items-center gap-1"
      >
        <Icon name="ph:link" />
        Main website
      </a>
    </p>
    <div
      class="max-w-2xl mx-auto bg-white p-4 sm:p-10 shadow flex flex-col gap-4 rounded"
    >
      <slot />
    </div>
  </main>
</template>

<style lang="postcss">
body {
  @apply bg-slate-200;
}
</style>
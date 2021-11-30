<template>
  <main class="md:my-20">
    <p class="mb-5 text-center text-sm text-gray-800">
      <a
        href="https://github.com/atinux/discuss"
        class="underline hover:text-black"
      >
        Source code
      </a>
      |
      <a href="https://atinux.com" class="underline hover:text-black">
        Main website
      </a>
    </p>
    <div
      class="
        container
        mx-auto
        p-4
        sm:p-10
        md:px-20
        shadow
        bg-light-50
        flex flex-col
        gap-5
      "
    >
      <slot />
    </div>
  </main>
</template>

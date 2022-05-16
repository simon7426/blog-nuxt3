<template>
  <div
    class="flex flex-col min-h-screen max-w-screen mx-auto px-4 divide-y divide-gray-300"
  >
    <div class="pt-6 pb-4 text-center">
      <div class="flex items-center justify-center space-x-3">
        <img src="/assets/img/logo.png" alt="logo" class="w-auto h-10" />
        <NuxtLink to="/" aria-label="Home Page">
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Simon's Blog
          </h1>
        </NuxtLink>
      </div>
      <p class="text-gray-500 mt-1">By Simon Islam</p>

      <nav class="mt-7">
        <ul class="flex items-center justify-center space-x-5">
          <li>
            <NuxtLink to="/" class="nav-link" aria-label="Home page"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="about" class="nav-link" aria-label="About"
              >About</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
    <main class="flex-grow py-10">
      <Nuxt />
    </main>
    <footer class="text-center py-5 text-gray-500 text-sm">
      <p>© 2022–{{ $moment().format('YYYY') }} Simon Islam</p>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.nav-link {
  @apply text-green-700 hover:text-green-800 underline;
}
</style>

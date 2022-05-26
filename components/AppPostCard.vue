<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-5">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <div class="font-sans">
        <NuxtLink :to="post.id">
          <h1
            class="font-bold font-sans break-normal text-gray-900 pt-3 pb-2 text-3xl md:text-4xl"
          >
            {{ post.title }}
          </h1>
        </NuxtLink>
        <p class="text-sm md:text-base font-normal text-gray-600">
          Published {{ $moment(post.createdAt).format('MMMM DD, YYYY') }}
        </p>
      </div>

      <p class="py-6">{{ post.summary }}...</p>

      <div class="text-base md:text-sm text-gray-500 px-4 py-6">
        Tags:
        <a
          v-for="tag in post.tags"
          :key="tag"
          href="#"
          class="text-base md:text-sm text-green-500 no-underline hover:underline"
          >{{ tag }}
        </a>
      </div>
      <NuxtLink
        :to="post.id"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          class="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

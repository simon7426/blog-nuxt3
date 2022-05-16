<template>
  <article>
    <dl>
      <dt class="sr-only">Published on</dt>
      <dd class="font-medium text-gray-500">
        <time> {{ $moment(post.created_at).format('MMMM DD, YYYYY') }} </time>
      </dd>
    </dl>
    <div class="space-y-5">
      <NuxtLink to="#">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
          {{ post.title }}
        </h2>
      </NuxtLink>
      <p class="font-light leading-7 text-gray-500 text-lg">
        {{ post.title }}
      </p>
      <div class="mt-5">
        <NuxtLink
          to="#"
          class="font-medium text-green-600 hover:text-green-700"
        >
          Details ->
        </NuxtLink>
      </div>
    </div>
  </article>
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

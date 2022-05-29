<template>
  <div class="container w-full md:max-w-3xl mx-auto pt-20">
    <div
      class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
      style="font-family: Georgia, serif"
    >
      <div class="font-sans">
        <p class="text-base md:text-sm text-green-500 font-bold">
          &lt;
          <NuxtLink
            to="/"
            class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
            >BACK TO BLOG</NuxtLink
          >
        </p>
        <h1
          class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl"
        >
          {{ post.title }}
        </h1>
        <p class="text-sm md:text-base font-normal text-gray-600">
          Published {{ $moment(post.createdAt).format('MMMM DD, YYYY') }}
        </p>
      </div>

      <p class="py-6">{{ post.body }}</p>

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
      <AuthorCard />
      <AddCommentCard />
      <CommentListCard v-if="post.comments" :comments="post.comments" />
    </div>
  </div>
</template>

<script>
import AuthorCard from "./AuthorCard.vue";
import CommentListCard from "./CommentListCard.vue";
import AddCommentCard from "./AddCommentCard.vue";
export default {
    components: { AuthorCard, CommentListCard, AddCommentCard },
    props: {
        post: {
            type: Object,
            required: true,
            default: () => { },
        },
    }
}
</script>

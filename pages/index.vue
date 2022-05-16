<template>
  <ul class="divide-y divide-gray-300 -mt-10">
    <li v-for="post in posts" :key="post.id" class="py-14">
      <AppPostCard :post="post" />
    </li>
  </ul>
</template>
<script>
import blogService from '../services/blogs.service'
export default {
  async asyncData() {
    const data = await blogService.getAllBlogs()
    const posts = data.data.data
    return { posts }
  },
}
</script>

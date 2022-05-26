<template>
  <BlogCard :post="post" />
</template>

<script>
import blogService from '../services/blogs.service'
export default {
  async asyncData({ params }) {
    const data = await blogService.getSingleBlog(params.blog)
    const post = data.data.data
    return { post }
  },
}
</script>

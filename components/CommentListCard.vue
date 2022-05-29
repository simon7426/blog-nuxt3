<template>
  <div>
    <CommentCard
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    comments: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
}
</script>

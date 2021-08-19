<template>
  <h1>Lesson QA Component</h1>
  <p class="t-xxl city-font">
    Ask a question
  </p>
  <form @submit="createComment">
    <input class="form-group" type="text" placeholder="Question Here..." v-model="state.comment" required>
    <button class="btn btn-info" type="submit">
      Submit
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { commentService } from '../services/CommentService'
export default {
  setup() {
    const state = reactive({
      comment: ''
    })
    return {
      state,
      async createComment() {
        await commentService.createComment(state.comment)
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <h1>Lesson QA Component</h1>
  <p class="t-xxl city-font">
    Ask a question
  </p>
  <form @submit.prevent="createComment">
    <input class="form-group" type="text" placeholder="Question Here..." v-model="state.newComment.body" required>
    <button class="btn btn-info" type="submit">
      Submit
    </button>
  </form>
  <p class="rounded border p-2" v-for="comment in state.comments" :key="comment.id" :comment="comment">
    {{ comment.body }}
  </p>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { commentService } from '../services/CommentService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
export default {
  props: {
    lesson: { type: String, required: true }
  },
  setup(props) {
    const state = reactive({
      newComment: {
        body: '',
        creatorId: computed(() => AppState.account.id),
        lesson: computed(() => AppState.lessonName.indexOf(props.lesson) + 1)
      },
      comments: computed(() => AppState.comments)
    })
    return {
      state,
      async createComment() {
        try {
          await commentService.createComment(state.newComment)
        } catch (error) {
          Notification.toast(error.message)
        }
        state.newComment.body = ''
      }
    }
  }
}
</script>

<style scoped>

</style>

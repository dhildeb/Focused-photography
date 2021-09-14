<template>
  <div class="modal fade" id="commentModal" tabindex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-center d-flex justify-content-between">
          <i class="mdi mdi-close-box text-danger click zoom"
             title="Close"
             data-dismiss="modal"
             aria-label="Close"
          ></i>
          <b>{{ state.activeComment.body }}</b>
          <span></span>
        </div>
        <div class="modal-body">
          <!-- comments  -->
          <div v-for="comment in state.comments" :key="comment.id" class="border-bottom pb-2">
            <p>{{ comment.body }}</p>
            <img class="profile-icon" :src="comment.creator.picture" alt="profile picture">
          </div>
          <form class="form-group mt-5" @submit.prevent="createComment">
            <input id="body" class="input-group" type="text" placeholder="Question or Comment" v-model="state.commentData.body">
            <button class="btn btn-info"
                    type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { commentService } from '../services/CommentService'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      activeComment: computed(() => AppState.activeComment),
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments.filter(c => c.commentId === state.activeComment.id)),
      commentData: {
        lesson: AppState.lessonName.indexOf(route.params.name) + 1
      }
    })
    return {
      state,
      close() {
        $('#commentModal').modal('toggle')
      },
      async createComment() {
        state.commentData.commentId = state.activeComment.id
        await commentService.createComment(state.commentData)
        state.commentData = ''
        state.newComment = false
        this.close()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

</style>

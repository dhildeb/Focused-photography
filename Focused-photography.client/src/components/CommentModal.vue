<template>
  <div class="modal fade" id="commentModal" tabindex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-center">
          <i class="mdi mdi-close-box text-danger click zoom"
             title="Close"
             data-dismiss="modal"
             aria-label="Close"
          ></i>
        </div>
        <div class="modal-body">
          <!-- comments  -->
          <form class="form-group" @submit.prevent="createComment">
            <input id="body" class="input-group" type="text" placeholder="Question or Comment">
            {{ state.commentData.body }}
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
      comment: computed(() => AppState.activecomment),
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments.filter(c => c.commenttureId === state.comment.id)),
      commentData: {
        commentId: computed(() => AppState.activeComment.id),
        lesson: AppState.lessonName.indexOf(route.params.name) + 1,
        pictureId: computed(() => AppState.activePic.id)
      }
    })
    return {
      state,
      close() {
        $('#commentModal').modal('toggle')
      },
      async createComment(event) {
        state.commentData.body = event.target.body.value
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

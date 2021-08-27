<template>
  <div class="modal fade" id="commentModal" tabindex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-center">
          <i class="mdi mdi-close-box text-danger click zoom"
             title="Close"
             @click="close"
          ></i>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col flex-grow-1">
                <div class="row pb-3">
                  <!-- comments  -->
                  <form class="form-group" @submit.prevent="createComment">
                    <input id="body" class="input-group" type="text" placeholder="Question or Comment" v-bind="state.commentData.body">
                    {{ state.commentData.body }}
                    <button class="btn btn-info" type="submit">
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
        body: 'hello world',
        lesson: AppState.lessonName.indexOf(route.params.name) + 1,
        commenttureId: computed(() => AppState.activecomment.id)
      }
    })
    return {
      state,
      close() {
        $('#commentModal').modal('toggle')
      },
      async createComment() {
        console.log(state.commentData)
        // await commentService.createComment(state.commentData)
        // state.commentData = ''
        // state.newComment = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.new-comment{
  transition: all .25s linear;
  background-color: white;
}
.new-comment:hover{
  background-color: var(--cool-gray);
  transform: scale(1.01);
}
</style>

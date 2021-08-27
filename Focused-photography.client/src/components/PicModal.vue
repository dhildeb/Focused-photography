<template>
  <div class="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-center">
          <img class="img-fluid profile-icon rounded-circle click" title="profile picture" :src="state.pic.creator.picture" alt="profile picture">
          <h4 class="m-auto">
            {{ state.pic.name }}
          </h4>
          <i class="mdi mdi-close-box text-danger click zoom" title="Close" data-dismiss="modal" aria-label="Close"></i>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <img class="col-md-6 col-12 img-fluid img" :src="state.pic.picture" :alt="state.pic.name">
              <div class="col flex-grow-1">
                <div class="row">
                  <p class="p-3">
                    {{ state.pic.title }}
                  </p>
                </div>
                <div class="row pb-3">
                  <!-- comments  -->
                  <button class="new-comment rounded-xl border border-secondary w-100 p-4" @click="state.newComment = !state.newComment" v-if="!state.newComment">
                    New Comment...
                  </button>
                  <form class="form-group" @submit.prevent="createComment" v-if="state.newComment">
                    <input id="body" class="input-group" type="text" placeholder="Question or Comment">
                    <button class="btn btn-info" type="submit">
                      submit
                    </button>
                  </form>
                </div>
                <div class="row justify-content-between align-content-end bottom w-100">
                  <div class="text-center align-self-end">
                  </div>
                  <i class="mdi mdi-delete text-danger click align-self-end zoom" title="Delete pic" v-if="state.pic.creatorId === state.account.id"></i>
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
      pic: computed(() => AppState.activePic),
      account: computed(() => AppState.account),
      comments: computed(() => AppState.comments.filter(c => c.pictureId === state.pic.id)),
      newComment: false,
      commentData: {
        lesson: AppState.lessonName.indexOf(route.params.name) + 1,
        pictureId: computed(() => AppState.activePic.id)
      }
    })
    return {
      state,
      close() {
        $('#picModal').modal('toggle')
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

.new-comment{
  transition: all .25s linear;
  background-color: white;
}
.new-comment:hover{
  background-color: var(--cool-gray);
  transform: scale(1.01);
}
</style>

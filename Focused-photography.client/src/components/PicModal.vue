<template>
  <div class="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="container">
            <div class="row justify-content-end">
              <i class="mdi mdi-close text-danger click zoom position-absolute" title="Close" data-dismiss="modal" aria-label="Close"></i>
            </div>
            <div class="row pt-3">
              <img class="col-md-6 col-12 img-fluid" :src="state.pic.picture" :alt="state.pic.name">
              <div class="col flex-grow-1 ml-5 p-3">
                <small>
                  {{ state.creatorName }} | {{ state.pic.creator.location }}
                </small>
                <p class="t-lg p-1 pt-3 m-0">
                  LESSON:
                </p>
                <small>
                  {{ state.pic.title }}
                </small>
              </div>
              <div class="row p-5">
                <!-- comments  -->
                <div v-for="comment in state.comments" :key="comment.id" class="col-12 border-top pb-2">
                  <p>{{ comment.body }}</p>
                  <img class="profile-icon" :src="comment.creator.picture" alt="profile picture">
                </div>
                <!-- new comment -->
                <button class="col-12 new-comment rounded-xl border border-secondary w-100 p-4" @click="state.newComment = !state.newComment" v-if="!state.newComment">
                  New Comment...
                </button>
                <form class="form-group" @submit.prevent="createComment" v-if="state.newComment">
                  <textarea v-model="state.body"
                            id="body"
                            class="input-group rounded-xl p-1"
                            rows="3"
                            cols="255"
                            type="text"
                            placeholder="QUESTIONS OR COMMENTS"
                  ></textarea>
                  <button class="btn btn-block btn-info" type="submit" v-if="state.body">
                    submit
                  </button>
                </form>
              </div>
              <div class="row justify-content-between align-content-end bottom w-100">
                <div class="text-center align-self-end">
                </div>
                <!-- <i class="mdi mdi-delete text-danger click align-self-end zoom" title="Delete pic" v-if="state.pic.creatorId === state.account.id"></i> -->
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
      creatorName: computed(() => AppState.activePic.creator.name.split('@')[0]),
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
        await commentService.createPicComment(state.commentData)
        state.commentData.body = ''
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
}
textarea {
  resize: none;
  outline: none;
  transition: all .1s linear;
}
textarea:focus{
  border-color: var(--yellow)
}
</style>

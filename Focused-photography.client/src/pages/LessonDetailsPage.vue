<template>
  <div class="container-fluid bg-white">
    <div class="row mt-5">
      <div class="col mx-5">
        <p class="t-lg m-0">
          {{ route.params.name }}
        </p>
      </div>
    </div>
    <LessonHeader />
    <LessonHome v-if="route.params.route === 'Home'" />
    <LessonInfo v-if="route.params.route === 'Info'" />
    <LessonGallery v-if="route.params.route === 'Gallery'" />
    <LessonQA v-if="route.params.route === 'QA'" :key="route.params.name" :lesson="route.params.name" />
  </div>
  <PicModal />
  <CommentModal />
</template>

<script>
import { computed, onMounted, reactive, watchEffect } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { pictureservice } from '../services/PictureService'
import { accountService } from '../services/AccountService'

export default {
  name: 'LessonDetails',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      lesson: computed(() => AppState.lessonName.indexOf(route.params.name) + 1)
    })
    watchEffect(async() => {
      await commentService.getCommentsByLesson(state.lesson)
      await pictureservice.getAll()
    })
    onMounted(async() => {
      if (await accountService.checkLessonsAccess(state.lesson)) {
        router.push({ name: 'Home' })
      }
    })
    return {
      route,
      state
    }
  }
}
</script>

<style>

</style>

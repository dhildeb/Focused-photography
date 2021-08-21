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
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { commentService } from '../services/CommentService'
import { AppState } from '../AppState'
import { pictureservice } from '../services/PictureService'

export default {
  name: 'LessonDetails',
  setup() {
    watchEffect(async() => {
      const route = useRoute()
      await commentService.getCommentsByLesson(AppState.lessonName.indexOf(route.params.name) + 1)
      await pictureservice.getAll()
    })
    const route = useRoute()
    return {
      route
    }
  }
}
</script>

<style>

</style>

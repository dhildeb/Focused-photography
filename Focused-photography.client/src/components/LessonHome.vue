<template>
  <div class="container py-5">
    <div class="row justify-content-center align-content-center text-center text-focus-dark pt-5">
      <LessonDetail v-for="lessonImg in state.lessonImg" :key="lessonImg" :lesson-img="lessonImg" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      lessonImg: computed(() => AppState.lessonPics[route.params.name.split(' ').join('')])
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>

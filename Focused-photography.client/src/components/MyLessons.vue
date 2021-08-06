<template>
  <div class="container-fluid">
    <div class="row header-border mt-5">
      <div class="col-8 p-0">
        <h1>My Lessons component</h1>
        <!-- <img class="img-fluid" src="/img/pic-yb.jpg" alt=""> -->
      </div>
      <div class="col-4 text-cool-gray text-center align-self-center p-5">
        <!-- <img class="img-fluid" src="/img/quote-lesson-page.png" alt=""> -->
      </div>
    </div>

    <div class="row bg-cool-gray text-center align-content-center justify-content-center px-0 py-4"
         style="height: 80px;"
    >
    </div>
  </div>

  <div class="container my-5">
    <div class="row justify-content-center align-content-center text-center text-focus-dark pt-5">
      <LessonsList v-for="list in state.list" :key="list" :list="list" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      list: computed(() => AppState.lessonName)
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>

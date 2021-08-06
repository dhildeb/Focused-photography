<template>
  <div id="header" class="row">
    <div class="col-1">
    </div>
    <div class="col-11">
      <h1>emotion</h1>
    </div>
  </div>
  <header class="row bg-warm-gray p-4">
    <div class="col-md-2"></div>
    <div class="col-lg-1 col-md-2 col-3">
      <!-- REVIEW sceoll to top? -->
      <a @click="state.viewport = 'Home'">
        <h4>Home</h4>
      </a>
    </div>
    <div class="col-lg-1 col-md-2 col-3">
      <a @click="state.viewport = 'Lessons'">
        <h4 class="text-yellow">
          Lessons
        </h4>
      </a>
    </div>
    <div class="col-lg-1 col-md-2 col-3">
      <a @click="state.viewport = 'Gallery'">
        <h4>Gallery</h4>
      </a>
    </div>
    <div class="col-lg-1 col-md-2 col-3 text-nowrap">
      <a @click="state.viewport = 'Q&A'">
        <h4>Q & A</h4>
      </a>
    </div>
  </header>

  <div class="container py-5">
    <div class="row justify-content-center align-content-center text-center text-focus-dark pt-5">
      <LessonDetail />
    </div>
    <!-- reference -->
    <!-- <div class="row justify-content-center align-content-center text-center py-3">

      </div> -->
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>

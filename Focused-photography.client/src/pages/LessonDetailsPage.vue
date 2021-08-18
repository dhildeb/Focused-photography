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
    <LessonDetails v-if="route.params.route === 'Info'" />
    <LessonGallery v-if="route.params.route === 'Gallery'" />
    <LessonQA v-if="route.params.route === 'QA'" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'LessonDetails',
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>

<style>

</style>

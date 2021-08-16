<template>
  <div class="container-fluid bg-white">
    <div class="row mt-5">
      <div class="col mx-5">
        <p class="t-lg m-0">
          {{ route.params.name }}
        </p>
      </div>
    </div>
    <header class="row bg-warm-gray text-center p-4">
      <div class="col-md-2"></div>
      <div class="col-lg-1 col-md-2 col-3 border-right border-secondary">
        <!-- REVIEW scroll to top? -->
        <a class="click">
          <p class="t-xl">Home</p>
        </a>
      </div>
      <div class="col-lg-1 col-md-2 col-3 border-right border-secondary">
        <a class="click">
          <p class="text-yellow t-xl">
            Lessons
          </p>
        </a>
      </div>
      <div class="col-lg-1 col-md-2 col-3 border-right border-secondary">
        <a class="click">
          <p class="t-xl">Gallery</p>
        </a>
      </div>
      <div class="col-lg-1 col-md-2 col-3 text-nowrap">
        <a class="click">
          <p class="t-xl">Q & A</p>
        </a>
      </div>
    </header>
    <LessonHome />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
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

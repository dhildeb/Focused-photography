<template>
  <header class="row bg-warm-gray text-center mt-title p-4">
    <div class="col-md-2"></div>
    <div class="col-md-2 col-3 border-right border-secondary">
      <router-link :to="{name: 'LessonDetails', params: {name: route.params.name, route: 'Home'}}">
        <p :class="route.params.route === 'Home' ? 't-xl text-yellow' : 't-xl text-focus-dark'">
          Home
        </p>
      </router-link>
    </div>
    <div class="col-md-2 col-3 border-right border-secondary">
      <router-link :to="{name: 'LessonDetails', params: {name: route.params.name, route: 'Info'}}">
        <p :class="route.params.route === 'Info' ? 't-xl text-yellow' : 't-xl text-focus-dark'">
          Lessons
        </p>
      </router-link>
    </div>
    <div class="col-md-2 col-3 border-right border-secondary">
      <router-link :to="{name:'LessonDetails', params: {name: route.params.name, route: 'Gallery'}}">
        <p :class="route.params.route === 'Gallery' ? 't-xl text-yellow' : 't-xl text-focus-dark'">
          Gallery
        </p>
      </router-link>
    </div>
    <div class="col-md-2 col-3 text-nowrap">
      <router-link :to="{name: 'LessonDetails', params: {name: route.params.name, route: 'QA'}}">
        <p :class="route.params.route === 'QA' ? 't-xl text-yellow' : 't-xl text-focus-dark'">
          Q & A
        </p>
      </router-link>
    </div>
  </header>
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

<style scoped>
.mt-title{
  margin-top: 4rem;
}
</style>

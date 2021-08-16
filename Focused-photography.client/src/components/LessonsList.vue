<template>
  <div class="col-4 pb-3">
    <div class="row flex-column p-1">
      <div class="card bg-cool-gray text-white p-1">
        <p class="t-md">
          Month {{ state.month + 1 }}
        </p>
        <span>{{ list }}</span>
      </div>

      <div class="col p-0">
        <!-- params lesson name vvvvvvv TODO-->
        <router-link :to="{name:'LessonDetail', params: {name: list}}">
          <!-- <img :src="getImgUrl(state.list)" alt="" class="img-fluid"> -->
          <img class="img-fluid" src="https://source.unsplash.com/random" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    list: { type: String, required: true }
  },
  setup(props) {
    const state = reactive({
      list: computed(() => AppState.lessonName),
      month: AppState.lessonName.findIndex(l => l === props.list)
    })
    return {
      state,
      getImgUrl(name) {
        return require('../assets/img/month' + name + '.jpg')
      }
    }
  }
}
</script>

<style scoped>

</style>

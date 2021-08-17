<template>
  <div class="col-4 pb-3" :title="list">
    <div class="row flex-column p-4">
      <div class="lesson-title rounded-xl bg-cool-gray text-white mb-3 p-1">
        <p class="t-lg m-0">
          Month {{ state.month + 1 }}
        </p>
        <span>{{ list }}</span>
      </div>

      <div class="col p-0">
        <router-link :to="{name:'LessonDetail', params: {name: list}}">
          <img class="img-fluid" :src="state.coverPic[state.month]" :alt="list">
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
      month: AppState.lessonName.findIndex(l => l === props.list),
      coverPic: AppState.lessonCover
    })
    return {
      state
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="col-4">
    <div class="card bg-cool-gray text-white p-1">
      <h4>Month {{ state.month + 1 }}</h4>
      <span>{{ list.lessonName }}</span>
    </div>
  </div>

  <div class="row justify-content-center align-content-center text-center py-3">
    <div class="col-4">
      <!-- params lesson name vvvvvvv TODO-->
      <router-link :to="list.lessonName">
        <img :src="getImgUrl(state.list)" alt="" class="img-fluid">
      </router-link>
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

<style>

</style>

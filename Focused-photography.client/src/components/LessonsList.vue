<template>
  <div class="row flex-column p-4">
    <div class="lesson-title rounded-xl bg-cool-gray text-white mb-3 p-1">
      <p class="t-lg m-0">
        Month {{ state.month + 1 }}
      </p>
      <span v-if="state.account.lessons >= state.month">{{ list }}</span>
    </div>

    <div class="col p-0" v-if="state.account.lessons >= state.month + 1">
      <router-link :to="{name:'LessonDetails', params: {name: list, route: 'Home'}}">
        <img class="img-fluid" :src="state.coverPic[state.month]" :alt="list">
      </router-link>
    </div>
    <router-link :to="{name: 'Enroll'}" class="col p-0 d-flex justify-content-center align-items-center" title="purchase next lesson" v-else>
      <img class="img-fluid blur" :src="state.coverPic[state.month]" alt="lesson">
      <img class="position-absolute profile-icon" src="../assets/img/lock.png" alt="lock">
    </router-link>
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
      coverPic: AppState.lessonCover,
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.blur{
  filter: blur(4px);
}
</style>

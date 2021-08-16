<template>
  <div class="col-4 mb-5">
    <div class="rounded-xl bg-cool-gray text-white mb-3">
      <p class="t-lg">
        Learn
      </p>
    </div>
    <a class="">
      <img :src="lessonImg" alt="lesson img" class="img-fluid">
      <div class="bg-warm-gray py-3">
        <p class="t-md">Lorem ipsum dolor sit.</p>
        <span>Lorem ipsum dolor sit amet consectetur.</span>
      </div>
    </a>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
export default {
  props: {
    lessonImg: { type: String, required: true }
  },
  setup(props) {
    const state = reactive({
      index: AppState.lessonCover.findIndex(l => l === props.lessonImg)
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.rounded-xl{
  border-radius: 1rem;
}
</style>

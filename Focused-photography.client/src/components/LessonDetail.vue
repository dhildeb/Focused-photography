<template>
  <div class="col-4">
    <div class="card bg-cool-gray text-white">
      <h4>Learn</h4>
    </div>
    <a class="card-body">
      <img :src="lessonImg" alt="lesson img" class="img-fluid">
      <div class="bg-warm-gray py-3">
        <h5>Lorem ipsum dolor sit.</h5>
        <span>Lorem ipsum dolor sit amet consectetur.</span>
      </div>
    </a>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    lessonImg: { type: String, required: true }
  },
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

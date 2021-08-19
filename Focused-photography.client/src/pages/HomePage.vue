<template>
  <!-- video -->
  <div class="container-fluid mt-5 embed-responsive embed-responsive-16by9 p-0">
    <div class="row my-5 ">
      <video
        class="img-fluid"
        title="Focused Main Video"
        autoplay
        muted
        loop
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2FFinal-Focused-video.mp4?alt=media&token=f5d9c73d-703b-40ff-9873-1f62b34fcd01" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">

</style>

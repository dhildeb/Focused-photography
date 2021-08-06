<template>
  <!-- video -->
  <div class="container-fluid header-border mt-5 embed-responsive embed-responsive-16by9 p-0">
    <div class="row my-5 ">
      <video
        class="img-fluid"
        title="Focused Main Video"
        autoplay
      >
        <source src="" type="video/mp4">
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

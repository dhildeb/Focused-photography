<template>
  <div class="col-2 my-3 mx-3 p-0">
    <a href="">
      <img :src="pic.picture" alt="" class="img-fluid thumbnail" :title="pic.title">
    </a>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    pic: { type: Object, required: true }
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

<style scoped>
.thumbnail{
    object-fit: cover;
    max-height: 20vh;
    transition: all .5s linear;
}
.thumbnail:hover{
  transform: scale(1.1);
}
</style>

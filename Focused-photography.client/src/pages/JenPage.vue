<template>
  <!-- jen -->
  <div class="container-fluid my-5">
    <div class="row justify-content-center bg-white">
      <div :class="state.bag ? 'col-4' : 'col-4 d-none'">
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2F8.jpg?alt=media&token=3f9793dc-d6f5-48ff-90e4-8f523be45183" alt="camera bag">
      </div>
      <div class="col-4 self-img d-flex flex-column flex-wrap align-content-between">
        <div class="row">
          <button class="col-6 text-left" @click="state.bag=!state.bag, state.jen=false">
            <p class="t-lg">
              Whats In My Bag
            </p>
          </button>
          <button class="col-6 text-right" @click="state.jen=!state.jen, state.bag=false">
            <p class="city-font position-absolute t-lg">
              about
            </p>
            <p class="pro-B-font t-lg">
              JENNIFER
            </p>
          </button>
        </div>
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fself.jpg?alt=media&token=4847c646-8bb2-4ce9-a873-d8c0c5ebfeb7" alt="jen">
      </div>
      <div :class="state.jen ? 'col-4' : 'col-4 d-none'">
        <p class="t-lg">
          About Jenifer
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur neque natus tempora delectus quas
          voluptatum ducimus minus assumenda error, ullam eveniet deleniti perspiciatis dolores? Pariatur aspernatur qui
          perferendis quis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi molestias
          magni aliquam. Debitis sapiente magnam ut odio earum labore deleniti blanditiis saepe facere? Esse explicabo
          dolor soluta in expedita!
        </p>
      </div>
    </div>

    <div class="row bg-pink"></div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Jen',
  setup() {
    const state = reactive({
      jen: false,
      bag: false
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.bg-pink{
  height:60px;
}
.d-none{
  transition: all 1s linear;
}
</style>

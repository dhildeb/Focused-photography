<template>
  <!-- jen -->
  <div class="container-fluid my-5">
    <div class="row justify-content-around">
      <div class="click z-1" @click="state.bag=!state.bag, state.jen=false">
        <p class="position-absolute pro-B-font t-xl mt-5" v-if="!state.bag">
          What's In My Bag?
        </p>
      </div>
      <div class="click z-1 mr-xl" @click="state.jen=!state.jen, state.bag=false">
        <div>
          <p class="position-absolute city-font t-xxxl mt-3 ml-1" v-if="!state.jen">
            about
          </p>
          <p class="position-absolute pro-B-font t-xl mt-5 ml-4" v-if="!state.jen">
            JENNIFER
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center bg-white">
      <div :class="state.bag ? 'col-4' : 'col-4 d-none'">
        <img class="img-fluid bag" src="../assets/img/bag.png" alt="camera bag">
      </div>
      <div class="self-img d-flex flex-column flex-wrap align-content-between">
        <img class="img-fluid jen" src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fself.jpg?alt=media&token=4847c646-8bb2-4ce9-a873-d8c0c5ebfeb7" alt="jen">
      </div>
      <div :class="state.jen ? 'col-4' : 'col-4 d-none'">
        <p class="position-absolute text-focus-dark city-font t-xxxl mt-3 ml-1">
          about
        </p>
        <p class="position-absolute pro-B-font t-xl mt-5 ml-4">
          JENNIFER
        </p>
        <p class="mt-5 pt-5 neutra-font text-focus-dark">
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

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.bg-pink{
  height:60px;
}
.d-none{
  transition: all 1s linear;
}
.jen{
  object-fit: cover;
  height: 60vh;
}
.bag{
  transform: scale(1.5);
  margin-top: 4rem;
}
.z-1{
  z-index: 1;
}
.mr-xl{
  margin-right: 22vw;
}
.ml-xl{
  margin-left: 22vw;
}
</style>

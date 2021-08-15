<template>
  <!-- jen -->
  <div class="container-fluid my-5">
    <div class="row justify-content-center bg-white" style="height:500px;">
      <div id="bag" class="col-4 d-none">
        <!-- <img class="img-fluid" src="/img/8.jpg" alt="" style="height:500px;"> -->
      </div>
      <div id="self" class="col-4 self-img d-flex flex-column flex-wrap align-content-between">
        <div class="row">
          <button id="bagButton" class="col-6 text-left bg-transparent border-transparent slide" onclick="showBag()">
            <h1 class="">
              Whats In My Bag
            </h1>
          </button>
          <button id="jenButton" class="col-6 text-right bg-transparent border-transparent slide" onclick="showJen()">
            <h1 class="city-font position-absolute" style="top: -30px;left: 4px;">
              about
            </h1>
            <h1 class="pro-B-font">
              JENNIFER
            </h1>
          </button>
        </div>
      </div>
      <div id="jen" class="col-4 d-none">
        <h1>About Jenifer</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur neque natus tempora delectus quas
          voluptatum ducimus minus assumenda error, ullam eveniet deleniti perspiciatis dolores? Pariatur aspernatur qui
          perferendis quis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi molestias
          magni aliquam. Debitis sapiente magnam ut odio earum labore deleniti blanditiis saepe facere? Esse explicabo
          dolor soluta in expedita!
        </p>
      </div>
    </div>

    <div class="row bg-pink" style="height:60px;"></div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Jen',
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

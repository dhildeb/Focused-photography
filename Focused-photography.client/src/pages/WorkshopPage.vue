<template>
  <!-- about workshop -->

  <div class="container my-5">
    <div class="row p-5 justify-content-end">
      <p class="city-font position-absolute p-3 m-about pr-5">
        about
      </p>
      <div class="col-12 text-right p-0 mt-workshop">
        <p class="pro-B-font t-xxl">
          THE WORKSHOP
        </p>
      </div>
    </div>

    <div class="row">
      <div class="embed-responsive embed-responsive-16by9">
        <video title="About Workshop Video">
          <!-- autoplay TODO-->
          <source src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2FFocus-Photography-Workshop-V3.mp4?alt=media&token=2b8eb88a-b8f5-4e31-9e14-b116ebe64b5c"
                  title="About Workshop Video"
                  autoPlay
                  controls="controls"
                  @click="play()"
          >
        </video>
      </div>
    </div>

    <div class="row p-5 t-lg">
      <p class="city-font position-absolute p-0 pl-3">
        what
      </p>
      <div class="col-12 text-left pt-5 mt-3 ml-4">
        <p class="pro-B-font t-xxl">
          TO EXPECT
        </p>
      </div>
    </div>

    <div class="row pt-3 pb-5 pro-font">
      <li class="p-3">
        You will <b>LEARN NEW SKILLS</b> every month in a virtual class taught by a professional
        photographer.
      </li>
      <li class="p-3">
        You will have <b>DOWNLOADABLE REFERENCE MATERIALS</b> and worksheets to refer back to.
      </li>
      <li class="p-3">
        You will gain confidence each month by participating in <b>STEP-BY-STEP ASSIGNMENTS.</b>
      </li>
      <li class="p-3">
        You will have <b>SUPPORT AND ENCOURAGEMENT</b> all along the way. I want you to succeed!
      </li>
      <li class="p-3">
        You will get <b>PERSONAL, INDIVIDUALIZED FEEDBACK</b> on your images and answers to your
        questions.
      </li>
      <li class="p-3">
        You will have <b>ONGOING ACCESS</b> to the class gallery so you can learn from what other's have
        asked.
      </li>
      <li class="p-3">
        You can <b>EXPECT TO BE AMAZED</b> at your growth by the end of the course.
      </li>
    </div>
  </div>
  <!-- img -->
  <div class="container-fluid dandilion" :style="{'background-image': 'url('+state.dandilion+')'}">
    <div class="row">
      <div class="col-2"></div>
      <img src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fquote.png?alt=media&token=dc2440e2-4c9b-43a4-a0c6-519f42c279f2" style="height: 480px;" alt="quote">
    </div>
  </div>
  <!-- why it works -->
  <div class="container">
    <div class="row p-4 justify-content-end mr-5 pr-5">
      <p class="city-font position-absolute p-3 mr-5 pr-5">
        why
      </p>
      <div class="col-12 text-right pt-5 mt-4">
        <p class="pro-B-font t-xxl mt-1">
          IT WORKS
        </p>
      </div>
    </div>
    <div class="row pb-5 text-center">
      <p class="double-space">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa harum quidem optio vero rerum explicabo, quis
        maxime qui, fugiat totam alias consequuntur maiores deserunt eligendi tenetur. Tempora exercitationem dolorem
        quae?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, nihil vel maxime vero nostrum qui,
        officia placeat doloremque exercitationem iste veritatis delectus. Beatae, laboriosam nesciunt. Ullam iure
        amet
        consequatur natus!
      </p>
    </div>
    <div class="row p-5 justify-content-around">
      <div class="col-3 p-2">
        <img class="img-fluid" src="https://source.unsplash.com/random/240x120" alt="img">
      </div>
      <div class="col-3 p-2">
        <img class="img-fluid" src="https://source.unsplash.com/random/240x120" alt="img">
      </div>
      <div class="col-3 p-2">
        <img class="img-fluid" src="https://source.unsplash.com/random/240x120" alt="img">
      </div>
      <div class="col-3 p-2">
        <img class="img-fluid" src="https://source.unsplash.com/random/240x120" alt="img">
      </div>
    </div>
  </div>
  <!-- why subscribe -->
  <div class="container-fluid py-5">
    <div class="row justify-content-center p-5">
      <p class="position-absolute city-font p-3 m-why">
        why
      </p>
      <div class="col-12 p-5">
        <p class="pro-B-font text-center t-xxl mt-4">
          SUBSCRIBE?
        </p>
      </div>
    </div>

    <div class="row text-center bg-warm-gray py-5">
      <div class="col-4">
        <b>Lorem, ipsum.</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident saepe laborum iure repellat
          inventore, assumenda illum harum. Quasi accusamus molestias animi eius consequuntur aut modi inventore
          maxime
          hic ipsam.
        </p>
      </div>
      <div class="col-4">
        <b>Expedita, eos.</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident saepe laborum iure repellat
          inventore, assumenda illum harum. Quasi accusamus molestias animi eius consequuntur aut modi inventore
          maxime
          hic ipsam.
        </p>
      </div>
      <div class="col-4">
        <b>Architecto, unde.</b>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident saepe laborum iure repellat
          inventore, assumenda illum harum. Quasi accusamus molestias animi eius consequuntur aut modi inventore
          maxime
          hic ipsam.
        </p>
      </div>
    </div>

    <div class="row p-5"></div>

    <div class="row bg-cool-gray p-3"></div>

    <div class="row pt-5 text-center justify-content-center">
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, quae!</span>
    </div>

    <div class="row pb-5 pt-1 justify-content-center">
      <button class="btn btn-secondary">
        Lorem, ipsum.
      </button>
    </div>

    <div class="row bg-cool-gray p-3"></div>
  </div>
  <!-- FAQ -->
  <div class="container">
    <div class="row justify-content-center pb-3">
      <p>Lorem, ipsum dolor.</p>
    </div>
    <div class="row pb-5">
      <li class="p-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, sint. Quibusdam illo dolor
        facere
        id, corporis placeat molestias, nobis, saepe praesentium ex sequi deleniti perferendis tempore pariatur
        quisquam
        delectus fugit!
      </li>
      <li class="p-2">
        Impedit, dolorem ullam? Atque accusantium, impedit cumque repellat dolore, et quo ipsa similique
        accusamus fuga vero tempore alias quidem asperiores labore ex veniam explicabo nostrum recusandae voluptatibus
        totam. Non, eos.
      </li>
      <li class="p-2">
        Quaerat aperiam quis voluptates a ipsam accusantium atque voluptatibus iste, reprehenderit
        aliquid, sunt quae nihil fugit illum rem quia ratione soluta consectetur dolorum consequatur. Enim a
        voluptates
        quod cum totam.
      </li>
      <li class="p-2">
        Obcaecati magnam nostrum ipsum consequuntur excepturi quia eos, labore animi harum, accusamus
        beatae commodi quidem culpa ipsam unde. Dolores iusto dolor aspernatur culpa similique neque, deleniti
        laudantium velit est illum!
      </li>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Workshop',
  setup() {
    const state = reactive({
      dandilion: 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fimage.jpg?alt=media&token=9543cfde-de4f-49d0-a31c-f490df785748'
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.dandilion{
  background-size: cover;
  background-repeat: no-repeat;
}
.m-about{
  margin-right: 7.4rem;
}
.m-why{
  margin-right: 10rem;
}
.mt-workshop{
  margin-top: 5.1rem;
}
.double-space{
  line-height: 2;
}
</style>

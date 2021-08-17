<template>
  <!-- about workshop -->

  <div class="container my-5">
    <div class="row justify-content-end">
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

    <div class="row pt-5 t-lg ml-5 pl-5">
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
    <div class="row p-4 justify-content-end mr-xl">
      <p class="city-font position-absolute p-3 mr-5 pr-5">
        why
      </p>
      <div class="col-12 text-right pt-5 mt-4">
        <p class="pro-B-font t-xxl mt-1">
          IT WORKS
        </p>
      </div>
    </div>
    <div class="row pb-5 mx-5 px-5">
      <p class="double-space neutra-font t-lg">
        It works because we tackle one aspect of photography at a time. You will have time to practice each new skill before moving on to the next. It works because we take a LOT of pictures which is how most of us learn - by doing! It works because each of the twelve lessons in the workshop are designed around the SMART goal-setting model: conent is Specific, Manageable, Achievable, Realistic and Time-bound.
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
  <div class="container-fluid bg-warm-gray">
    <div class="row justify-content-center p-0 pt-3">
      <p class="position-absolute city-font p-3 m-why">
        why
      </p>
      <div class="col-12">
        <p class="pro-B-font text-center t-xxl mt-4">
          SUBSCRIBE?
        </p>
      </div>
    </div>

    <div class="row text-center neutra-font">
      <div class="col-4">
        <b>Education</b>
        <p>
          For beginning and intermediate photographers alike. Our exclusive monthly content includes video instruction, downloadable PDF handouts for easy reference, and assignments that will help you to create frame-worthy photos.
        </p>
      </div>
      <div class="col-4">
        <b>Support</b>
        <p>
          One-on-one mentoring from a certified professional photographer. Jennifer will answer your questions, give feedback on your images, as well as offer the support and encouragement normally reserved for the physical classroom.
        </p>
      </div>
      <div class="col-4">
        <b>Inspiration</b>
        <p>
          I will challenge you, inspire you, and push you to learn the skill and art of photography. I hope to get you excited to try new techniques, to look at the world around you a little differently and to realize that you can do this too!
        </p>
      </div>
    </div>

    <div class="row p-4 bg-white"></div>

    <div class="row bg-cool-gray p-3"></div>

    <div class="row py-3 text-center justify-content-center neutra-font t-xl bg-white">
      <span>Are you ready to learn the art of photography?</span>
    </div>

    <div class="row pb-5 pt-1 justify-content-center bg-white">
      <button class="btn bg-focus-dark rounded-xl text-white pro-font"
              @click="router.push('enroll')"
      >
        GRAB YOUR SPOT!
      </button>
    </div>

    <div class="row bg-cool-gray p-3"></div>
  </div>
  <!-- FAQ -->
  <div class="container">
    <div class="row justify-content-center p-5">
      <p class="city-font">
        frequently asked questions:
      </p>
    </div>
    <div class="row pb-5 neutra-font">
      <span class="t-lg">> Q: Do I need to have a fancy DSLR camera to take this course?</span>
      <p class="p-2">
        Yes and No. You do need to have a camera on which you can adjust the settings manually. You don't have to have a fancy camera though! Start simple. I'm a big believer in out-growing your gear. I have linked gear that I recommend in several price points <router-link class="decorate" :to="{name: 'Jen'}" title="About Jen">
          here
        </router-link>.
      </p>
      <span class="t-lg">> Q: Will the course teach how to enhance my images in photoshop?</span>
      <p class="p-2">
        The focus of this workshop is what happens in the camera, rather than what you do with the images in photoshop. In fact, I will be better able to help you improve your photos if you post them with little or no editting in photoshop. Learning to get your photo right in camera is our goal. Photoshop can then be used to enhance your images rather than "fix" them. When you're ready to tackle photoshop, Scott Kelby's books are golden!
      </p>
      <span class="t-lg">> Q: Will you be talking about business of photography in the course?</span>
      <p class="p-2">
        We stay focused on the are of photography. I can point you to several fantastic resources that will guide you in starting a business if you are interested.
      </p>
      <span class="t-lg">> Q: Why is the workshop a year long?</span>
      <p class="p-2">
        I have deliberately timed the workshop to span the course of a year. Almost everyone learns best by doing, so I've given you a manageable amount of information each month... and then I've given you the time to deliberately practice the skills taught. You'll learn by seeing the examples, hearing the lessons, and then by doing the exercises.
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
  name: 'Workshop',
  setup() {
    const router = useRouter()
    const state = reactive({
      dandilion: 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fimage.jpg?alt=media&token=9543cfde-de4f-49d0-a31c-f490df785748'
    })
    return {
      state,
      router
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
  margin-top: -3rem;
}
.mt-workshop{
  margin-top: 5.1rem;
}
.double-space{
  line-height: 2;
}
.mr-xl{
  margin-right: 18rem;
}
.decorate{
 color: #1a0dab;
}
.decorate:hover{
 text-decoration: underline;
 text-decoration-color: #1a0dab;
 color: #1a0dab;
}
</style>

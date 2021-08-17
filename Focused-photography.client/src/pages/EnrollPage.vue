<template>
  <!-- header -->
  <div class="container-fluid bird" :style="{'background-image': 'url(https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fbird.jpg?alt=media&token=7bf256b3-1d6d-4b12-8fb3-e9df7c90071f)'}">
    <div class="row p-5 ml-5">
      <p class="city-font position-absolute pl-4">
        enrollment
      </p>
      <div class="col-12 text-left pro-B-font p-5 mt-3">
        <p class="t-xxl">
          OPTIONS
        </p>
      </div>
    </div>

    <div class="row pb-5 pl-5">
      <div class="col-2"></div>
      <div class="col-4">
        <h4>
          Lorem ipsum dolor sit.
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit similique, minus consectetur tempore quod
          distinctio error dolorum accusamus officia consequatur asperiores id quam officiis, autem magni aperiam nemo
          rerum in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia porro id labore rem quod fugiat,
          error corporis veniam distinctio tempore placeat, non vitae nam at accusantium aliquid, deserunt ullam!
        </p>
      </div>
    </div>

    <div class="row p-1 px-3 pl-5">
      <div class="col-2"></div>
      <b>Choose a plan</b>
    </div>

    <div class="row pl-5">
      <div class="col-2"></div>
      <div class="col-6">
        <div class="dropdown row">
          <button class="btn btn-block text-left btn-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
          >
            options
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">plan 1</a>
            <a class="dropdown-item" href="#">plan 2</a>
            <a class="dropdown-item" href="#">plan 3</a>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
      <div class="col-2"></div>
      <button class="col-2 btn bg-yellow text-white p-1">
        SIGN ME UP!!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Enroll'
}
</script>

<style scoped>
.bird{
  background-size: cover;
  background-repeat: no-repeat;
}
</style>

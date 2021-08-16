<template>
  <!-- header -->
  <div class="row p-5 t-lg">
    <p class="city-font position-absolute p-3">
      enrollment
    </p>
    <div class="col-12 text-left pro-B-font p-5">
      <p>OPTIONS</p>
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
</template>

<script>
export default {
  name: 'Enroll'
}
</script>

<style>

</style>

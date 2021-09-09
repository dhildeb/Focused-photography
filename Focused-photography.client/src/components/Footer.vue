<template>
  <div class="container-fluid">
    <div class="row footer text-center align-content-center justify-content-center px-0 py-4">
      <h1></h1>
    </div>

    <div class="row justify-content-center align-content-center text-focus-dark pt-5">
      <div class="col-8 text-center">
      </div>
    </div>

    <div class="row justify-content-center align-content-center mb-5">
      <div class="col-2 align-self-center p-0">
        <input v-model="state.info.firstName" type="text" class="form-control rounded-xl" placeholder="First name">
      </div>
      <div class="col-2 align-self-center p-1">
        <input v-bind="state.info.lastName" type="text" class="form-control rounded-xl" placeholder="Last name">
      </div>
      <div class="col-2 align-self-center p-0">
        <input v-bind="state.info.email" type="text" class="form-control rounded-xl" placeholder="Email Address">
      </div>
      <div class="col-2">
        <button class="btn rounded-xl bg-teal" @click="register()">
          Sign Me Up!
        </button>
      </div>
    </div>

    <div class="row justify-content-center align-content-center text-center mb-5 ">
      <div class="col-1 m-2 d-flex justify-content-center">
        <a href="" target="_blank" class="circle text-white bg-yellow d-flex align-content-bottom justify-content-center py-2">
          <i class="mdi mdi-facebook zoom icon pt-1" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-1 m-2 d-flex justify-content-center">
        <a href="https://www.instagram.com/jennifer.ashby.photography/?hl=en" target="_blank" class="circle text-white bg-yellow d-flex align-content-bottom justify-content-center py-2">
          <i class="mdi mdi-instagram zoom icon pt-1" aria-hidden="true"></i>
        </a>
      </div>
      <div class="col-1 m-2 d-flex justify-content-center">
        <a href="" target="_blank" class="circle text-white bg-yellow d-flex align-content-bottom justify-content-center py-2">
          <i class="mdi mdi-pinterest zoom icon pt-1" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { accountService } from '../services/AccountService'
export default {
  setup() {
    const state = reactive({
      info: {
        firstName: '',
        lastName: '',
        email: ''
      }
    })
    return {
      state,
      register() {
        accountService.register(state.info)
      }
    }
  }
}
</script>

<style scoped>
.zoom{
  transform: scale(2);
}
.icon{
  margin-bottom: -1rem;
}
</style>

<template>
  <div class="row py-5 header-border justify-content-end neutra-font d-none d-lg-flex bg-white mt-5">
    <div class="col-4">
      <router-link :to="{ name: 'Home' }" title="Home Page">
        <img src="../assets/img/logo.jpg" class="logo bg-white px-2 ml-5" alt="Focused logo">
      </router-link>
    </div>
    <div class="col align-self-center btn-group">
      <span type="button"
            class="btn btn-white text-teal"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
      >
        ABOUT
      </span>
      <div class="dropdown-menu">
        <router-link :to="{name: 'Workshop'}" class="dropdown-item text-teal">
          ABOUT WORKSHOP
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Jen'}" class="dropdown-item text-teal">
          ABOUT JENIFER
        </router-link>
      </div>
    </div>
    <div class="col text-center align-self-center">
      <a class="text-teal" href="https://www.instagram.com/jennifer.ashby.photography/?hl=en" target="_blank">
        BLOG
      </a>
    </div>
    <div class="col text-center align-self-center">
      <router-link :to="{name: 'Gallery'}" class="text-teal">
        JENNIFER'S GALLERY
      </router-link>
    </div>
    <div class="col text-center align-self-center">
      <router-link :to="{name: 'Enroll'}" class="text-teal">
        ENROLL
      </router-link>
    </div>
    <div class="col text-center align-self-center text-nowrap">
      <router-link class="text-teal" :to="{name: 'Account'}" v-if="!state.account.id">
        MEMBER LOGIN
      </router-link>
      <router-link class="text-teal" :to="{name: 'Lessons'}">
        MY LESSONS
      </router-link>
    </div>
    <div class="col-2">
    </div>
  </div>

  <div class="row py-5 justify-content-end neutra-font d-lg-none bg-white">
    <div class="col">
      <router-link :to="{ name: 'Home' }" title="Home Page">
        <img src="../assets/img/logo.jpg" class="logo bg-white px-2 ml-5" alt="Focused logo">
      </router-link>
    </div>
    <div class="col"></div>
    <div class="col-3 col-sm-2 d-flex jusify-content-end">
      <span type="button"
            class="btn btn-white text-teal d-flex justify-content-end"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
      >
        <i class="fa fa-bars fa-2x" title="Options"></i>
      </span>
      <div class="dropdown-menu text-center">
        <router-link :to="{name: 'Workshop'}" class="dropdown-item text-teal">
          ABOUT WORKSHOP
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Jen'}" class="dropdown-item text-teal">
          ABOUT JENIFER
        </router-link>
        <div class="dropdown-divider"></div>
        <a class="text-teal dropdown-item" href="https://www.instagram.com/jennifer.ashby.photography/?hl=en" target="_blank">
          BLOG
        </a>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Gallery'}" class="dropdown-item text-teal">
          GALLERY
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Enroll'}" class="dropdown-item text-teal">
          ENROLL
        </router-link>
        <div class="dropdown-divider"></div>
        <button @click="login">
          login
        </button>
        <router-link class="text-teal dropdown-item" :to="{name: 'Account'}" v-if="!state.account.id">
          Login
        </router-link>
        <router-link class="text-teal dropdown-item" :to="{name: 'Lessons'}" v-if="state.account.id">
          MY LESSONS
        </router-link>
      </div>
    </div>
  </div>

  <div class="row header-gray-border text-cool-gray justify-content-end px-5 neutra-font">
    <p class="d-sm-flex d-none">
      starting at $47/month
    </p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService'

export default {
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      view: computed(() => AppState.viewPort)
    })
    return {
      state,
      async login() {
        await AuthService.loginWithPopup()
      }
    }
  }
}
</script>

<style scoped>
span{
  cursor: pointer;
  transition: all .1s linear;
}
span:hover{
  color: var(--yellow);
}
a:hover{
  color: var(--yellow);
}
.router-link-exact-active{
  color: var(--yellow);
}
</style>

<template>
  <div class="row py-5 header-border justify-content-end neutra-font d-none d-lg-flex bg-white mt-5">
    <div class="col-4">
      <router-link :to="{ name: 'Home' }" title="Home Page">
        <img src="../assets/img/logo.jpg" class="logo bg-white px-2 ml-5" alt="Focused logo">
      </router-link>
    </div>
    <div class="col align-self-center btn-group">
      <span type="button"
            class="btn btn-white "
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
      >
        ABOUT
      </span>
      <div class="dropdown-menu">
        <router-link :to="{name: 'Workshop'}" class="dropdown-item ">
          ABOUT WORKSHOP
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Jen'}" class="dropdown-item ">
          ABOUT JENIFER
        </router-link>
      </div>
    </div>
    <div class="col text-center align-self-center">
      <a class="" href="https://www.instagram.com/jennifer.ashby.photography/?hl=en" target="_blank">
        BLOG
      </a>
    </div>
    <div class="col text-center align-self-center">
      <router-link :to="{name: 'Gallery'}" class=" text-nowrap">
        JENNIFER'S GALLERY
      </router-link>
    </div>
    <div class="col text-center align-self-center">
      <router-link :to="{name: 'Enroll'}" class="">
        ENROLL
      </router-link>
    </div>
    <div class="col text-center align-self-center text-nowrap pr-5">
      <a class=" click" @click="login" v-if="!state.account.id">
        MEMBER LOGIN
      </a>

      <img type="button"
           class=" rounded-circle profile-icon"
           data-toggle="dropdown"
           aria-haspopup="true"
           aria-expanded="false"
           title="Options"
           :src="state.account.picture"
           alt="profile picture"
           v-else
      >
      <div class="dropdown-menu">
        <router-link class="dropdown-item " :to="{name: 'Lessons'}">
          MY LESSONS
        </router-link>
        <div class="dropdown-divider"></div>
        <span class="dropdown-item " @click="logout">
          LOGOUT
        </span>
      </div>
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
            class="btn btn-white  d-flex justify-content-end"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
      >
        <i class="fa fa-bars fa-2x" title="Options"></i>
      </span>
      <div class="dropdown-menu text-center">
        <router-link :to="{name: 'Workshop'}" class="dropdown-item ">
          ABOUT WORKSHOP
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Jen'}" class="dropdown-item ">
          ABOUT JENIFER
        </router-link>
        <div class="dropdown-divider"></div>
        <a class=" dropdown-item" href="https://www.instagram.com/jennifer.ashby.photography/?hl=en" target="_blank">
          BLOG
        </a>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Gallery'}" class="dropdown-item ">
          GALLERY
        </router-link>
        <div class="dropdown-divider"></div>
        <router-link :to="{name: 'Enroll'}" class="dropdown-item ">
          ENROLL
        </router-link>
        <div class="dropdown-divider"></div>
        <span class=" dropdown-item" @click="login" v-if="!state.account.id">
          MEMBER LOGIN
        </span>
        <div v-else>
          <router-link class=" dropdown-item" :to="{name: 'Lessons'}">
            MY LESSONS
          </router-link>
          <div class="dropdown-divider"></div>
          <span class="dropdown-item" @click="logout">
            LOGOUT
          </span>
        </div>
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
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
span{
  cursor: pointer;
  transition: all .1s linear;
  color: var(--teal)
}
span:hover{
  color: var(--yellow);
}
a{
  color: var(--teal)
}
a:hover{
  color: var(--yellow);
}
.router-link-exact-active{
  color: var(--yellow);
}
.profile-icon{
  height: 38px;
}
</style>

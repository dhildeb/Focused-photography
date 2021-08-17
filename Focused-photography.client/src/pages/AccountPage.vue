<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <button class="btn btn-success" @click="login" v-if="!account.id">
    login
  </button>
  <button class="btn btn-danger" @click="logout" v-if="account.id">
    logout
  </button>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  name: 'Account',
  setup() {
    onMounted(() => {
      AppState.viewPort = 'profile'
    })
    return {
      account: computed(() => AppState.account),
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      },
      async login() {
        await AuthService.loginWithPopup()
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

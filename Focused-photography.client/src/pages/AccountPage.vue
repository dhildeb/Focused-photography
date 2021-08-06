<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <button class="btn btn-danger" @click="logout">
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

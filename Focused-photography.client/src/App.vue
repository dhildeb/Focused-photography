<template>
  <body class="container-fluid p-0">
    <header>
      <Header />
    </header>
    <main class="d-flex flex-column">
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </body>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px var(--teal);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--yellow);
  border-radius: 25px;
}
body{
  user-select: none;
}
</style>

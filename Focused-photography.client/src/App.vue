<template>
  <body class="container-fluid p-0">
    <header>
      <Header />
    </header>
    <main class="d-flex flex-column bg-white">
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
// *{
//   outline: red 1px solid;
// }

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
@font-face {
  font-family: 'city_streetwearlight';
  src: local('city_streetwearlight'),
  url('./assets/fonts/citystreetwear-light-webfont.woff') format('woff');
}
.city-font{
  font-family: 'city_streetwearlight';
  font-size: 60pt;
}

@font-face {
  font-family: 'myriad-pro-B';
  src: local('myriad-pro-B'),
  url('./assets/fonts/MyriadPro-Bold.woff') format('woff');
}
.pro-B-font{
  font-family: 'myriad-pro-B';
  font-size: 12pt;
}

@font-face {
  font-family: 'myriad-pro';
  src: local('myriad-pro'),
  url('./assets/fonts/MyriadPro-Regular.woff') format('woff');
}
.pro-font{
  font-family: 'myriad-pro';
  font-size: 12pt;
}

@font-face {
  font-family: 'neutra-text';
  src: local('neutra-text'),
  url('./assets/fonts/neutratext-light.woff') format('woff');
}
.neutra-font{
  font-family: 'neutra-text';
  font-size: 12pt;
}
</style>

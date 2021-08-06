<template>
  <AboutJen v-if="state.view === 'jen'" />
  <section>
    <AboutWorkshop v-if="state.view === 'aboutWorkshop'" />
  </section>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'About',
  setup() {
    const state = reactive({
      view: computed(() => AppState.viewPort)

    })
    return {
      state
    }
  }
}
</script>

<style>

</style>

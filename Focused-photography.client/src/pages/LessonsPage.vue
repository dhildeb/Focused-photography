<template>
  <div class="container-fluid">
    <div class="row header-border mt-5">
      <div class="col-8 p-0">
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fpic-yb.jpg?alt=media&token=17572a0b-08ea-47df-adbb-b8e91c34dc8b" alt="girl holding camera">
      </div>
      <div class="col-4 text-cool-gray text-center align-self-center p-5">
        <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fquote-lesson-page.png?alt=media&token=15319024-b442-4cec-be20-9c5b6fc3bc63" alt="">
      </div>
    </div>

    <div class="row bg-cool-gray text-center align-content-center justify-content-center px-0">
    </div>
  </div>

  <div class="container-fluid my-5 px-5 bg-white">
    <div class="row justify-content-center align-content-center text-center text-focus-dark pt-5">
      <div class="col-4 pb-3" :title="list" v-for="list in state.list" :key="list">
        <LessonsList :list="list" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import { accountService } from '../services/AccountService'
export default {
  name: 'Lessons',
  setup() {
    const router = useRouter()
    const state = reactive({
      list: computed(() => AppState.lessonName)
    })
    onMounted(async() => {
      if (await accountService.checkLessonsAccess(1)) {
        router.push({ name: 'Home' })
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped>
.bg-cool-gray{
  height: 80px;
}
</style>

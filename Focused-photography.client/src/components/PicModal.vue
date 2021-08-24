<template>
  <div class="modal fade" id="picModal" tabindex="-1" aria-labelledby="picModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-center">
          <!-- <img class="img-fluid profile-icon rounded-circle click" :title="state.pic.creator.name" :src="state.pic.creator.picture" :alt="state.pic.creator.name"> -->
          <h4 class="m-auto">
            {{ state.pic.name }}
          </h4>
          <i class="mdi mdi-close-box text-danger click zoom" title="Close" @click="close"></i>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <img class="col-md-6 col-12 img-fluid img" :src="state.pic.img" :alt="state.pic.name">
              <div class="col flex-grow-1">
                <div class="row">
                  <p class="p-3">
                    {{ state.pic.description }}
                  </p>
                </div>
                <div class="row pb-3">
                  <div class="dropdown text-center my-4 align-self-center m-auto pb-3" v-if="state.account.id">
                  </div>
                </div>
                <div class="row justify-content-between align-content-end bottom w-100">
                  <div class="text-center align-self-end">
                  </div>
                  <i class="mdi mdi-delete text-danger click align-self-end zoom" title="Delete pic" v-if="state.pic.creatorId === state.account.id"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      pic: computed(() => AppState.activePic),
      account: computed(() => AppState.account)
    })
    return {
      state,
      close() {
        $('#keepModal').modal('toggle')
      }
    }
  }
}
</script>

<style>

</style>

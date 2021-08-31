<template>
  <GalleryPic v-for="pic in state.pics" :key="pic.id" :pic="pic" />
  <form @submit.prevent="upload">
    <div class="col">
      <div class="form-group">
        <input type="text"
               class="form-control"
               name=""
               id="title"
               aria-describedby="helpId"
               placeholder="new title..."
               v-model="state.newPost.body"
               required
        >
      </div>
    </div>
    <div class="col">
      <div v-if="state.image">
        <img :src="state.imageUrl" alt="">
      </div>
      <div v-else>
        <img id="img" class="selected preview" :src="state.img" alt="">
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <div class="form-group">
        <input type="file" ref="fileInput" accept="image/*" @change="filePicked">
      </div>
      <button v-if="state.selected" class="btn btn-danger" type="submit">
        Upload
      </button>
    </div>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { fireBaseLogic } from '../services/FireBaseLogic'
import { pictureservice } from '../services/PictureService'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newPost: [],
      selected: false,
      uploadReady: false,
      printing: false,
      printImg: '',
      files: [],
      img: '',
      lessonNum: computed(() => AppState.lessonName.indexOf(route.params.name) + 1),
      pics: computed(() => AppState.pictures.filter(p => p.lesson === state.lessonNum)),
      account: computed(() => AppState.account)
    })
    return {
      state,
      route,
      filePicked(e) {
        state.files = e.target.files
        // NOTE establish a reader to read the file that we pulled, it waits for the reader to load and then grabs the id and replaces it with our img
        const reader = new FileReader()
        reader.onload = function() {
          state.img = reader.result
        }
        // NOTE this method is very particular it must be readAsDataURL, it's also a built in js method with readers, it allows us to return the contents of a file as a base64 encoded string
        reader.readAsDataURL(state.files[0])
        state.selected = true
      },
      // <----------------------upload proccess---------------------------->
      async upload() {
        const imgName = state.newPost.body
        const res = await fireBaseLogic.upload(imgName, state.files[0])
        state.newPost.imgUrl = res.url
        state.selected = false
        state.uploadReady = true
        const picture = {
          picture: res.url,
          lesson: state.lessonNum,
          title: state.newPost.body
        }
        await pictureservice.createPic(picture)
        state.img = ''
        state.newPost.body = ''
      }
    }
  }
}
</script>

<style>

</style>

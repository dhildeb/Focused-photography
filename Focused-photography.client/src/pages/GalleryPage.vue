<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-8 align-self-center p-4">
        <p class="text-danger">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident excepturi
          beatae incidunt non deleniti, iure enim ipsum magnam quo consectetur cumque? Sint amet eos nulla distinctio
          tenetur explicabo excepturi!
        </p>
      </div>

      <div class="col-10 text-cool-gray text-center align-self-center p-5">
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
      </div>
    </div>

    <div class="row justify-content-center align-content-center text-center my-3">
      <GalleryPic v-for="pic in state.pics" :key="pic.id" :pic="pic" />
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { fireBaseLogic } from '../services/FireBaseLogic'
import { pictureservice } from '../services/PictureService'
export default {
  name: 'Gallery',
  setup() {
    onMounted(() => {
      AppState.pictures = pictureservice.getAll()
    })
    const state = reactive({
      newPost: [],
      selected: false,
      uploadReady: false,
      printing: false,
      printImg: '',
      files: [],
      img: '',
      pics: computed(() => AppState.pictures),
      // progress bar ?snapshot? FIXME probably a function in upload
      progress: computed(() => AppState.progress * 100)
    })
    //     onMounted(async() => {
    // await pictureservice.getUserPics(jen account ID)
    //     })
    return {
      state,
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
          category: 'Main Gallary',
          title: state.newPost.body
        }
        pictureservice.createPic(picture)
        state.img = ''
        state.newPost.body = ''
      }
    }
  }
}
</script>

<style scoped>
.preview{
  max-height: 50vh;
  max-width: 50vw;
  object-fit: cover;
}
</style>

<template>
  <div class="row">
    <GalleryPic v-for="pic in state.pics" :key="pic.id" :pic="pic" />
  </div>
  <form @submit.prevent="upload" class="row p-5">
    <div class="col-6 mt-3">
      <div class="form-group">
        <textarea
          class="form-control"
          name="comment"
          id="title"
          rows="8"
          aria-describedby="helpId"
          placeholder="SHARE YOUR COMMENTS, QUESTIONS, OR INSIGHTS REGARDING THIS ASSIGNMENT"
          v-model="state.newPost.body"
          required
        ></textarea>
      </div>
    </div>
    <div class="col-6 d-flex justify-content-between mt-3">
      <div class="form-group">
        <label for="pic">DRAG AND DROP IMAGES HERE OR <b>SELECT FROM YOUR COMPUTER</b>
          <input type="file"
                 name="pic"
                 ref="fileInput"
                 accept="image/*"
                 @change="filePicked"
          >
        </label>
      </div>
      <button v-if="state.selected" class="btn btn-danger" type="submit">
        Upload
      </button>
    </div>
    <div class="col">
      <div v-if="state.image">
        <img :src="state.imageUrl" alt="">
      </div>
      <div v-else>
        <img id="img" class="selected preview img-fluid" :src="state.img" alt="">
      </div>
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

<style scoped>
input[type=file]{
  cursor: pointer;
  opacity: 0;
  width: inherit;
  height: inherit;
  position: absolute;
}
label{
  padding: 50px;
  border: black 1px solid;
}
::-webkit-input-placeholder {
  text-align: center;
  padding-top: 70px;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: center;
  padding: 50%;
}

::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
  padding: 50%;
}

:-ms-input-placeholder {
  text-align: center;
  padding: 50%;
}
</style>

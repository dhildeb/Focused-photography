import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  viewPort: null,
  progress: 0,
  lessonName: ['exposure', 'light', 'composition', 'aperture', 'shutter speed', 'composition 2', 'color', 'story', 'composition 3', 'people', 'impact', 'emotion'],
  pictures: [],
  comments: [],
  activePic: ''
})

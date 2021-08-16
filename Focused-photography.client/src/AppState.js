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
  activePic: '',
  lessonPics: {
    exposure: [],
    light: [],
    composition: [],
    aperture: ['https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-1.jpg?alt=media&token=d5e4ea3d-9e1d-40e8-aa06-7c007a642bfd', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-2.jpg?alt=media&token=8c2268c5-d18f-4e22-a585-6932009305b2', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-3.jpg?alt=media&token=a57b28a5-4864-4506-b2ae-83f25c422e8f', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-4.jpg?alt=media&token=1e743b4e-41d0-4604-ae61-7e09e267584c', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-5.jpg?alt=media&token=818412b0-94ab-428a-8cc2-bc1961234f35', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Faperture-6.jpg?alt=media&token=481fc1cd-afa3-4268-a08d-52a8f1018a61'],
    shutterSpeed: [],
    composition2: [],
    color: [],
    story: [],
    composition3: [],
    people: [],
    impact: [],
    emotion: []
  }
})

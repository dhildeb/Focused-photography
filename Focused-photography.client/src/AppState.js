import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  viewPort: null,
  progress: 0,
  lessonName: ['exposure', 'light', 'composition', 'aperture', 'shutter speed', 'composition 2', 'color', 'story', 'composition 3', 'people', 'impact', 'emotion'],
  lessonCover: ['https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%201.jpg?alt=media&token=dc41dbfd-2ddf-4319-934d-563d69d92dc7', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%202.jpg?alt=media&token=b73487a8-37ee-4059-9751-7e6fa51afc49', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%203.jpg?alt=media&token=7221bb3b-12f1-4053-9604-4d18f0d25a48', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%204.jpg?alt=media&token=fefa91d7-5ac6-497d-9a41-bd643529b7f2', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%205.jpg?alt=media&token=4bbbb5de-8e59-4d2f-a3fe-abc0650469d5', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%206.jpg?alt=media&token=e704a4be-c43b-4287-bfe1-dbf1a5532694', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%207.jpg?alt=media&token=970fe2d7-f5a2-4f87-8bb2-fc361c5b20af', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%208.jpg?alt=media&token=241f10fd-4bc3-4a40-a48f-ac54e0ade2b4', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%209.jpg?alt=media&token=e0203282-0499-4c84-bee4-16092f45270a', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%2010.jpg?alt=media&token=eb7c7d6d-71b2-488b-a777-944bda57e7d1', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%2011.jpg?alt=media&token=4ada8efe-8110-4118-af09-b6e609dbfc98', 'https://firebasestorage.googleapis.com/v0/b/focused-47421.appspot.com/o/static%20images%2Fmonth%2012.jpg?alt=media&token=d93301c5-4d0e-4d5c-b840-b26c2321fa04'],
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

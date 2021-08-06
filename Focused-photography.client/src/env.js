import firebase from 'firebase/app'
export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const domain = 'dhild.us.auth0.com'
export const audience = 'https://Focused.com'
export const clientId = 'rJjEkbN34atahtcrYy9qIMP8qDVIgmCx'
require('firebase/storage')

const firebaseConfig = {
  apiKey: 'AIzaSyAzm21N_2R9v6oo4ZtaBM-HOMQikpGRrVg',
  authDomain: 'focused-47421.firebaseapp.com',
  projectId: 'focused-47421',
  storageBucket: 'focused-47421.appspot.com',
  messagingSenderId: '185730941679',
  appId: '1:185730941679:web:25d96f387b6cb22bb7511a',
  measurementId: 'G-8M121E6KSN'
}
firebase.initializeApp(firebaseConfig)
export const storage = firebase.storage()

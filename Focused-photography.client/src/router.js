import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: loadPage('WorkshopPage')
  },
  {
    path: '/jen',
    name: 'Jen',
    component: loadPage('JenPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage')
  },
  {
    path: '/enroll',
    name: 'Enroll',
    component: loadPage('EnrollPage')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: loadPage('GalleryPage')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: loadPage('LessonsPage')
    // beforeEnter: authGuard
  }
  // {
  //   path: '/lessons/{name}',
  //   name: 'LessonDetail',
  //   component: loadPage('LessonDetailPage')
  //   // beforeEnter: authGuard
  // }

]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

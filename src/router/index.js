import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import CoursesPage from '../components/CoursesPage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/courses', name: 'Courses', component: CoursesPage },
  { path: '/contact', name: 'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

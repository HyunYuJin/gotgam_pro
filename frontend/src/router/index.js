import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Index from '../components/IndexPage'
// import Show from '../components/ShowPage'
import MainPage from '../components/container.vue';
import Login from '@/components/login.vue';
import RegionTravel from '@/components/regionTravel.vue';
import MoodTravel from '@/components/moodTravel.vue';
import Registration from '@/components/registration.vue';

export default new Router({
//  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Index
    // },
    // {
    //   path: '/:id',
    //   name: 'show',
    //   component: Show
    // },

    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regiontravel',
      name: 'RegionTravel',
      component: RegionTravel
    },
    {
      path: '/moodtravel',
      name: 'MoodTravel',
      component: MoodTravel
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
  ]
})
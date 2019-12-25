// pages
import MainPage from '@/pages/container.vue';
import RegionTravel from '@/pages/regionTravel.vue';
import GotgamDetail from '@/pages/gotgamDetail.vue';
import MoodTravel from '@/pages/moodTravel.vue';

// components
import Registration from '@/components/registration.vue';
import Login from '@/components/login.vue';
import About from '@/components/about.vue';
import SignUp from '@/components/SignUp.vue';
import myPage from '@/components/mypage.vue';
import myPageDetail from '@/components/myPageDetail.vue';
import myPageUpdate from '@/components/myPageUpdate.vue';

export default [
    {
        path: '/',
        name: 'App',
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

    {
        path: '/regiontravel:id',
        name: 'GotgamDetail',
        component: GotgamDetail
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
    },

    {
        path: '/mypage',
        name: 'myPage',
        component: myPage
    },

    {
        path: '/mypage:id',
        name: 'myPageDetail',
        component: myPageDetail
    },

    {
        path: '/myPageUpdate',
        name: 'myPageUpdate',
        component: myPageUpdate
    }
]

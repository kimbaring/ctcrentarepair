import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/login/HomePage.vue'
import LoginPage from '../views/login/LoginPage.vue'
import RegisterPage from '../views/login/RegisterPage.vue';
import RegisterCustomer from '../views/login/RegisterCustomer.vue';
import RegisterTechnician from '../views/login/RegisterTechnician.vue';
import RegisterRidesharer from '../views/login/RegisterRideSharer.vue';
import RegisterTowCompany from '../views/login/RegisterTowCompany.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/registercustomer',
    name: 'RegisterCustomer',
    component: RegisterCustomer
  },
  {
    path: '/registertechnician',
    name: 'RegisterTechnician',
    component: RegisterTechnician
  },
  {
    path: '/registerridesharer',
    name: 'RegisterRidesharer',
    component: RegisterRidesharer
  },
  {
    path: '/registertowcompany',
    name: 'RegisterTowCompany',
    component: RegisterTowCompany
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

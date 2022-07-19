import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginRegisterView/LoginPage.vue'
import RegisterPage from '../views/LoginRegisterView/RegisterPage.vue';
import RegisterCustomer from '../views/LoginRegisterView/RegisterCustomer.vue';
import RegisterTechnician from '../views/LoginRegisterView/RegisterTechnician.vue';
import RegisterRidesharer from '../views/LoginRegisterView/RegisterRideSharer.vue';
import RegisterTowCompany from '../views/LoginRegisterView/RegisterTowCompany.vue';
import ForgotPassword from '../views/LoginRegisterView/ForgotPassword.vue';
import VerifyEmail from '../views/LoginRegisterView/VerifyEmail.vue';
import CustomerTabs from '../views/CustomerView/CustomerTabs.vue';

import CustomerTransactionHistoryView from '../views/CustomerView/CustomerTransactionHistoryView.vue';


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
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/verify-email',
    name: 'Verify Email',
    component: VerifyEmail
  },
  {
    path: '/customer',
    meta:{auth: true},
    component: CustomerTabs,
    children: [
      {
        path: '',
        redirect: '/customer/dashboard',
      },
      {
        path: '/customer/dashboard',
        component: () => import('@/views/CustomerView/CustomerDashboardView.vue'),
      },
      {
        path: "/customer/transactionhistory",
        component: CustomerTransactionHistoryView,
      },
      {
        path: '/customer/profile',
        component: () => import('@/views/CustomerView/CustomerProfileView.vue'),
      },
      {
        path: "/customer/transactionhistory/transactiondetails",
        component: () => import("@/views/CustomerView/CustomerTransactionDetailsView.vue")
      },
      {
        path: "/customer/dashboard/location",
        component: () => import("@/views/CustomerView/CustomerTechnicianLocationView.vue")
      },
      {
        path: "/customer/dashboard/location/cardetails",
        component: () => import("@/views/CustomerView/CustomerTechnicianCarDetailsView.vue")
      },
      {
        path: "/customer/dashboard/location/cardetails/waiting",
        component: () => import("@/views/CustomerView/CustomerTechnicianWaitingView.vue")
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import DashboardView from '@/views/customers/DashboardView';
import DefaultView from '@/views/customers/DefaultView';
import CarLocation from '@/views/customers/booking/CarLocation';
import ChooseService from '@/views/customers/booking/ChooseService';
import BookingForm from '@/views/customers/booking/BookingForm';
import SearchView from '@/views/customers/booking/SearchView';

const routes = [
  {
    path: '/',
    redirect: '/customer'
  },
  {
    path:'/customer',
    redirect: '/customer/dashboard',
    component: DefaultView,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: DashboardView
      },
      {
        path: 'car-location',
        name: 'Car Location',
        component: CarLocation
      },
      {
        path: 'choose-service',
        name: 'Choose Service',
        component: ChooseService
      },
      {
        path: 'booking-form',
        name: 'Booking Form',
        component: BookingForm
      },
      {
        path: 'searching',
        name: 'Searching',
        component: SearchView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

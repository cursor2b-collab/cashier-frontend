import { createRouter, createWebHistory } from 'vue-router'
import CashierPage from '../views/CashierPage.vue'
import PaymentConfirm from '../views/PaymentConfirm.vue'

const routes = [
  {
    path: '/',
    redirect: '/cashier/TEST123'
  },
  {
    path: '/cashier',
    redirect: '/cashier/TEST123'
  },
  {
    path: '/cashier/:orderSN',
    name: 'Cashier',
    component: CashierPage
  },
  {
    path: '/payment/:orderSN',
    name: 'Payment',
    component: PaymentConfirm
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
  },
  {
    path: '/cliente/:id',
    name: 'cliente',
    component: () => import(/* webpackChunkName: "users" */ '../views/UserView.vue'),
    props: true
  },
  {
    path: '/crear_cliente',
    name: 'crear_cliente',
    component: () => import(/* webpackChunkName: "users" */ '../views/NewUserView.vue')
  },
  {
    path: '/frontdesks',
    name: 'frontdesks',
    component: () => import(/* webpackChunkName: "frontdesk" */ '../views/FrontdesksView.vue')
  },
  {
    path: '/frontdesk/:id',
    name: 'frontdesk',
    component: () => import(/* webpackChunkName: "frontdesk" */ '../views/FrontdeskView.vue'),
    props: true
  },
  {
    path: '/crear_frontdesk',
    name: 'crear_frontdesk',
    component: () => import(/* webpackChunkName: "frontdesk" */ '../views/NewFrontdeskView.vue')
  },
  {
    path: '/entrenadores',
    name: 'entrenadores',
    component: () => import(/* webpackChunkName: "trainers" */ '../views/TrainersView.vue')
  },
  {
    path: '/entrenador/:id',
    name: 'entrenador',
    component: () => import(/* webpackChunkName: "trainers" */ '../views/TrainerView.vue'),
    props: true
  },
  {
    path: '/crear_entrenador',
    name: 'crear_entrenador',
    component: () => import(/* webpackChunkName: "trainers" */ '../views/NewTrainerView.vue')
  },
  {
    path: '/membresias',
    name: 'membresias',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipsView.vue')
  },
  {
    path: '/membresia/:id',
    name: 'membresia',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipView.vue'),
    props: true
  },
  {
    path: '/crear_membresia',
    name: 'crear_membresia',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/NewMembershipView.vue')
  },
  {
    path: '/objetivos',
    name: 'objetivos',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectivesView.vue')
  },
  {
    path: '/objetivo/:id',
    name: 'objetivo',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectiveView.vue'),
    props: true
  },
  {
    path: '/crear_objetivo',
    name: 'crear_objetivo',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/NewObjectiveView.vue')
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: () => import(/* webpackChunkName: "payments" */ '../views/PaymentsView.vue')
  },
  {
    path: '/registrar_pago',
    name: 'registrar_pago',
    component: () => import(/* webpackChunkName: "payments" */ '../views/NewPay.vue')
  },
  {
    path: '/citas',
    name: 'citas',
    component: () => import(/* webpackChunkName: "appointments" */ '../views/AppointmentsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

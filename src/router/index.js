import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'PanelDeControl',
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
    path: '/usuarios',
    name: 'UsuariosPrincipal',
    component: () => import(/* webpackChunkName: "users" */ '../views/BlankView.vue'),
    redirect: '/usuarios/lista',
    children: [
      {
        path: 'lista',
        name: 'Usuarios',
        component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
      },
      {
        path: ':id',
        name: 'Usuario',
        component: () => import(/* webpackChunkName: "users" */ '../views/UserView.vue')
      },
      {
        path: 'crear',
        name: 'UsuarioNuevo',
        component: () => import(/* webpackChunkName: "users" */ '../views/NewUserView.vue')
      }
    ]
  },
  {
    path: '/membresias',
    name: 'membresias',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipsView.vue')
  },
  {
    path: '/membresias/:id',
    name: 'membresia',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipView.vue'),
    props: true
  },
  {
    path: '/membresias/crear',
    name: 'crear_membresia',
    component: () => import(/* webpackChunkName: "memberships" */ '../views/NewMembershipView.vue'),
    props: { crear: true }
  },
  {
    path: '/objetivos',
    name: 'objetivos',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectivesView.vue')
  },
  {
    path: '/objetivos/:id',
    name: 'objetivo',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectiveView.vue'),
    props: true
  },
  {
    path: '/objetivos/crear',
    name: 'crear_objetivo',
    component: () => import(/* webpackChunkName: "objectives" */ '../views/NewObjectiveView.vue'),
    props: { crear: true }
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

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'panel_de_control',
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
    name: 'usuarios_principal',
    component: () => import(/* webpackChunkName: "users" */ '../views/BlankView.vue'),
    redirect: { name: 'usuarios' },
    children: [
      {
        path: 'lista',
        name: 'usuarios',
        component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
      },
      {
        path: ':id',
        name: 'usuario',
        component: () => import(/* webpackChunkName: "users" */ '../views/UserView.vue'),
        props: true
      },
      {
        path: 'crear',
        name: 'crear_usuario',
        component: () => import(/* webpackChunkName: "users" */ '../views/NewUserView.vue')
      }
    ]
  },
  {
    path: '/pagos',
    name: 'pagos_principal',
    component: () => import(/* webpackChunkName: "payments" */ '../views/BlankView.vue'),
    redirect: { name: 'pagos' },
    children: [
      {
        path: 'lista',
        name: 'pagos',
        component: () => import(/* webpackChunkName: "payments" */ '../views/PaymentsView.vue')
      },
      {
        path: 'registrar',
        name: 'registrar_pago',
        component: () => import(/* webpackChunkName: "payments" */ '../views/NewPay.vue')
      }
    ]
  },
  {
    path: '/citas',
    name: 'citas',
    component: () => import(/* webpackChunkName: "appointments" */ '../views/AppointmentsView.vue')
  },
  {
    path: '/administracion',
    name: 'administracion_principal',
    component: () => import(/* webpackChunkName: "admin" */ '../views/BlankView.vue'),
    redirect: { name: 'camp_principal' },
    children: [
      {
        path: 'camp',
        name: 'camp_principal',
        component: () => import(/* webpackChunkName: "campaigns" */ '../views/BlankView.vue'),
        redirect: { name: 'camps' },
        children: [
          {
            path: 'lista',
            name: 'camps',
            component: () => import(/* webpackChunkName: "campaigns" */ '../views/CampaignsView.vue')
          },
          {
            path: ':id',
            name: 'camp',
            component: () => import(/* webpackChunkName: "campaigns" */ '../views/CampaignView.vue'),
            props: true
          },
          {
            path: 'crear',
            name: 'crear_camp',
            component: () => import(/* webpackChunkName: "objectives" */ '../views/NewCampaignView.vue')
          }
        ]
      },
      {
        path: 'objetivos',
        name: 'objetivos_principal',
        component: () => import(/* webpackChunkName: "objectives" */ '../views/BlankView.vue'),
        redirect: { name: 'objetivos' },
        children: [
          {
            path: 'lista',
            name: 'objetivos',
            component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectivesView.vue')
          },
          {
            path: ':id',
            name: 'objetivo',
            component: () => import(/* webpackChunkName: "objectives" */ '../views/ObjectiveView.vue'),
            props: true
          },
          {
            path: 'crear',
            name: 'crear_objetivo',
            component: () => import(/* webpackChunkName: "objectives" */ '../views/NewObjectiveView.vue')
          }
        ]
      },
      {
        path: 'membresias',
        name: 'membresias_principal',
        component: () => import(/* webpackChunkName: "memberships" */ '../views/BlankView.vue'),
        redirect: { name: 'membresias' },
        children: [
          {
            path: 'lista',
            name: 'membresias',
            component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipsView.vue')
          },
          {
            path: ':id',
            name: 'membresia',
            component: () => import(/* webpackChunkName: "memberships" */ '../views/MembershipView.vue'),
            props: true
          },
          {
            path: 'crear',
            name: 'crear_membresia',
            component: () => import(/* webpackChunkName: "memberships" */ '../views/NewMembershipView.vue')
          }
        ]
      },
      {
        path: 'gimnasios',
        name: 'gimnasios_principal',
        component: () => import(/* webpackChunkName: "gyms" */ '../views/BlankView.vue'),
        redirect: { name: 'gimnasios' },
        children: [
          {
            path: 'lista',
            name: 'gimnasios',
            component: () => import(/* webpackChunkName: "gyms" */ '../views/GymsView.vue')
          },
          {
            path: ':id',
            name: 'gimnasio',
            component: () => import(/* webpackChunkName: "gyms" */ '../views/GymView.vue'),
            props: true
          },
          {
            path: 'crear',
            name: 'crear_gimnasio',
            component: () => import(/* webpackChunkName: "gyms" */ '../views/NewGymView.vue')
          }
        ]
      },
      {
        path: 'maquinas',
        name: 'maquinas_principal',
        component: () => import(/* webpackChunkName: "machines" */ '../views/BlankView.vue'),
        redirect: { name: 'maquinas' },
        children: [
          {
            path: 'lista',
            name: 'maquinas',
            component: () => import(/* webpackChunkName: "machines" */ '../views/MachinesView.vue')
          },
          {
            path: ':id',
            name: 'maquina',
            component: () => import(/* webpackChunkName: "machines" */ '../views/MachineView.vue'),
            props: true
          },
          {
            path: 'crear',
            name: 'crear_maquina',
            component: () => import(/* webpackChunkName: "machines" */ '../views/NewMachine.vue')
          }
        ]
      }
    ]
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

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/producto',
    name: 'Producto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "producto" */ '../views/Producto.vue')
  },
  {
    path: '/recetas',
    name: 'Recetas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recetas" */ '../views/Recetas.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },

  {
    path: '/aceitesesenciales',
    name: 'AceitesEsenciales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productos" */ '../views/AceitesEsenciales.vue')
  },
  
  {
    path: '/aceitespuros',
    name: 'Aceitespuros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productos" */ '../views/Aceitespuros.vue')
  },
  {
    path: '/arcillas',
    name: 'Arcillas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "productos" */ '../views/Arcillas.vue')
  },
  
  {
    path: '/politicas',
    name: 'Politicas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "políticas" */ '../views/Politicas.vue')
  },
  ,
  
  {
    path: '/team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "políticas" */ '../views/Team.vue')
  },
   
  {
    path: '/preguntasfrecuentes',
    name: 'Preguntasfrecuentes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "políticas" */ '../views/Preguntasfrecuentes')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
  ,
  {
    path: '/formularios/guardarusuario',
    name: 'Guardarusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registro */ '../views/formularios/Guardarusuario.vue')
  }
  ,
  {
    path: '/recuperacion',
    name: 'Recuperacion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recuperacion */ '../views/Recuperacion.vue')
  }
  ,
  {
    path: '/formularios/formacceso',
    name: 'Formacceso',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recuperacion */ '../views/formularios/Formacceso.vue')
  },
  
  {
    path: '/formularios/actualizarusuario',
    name: 'Actualizarusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/formularios/Actualizarusuario.vue')
  },
  {
    path: '/formularios/eliminarusuario',
    name: 'Eliminarusuario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/formularios/Eliminarusuario.vue')
  },

  {
    path: '/usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "recuperacion */ '../views/Usuarios.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

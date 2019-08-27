import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Auth from '@/components/Auth.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
});

// TODO - block routes unless logged in
// router.beforeEach((to, from, next) => {
// });

export default router;

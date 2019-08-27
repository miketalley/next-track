import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Auth from '@/components/Auth.vue';
import AuthReturn from '@/components/AuthReturn.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/authReturn',
      name: 'authReturn',
      props: route => ({
        code: route.query.code,
        state: route.query.state,
        error: route.query.error
      }),
      component: AuthReturn
    },
    {
      path: '*',
      name: 'auth',
      component: Auth
    }
  ]
});

// TODO - block routes unless logged in
// router.beforeEach((to, from, next) => {
// });

export default router;

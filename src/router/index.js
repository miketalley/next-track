import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Auth from '@/components/Auth.vue';
import AuthReturn from '@/components/AuthReturn.vue';
import Playlists from '@/components/Playlists.vue';
import Playlist from '@/components/Playlist.vue';

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
      path: '/playlists',
      name: 'playlists',
      component: Playlists
    },
    {
      path: '/playlist/:id',
      name: 'playlistid',
      component: Playlist
    },
    {
      path: '/playlist',
      name: 'playlist',
      props: true,
      component: Playlist
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

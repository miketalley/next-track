import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';
import prototypeGlobals from '@/utils/globals';
import { initializeSDK } from '@/utils/spotify';

Vue.use(Vuetify);
Vue.config.productionTip = false;
Object.assign(Vue.prototype, prototypeGlobals);
initializeSDK(store);

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify: new Vuetify({
    iconfont: 'md',
    theme: {
      dark: false
    }
  })
}).$mount('#app');

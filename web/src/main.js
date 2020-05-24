import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

// Creation of the bus for emitting events from children to non-parent components
window.bus = new Vue();

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

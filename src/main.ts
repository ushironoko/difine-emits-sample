import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import 'virtual:windi.css'

Vue.use(VueCompositionApi);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

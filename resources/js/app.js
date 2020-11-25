require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import VueTailwind from 'vue-tailwind'
import settings from './vueTailwindSettings.js'

Vue.component('app', require('./components/App.vue').default);

const app = new Vue({
    el: '#app',
    router,
});

Vue.use(VueTailwind, settings)
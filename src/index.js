import Vue from 'vue';
import router from '../router';

import App from './App.vue';

const app = new Vue({
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));

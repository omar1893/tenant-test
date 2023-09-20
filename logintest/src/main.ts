import { createApp } from 'vue';
import App from './App.vue';
import * as VueRouter from 'vue-router';
import routes from './routes';


const router = VueRouter.createRouter({
history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const token = window.localStorage.getItem("token");
  if(to.name === 'Login' && token) {
    return {name: 'Animals'}
  }
  if(to.name === 'Animals' && !token) {
    return {name: 'Login'}
  }
})

createApp(App).use(router).mount('#app')

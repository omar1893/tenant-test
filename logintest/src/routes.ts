import Animals from './views/Animals.vue';
import Login from './views/Login.vue';

const routes = [
  {
    path: '/',
    component: Animals,
    name: 'Animals',
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
];

export default routes;
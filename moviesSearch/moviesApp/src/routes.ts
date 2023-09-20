import Detail from './views/MovieDetail.vue';
import List from './views/MoviesList.vue';

const routes = [
  {
    path: '/',
    component: List,
    name: 'List',
  },
  {
    path: '/detail/:id',
    component: Detail,
    name: 'Detail'
  },
];

export default routes;
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Projects from './views/Projects.vue';
import Error404 from './views/Error404.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/projects',
    //   name: 'projects',
    //   component: Projects,
    // },
    {
      path: '*',
      name: '404',
      component: Error404,
    },
  ],
});

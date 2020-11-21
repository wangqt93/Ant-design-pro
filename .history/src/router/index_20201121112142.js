import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ "@/views/User/User.vue"),
    name: 'user',
    children: [
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "user" */ "@/views/User/Login.vue"),
        name: 'Login'
      },
      {
        path: '/register',
        component: () => import(/* webpackChunkName: "user" */ "@/views/User/Register.vue"),
        name: 'Register'
      }
    ]
  }

  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

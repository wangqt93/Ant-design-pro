import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () => import(/* webpackChunkName: "layout" */ "@/views/layout/User.vue"),
    children : [
      {
        path: "/user",
        redirect: '/login'
      },
      {
        path: "/user/login",
        name: "login",
        component: () => import(/* webpackChunkName: "user" */ '@/views/User/Login.vue')
      },
      {
        path: "/user/register",
        name: "register",
        component: () => import(/* webpackChunkName: "user" */ '@/views/User/Register.vue')
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

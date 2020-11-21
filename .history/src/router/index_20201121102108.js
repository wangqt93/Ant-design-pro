import Vue from "vue";
import VueRouter from "vue-router";
import User from "@/views/User/User.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: User,
    children : [
      {
        path: "/user/login",
        name: "login",
        component: () => import('@/views/User/Login.vue')
      },
      {
        path: "/user/register",
        name: "register",
        component: () => import('@/views/User/Register.vue')
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

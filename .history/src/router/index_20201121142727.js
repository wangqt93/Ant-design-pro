import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    //登录注册页面路由
    path: '/user',
    redirect: '/user/login',
    component: () => import(/* webpackChunkName: "layout" */ "@/layouts/UserLayout.vue"),
    children: [
      {
        path: '/user/login',
        component: () => import(/* webpackChunkName: "user" */ "@/views/User/Login.vue"),
        name: 'Login'
      },
      {
        path: '/user/register',
        component: () => import(/* webpackChunkName: "user" */ "@/views/User/Register.vue"),
        name: 'Register'
      }
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "user" */ "@/layouts/BasicLayout"),
    redirect: '/dashboard/analysis',
    children: [

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

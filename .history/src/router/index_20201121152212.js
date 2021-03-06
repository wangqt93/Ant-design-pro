import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
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
    //仪表盘
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/analysis',
    component: () => import(/* webpackChunkName: "user" */ "@/layouts/BasicLayout.vue"),
    children: [
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        component: () => import(/* webpackChunkName: "user" */ "@/views/dashboard/Analysis.vue")
      },
    ]
  },
  {
    path: '/dashboard/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "user" */ "@/views/Forms/BasicForm.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    redirect: '/user/login',
    component: () => import(/* webpackChunkName: "user" */ "@/views/User/User.vue") 
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

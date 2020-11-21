import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: ()=> import(/* webpackChunkName: "user" */ "@/views/User/user.vue"),
    children: [
      {
        path: '/login',
        component: () => import(/* webpackChunkName: "user" */ "@/views/")
        
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

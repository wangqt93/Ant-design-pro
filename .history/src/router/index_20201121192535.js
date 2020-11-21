import Vue from "vue";
import VueRouter from "vue-router";
import Notfound from "@/views/404.vue"
import Nprogress from "nprogress"
import "nprogress/nprogress.css"


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '*',
    name: '404',
    component: Notfound
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
    path: '/form',
    name: 'Form',
    component: {render : h => h('router-view')},
    children: [
      {
        path:'/form/basic-form',
        name: 'basicform',
        component: () => import(/* webpackChunkName: "user" */ "@/views/Forms/BasicForm.vue")
      },
      {
        path: '/form/step-form',
        name: 'StepForm',
        component: () => import(/* webpackChunkName: "user" */ "@/views/Forms/StepFOORM"),
        children: [
          {
            path: '/form/step-form',
            name: "stepform",
            redirect: '/form/step-form/info',
            component: () => import('@/views/Form/StepForm'),
            children: [
              {
                path: 'form/step-form/info',
                name: '',
                component: () => import('@/views/Form/StepForm/Step1.vue')
              },
              {
                path: 'form/step-form/confirm',
                name: 'confirm',
                component: () => import('@/view/Form/StepForm/Step2.vue')
              },
              {
                path: 'form/step-form/result',
                name: 'result',
                component: () => import('@/view/Form/StepForm/Step3.vue')
              }
            ]
          }
        ]
      }

    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,form,next) =>{
  Nprogress.start()
  next()
})
router.afterEach(() => {
  Nprogress.done()
})
export default router;

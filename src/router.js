import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login/login.vue";
import User from "./components/user/Home.vue";
import FindPswd from "./components/Findpswd/findpswd.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        /* { path: "", component: UserHome } */
      ]
    },
    {
      path: "/findpswd",
      name: "findpswd",
      component: FindPswd
    }
  ]
});

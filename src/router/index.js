import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Seminar from "../views/seminar/Index.vue";
import Timetable from "../views/timetable/Index.vue";
import Article from "../views/article/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/seminar",
    name: "seminar",
    component: Seminar
  },
  {
    path: "/timetable",
    name: "timetable",
    component: Timetable
  },
  {
    path: "/article",
    name: "article",
    component: Article
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

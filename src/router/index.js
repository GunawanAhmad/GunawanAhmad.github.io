import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/about.vue";
import Skills from "../views/skills.vue";
import Contact from "../views/contact.vue";
import Work from "../views/work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home Page",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/contact",
    name: "Contact Page",
    component: Contact
  },
  {
    path: "/work",
    name: "My Work Page",
    component: Work
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

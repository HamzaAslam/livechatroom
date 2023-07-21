import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config.js";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log("currnet user in auth guard", user);
  if (!user) {
    next({ name: "Home" });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) {
    next({ name: "Chatroom" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

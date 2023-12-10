import { createRouter, createWebHistory } from "vue-router";
import Login from "@/pages/login.vue";
import Dashboard from "@/pages/dashboard/dashboard.vue";

export const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "index",
    path: "/index",
    component: () => import("@/pages/index.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        component: Dashboard,
        name: "dashboard", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
      },
      {
        path: "/followTrend",
        component: () => import("@/pages/follow-trend/follow-trend.vue"),
        name: "followTrend", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
      },
      {
        path: "/notice",
        component: () => import("@/pages/message/index.vue"),
        name: "notice", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
        redirect: "/message",
        children: [
          {
            path: "/message",
            component: () => import("@/pages/message/children/message.vue"),
            name: "message", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/agreeCollection",
            component: () => import("@/pages/message/children/agree-collection.vue"),
            name: "agreeCollection", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/follower",
            component: () => import("@/pages/message/children/follower.vue"),
            name: "follower", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/comment",
            component: () => import("@/pages/message/children/comment.vue"),
            name: "comment", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/chat",
            component: () => import("@/pages/chat/index.vue"),
            name: "chat", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
        ],
      },
      {
        path: "/user",
        component: () => import("@/pages/user/index.vue"),
        name: "user", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
        redirect: "/note",
        children: [
          {
            path: "/note",
            component: () => import("@/pages/user/children/note.vue"),
            name: "note", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/agree",
            component: () => import("@/pages/user/children/agree.vue"),
            name: "agree", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
          {
            path: "/collection",
            component: () => import("@/pages/user/children/collection.vue"),
            name: "collection", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
          },
        ],
      },
      {
        path: "/push",
        component: () => import("@/pages/push/index.vue"),
        name: "push", // 用于 keep-alive, 必须与SFC自动推导或者显示声明的组件name一致
      },
    ],
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/pages/main.vue"),
  },
];
const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});
export default router;

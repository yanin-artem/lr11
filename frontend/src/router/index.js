import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/students",
    name: "Students",
    component: () => import("@/views/StudentsPage"),
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("@/views/GroupsPage"),
  },
  {
    path: "/students-edit/:id?",
    name: "StudentsEdit",
    props: (route) => {
      return {
        id: route.params.id,
      };
    },
    component: () => import("@/views/StudentsEdit"),
  },
  {
    path: "/group-edit/:id?/:name?",
    name: "GroupsEdit",
    props: (route) => {
      return {
        id: route.params.id,
        name: route.params.name,
      };
    },
    component: () => import("@/views/GroupEdit"),
  },
  {
    path: "/students-sorted/:filter_id?",
    name: "StudentsSorted",
    props: (route) => {
      return {
        id: route.params.filter_id,
      };
    },
    component: () => import("@/views/StudentsSorted"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/StudentsPage"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

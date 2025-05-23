import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import AttestationTable from "../views/AttestationTable.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/show",
    component: AttestationTable,
    name: "show"
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

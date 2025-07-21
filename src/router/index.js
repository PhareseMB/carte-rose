import { createMemoryHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Edit from "../views/Edit.vue";
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
  },
  {
    path: "/edit/:id",
    component: Edit,
    name: "edit"
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;

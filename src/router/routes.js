const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/gastos-comunes",
        component: () => import("pages/GastosComunes.vue"),
      },
      {
        path: "/haberes-edificio",
        component: () => import("pages/HaberesEdificio.vue"),
      },
      {
        path: "/contacto",
        component: () => import("pages/ContactoDirectiva.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

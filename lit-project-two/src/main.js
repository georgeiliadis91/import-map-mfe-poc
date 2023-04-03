import { Router } from "@vaadin/router";

function initRouter() {
  const router = new Router(document.querySelector("#app"));

  router.setRoutes([
    {
      path: "/",
      component: "my-home-mfe-two",
      action: () => import("./Home"),
    },
    {
      path: "/special",
      component: "my-special-mfe-two",
      action: () => import("./Special"),
    },
    {
      path: "/special/:id",
      component: "my-special-mfe-two",
      action: () => import("./Special"),
    },
  ]);
}

export function init() {
  window.addEventListener("load", () => initRouter());
}

// init();

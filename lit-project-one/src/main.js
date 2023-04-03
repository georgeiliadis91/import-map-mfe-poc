import { Router } from "@vaadin/router";

function initRouter() {
  const router = new Router(document.querySelector("#app"));

  router.setRoutes([
    {
      path: "/",
      component: "my-home-mfe-one",
      action: () => import("./Home"),
    },
    {
      path: "/special",
      component: "my-special-mfe-one",
      action: () => import("./Special"),
    }, 
  ]);
}

export function init() {
  window.addEventListener("load", () => initRouter());
}

// init();

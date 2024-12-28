import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <main className="container">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});

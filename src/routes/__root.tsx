import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 container *:py-3">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/todo" className="[&.active]:font-bold">
          Todo
        </Link>
      </div>
      <hr />
      <main className="container py-5">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
